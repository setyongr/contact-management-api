const jwt = require('jsonwebtoken');
const User = require('../../../models/user');
const RefreshToken = require('../../../models/refreshToken');
const config = require('../../../config/env');
const ApiError = require('../../../utils/ApiError');

function generateToken(user){
    const jwtPayload = {
        id: user._id
    }

    const jwtData = {
        expiresIn: config.jwtDuration
    }

    const secret = config.jwtSecret;
    return {
        accessToken: jwt.sign(jwtPayload, secret, jwtData),
        refreshToken: RefreshToken.generate(user).token
    }

}

module.exports = {
    /**
     * @api {post} /v1/auth/login Login User
     * @apiName AuthenticateUser
     * @apiGroup Authentication
     * 
     * @apiParam {email} email
     * @apiParam {string} password
     * 
     * @apiParamExample {json} Request Example:
     *      {
     *          "email": "foo@bar.com",
     *          "password": "foobar"
     *      }
     * 
     * @apiSuccess (200) {string} accessToken Token yang dipakain untuk authorization
     * @apiSuccess (200) {string} refreshToken Token yang digunakan untuk merefresh access token
     * 
     * @apiSuccessExample {json} Success-Response:
     *      HTTP/1.1 200 OK
     *      {
     *          "accessToken": "foo",
     *          "refreshToken": "bar"
     *      }
     */
    async authenticate(req, res, next){
        try{
            const user = await User.findOne({
                email: req.body.email
            })
            if(!user) throw new ApiError({message: "User not found", status: 422})

            user.comparePassword(req.body.password, (err, same) => {
                if(err) return next(err);
                if(same){
                    return res.status(200).json(generateToken(user))
                }
                return res.status(422).json({
                    error: 'Wrong email or password'
                })
            })

        } catch (error){
            return next(error)
        }
    },

    /**
     * @api {post} /v1/auth/register Register User Baru
     * @apiName RegisterNewUser
     * @apiGroup Authentication
     * 
     * @apiParam {email} email
     * @apiParam {string} password
     * 
     * @apiParamExample {json} Request Example:
     *      {
     *          "email": "foo@bar.com",
     *          "password": "foobar"
     *      }
     * @apiSuccess (200) {string} accessToken Token yang dipakain untuk authorization
     * @apiSuccess (200) {string} refreshToken Token yang digunakan untuk merefresh access token
     * 
     * @apiSuccessExample {json} Success-Response:
     *      HTTP/1.1 200 OK
     *      {
     *          "accessToken": "foo",
     *          "refreshToken": "bar"
     *      }
     */
    async register(req, res, next){
        try{
            const user = await User.create({
                email: req.body.email,
                password: req.body.password
            })

            return res.status(200).json(generateToken(user))
        } catch (error){
            return next(error);
        }
        
    },

    /**
     * @api {post} /v1/auth/refresh Refresh Token
     * @apiName RefreshToken
     * @apiGroup Authentication
     * 
     * @apiParam {email} email
     * @apiParam {string} refreshToken
     * 
     * @apiParamExample {json} Request Example:
     *      {
     *          "email": "foo@bar.com",
     *          "refreshToken": "foobar"
     *      }
     * @apiSuccess (200) {string} accessToken Token yang dipakain untuk authorization
     * @apiSuccess (200) {string} refreshToken Token yang digunakan untuk merefresh access token
     * 
     * @apiSuccessExample {json} Success-Response:
     *      HTTP/1.1 200 OK
     *      {
     *          "accessToken": "foo",
     *          "refreshToken": "bar"
     *      }
     */
    async refresh(req, res, next){
        try{
            const refresh = await RefreshToken.findOneAndRemove({
                userEmail: req.body.email,
                token: req.body.refreshToken
            });
            if(!refresh) throw new ApiError({message: "Token not found", status: 404})
            const user = await User.findOne({
                email: req.body.email
            });
            if(!user) throw new ApiError({message: "User not found", status: 404});
            return res.json(generateToken(user))
        } catch (error){
            return next(error);
        }
    }
}

