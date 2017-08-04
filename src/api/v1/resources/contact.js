const Contact = require("../../../models/contact")
const ApiError = require('../../../utils/ApiError');

module.exports = {
    async load(req, res, next, id){
        try{
            const contact = await Contact.findById(id).exec();
            if(!contact) throw new ApiError({message: "Contact not found", status: 404})
            req.contact = contact;
            next();
        }catch(err){
            return next(err);
        }
    },

    /**
     * @api {get} /v1/contact List contact
     * @apiName ListContact
     * @apiGroup Contact
     * 
     * @apiSuccess (200) {Object[]} List semua contact
     */
    async list(req, res, next){
        try{
            const {limit = 50, skip=0} = req.query;
            const contacts = await Contact.find().skip(skip).limit(limit).exec();
            return res.json(contacts);
        }catch(err){
            return next(err);
        }
    },

    /**
     * @api {get} /v1/contact/:id SHow contact by id
     * @apiName ShowContact
     * @apiGroup Contact
     * 
     * @apiParam {string} id ID Kontak
     * 
     * @apiSuccess (200) {Object} body Contact yang ingin ditampilkan
     * 
     * @apiSuccessExample {json} Success-Response:
     *      HTTP/1.1 200 OK
     *      {
     *          "_id": "5981d747f2650923f9d00e4d",
     *          "name": "Foo bar",
     *          "title": "Foo",
     *          "email": "wow@wow.com",
     *          "phone": "12334",
     *          "address": "Sample addssssress",
     *          "company": "The great company"
     *      }
     */
    get(req, res, next){
        return res.json(req.contact);
    },

    /**
     * @api {put} /v1/contact/:id Edit contact by id
     * @apiName UpdateContact
     * @apiGroup Contact
     * 
     * @apiParam {string} id ID Kontak
     * @apiParam {string} [name] Nama Kontak
     * @apiParam {string} [title] Title Kontak
     * @apiParam {string} [email] Email Kontak
     * @apiParam {string} [phone] Nomor telepon kontak
     * @apiParam {string} [address] Alamat kontak
     * @apiParam {string} [company] Perusahaan Kontak
     * 
     * @apiParamExample {json} Request-Example:
     *      {
     *          "name": "Foo Bar",
     *          "title": "Foo",
     *          "email": "wow@wow.com",
     *          "phone": "12334",
     *          "address": "Sample addssssress",
     *          "company": "The great company"      
     *      }
     * 
     * @apiSuccess (200) {Object} body Contact baru yang di edit
     * 
     * @apiSuccessExample {json} Success-Response:
     *      HTTP/1.1 200 OK
     *      {
     *          "_id": "5981d747f2650923f9d00e4d",
     *          "name": "Foo Bar",
     *          "title": "Foo",
     *          "email": "wow@wow.com",
     *          "phone": "12334",
     *          "address": "Sample addssssress",
     *          "company": "The great company"
     *      }
     */
    async update(req, res, next){
        try{
            const contact = req.contact;
            Object.assign(contact, req.body);
            const new_contact = await contact.save();
            return res.json(new_contact)
        }catch(err){
            return next(err);
        }
    },

    /**
     * @api {post} /v1/contact New Contact
     * @apiName NewContact
     * @apiGroup Contact
     * 
     * @apiParam {string} name Nama Kontak
     * @apiParam {string} title Title Kontak
     * @apiParam {string} email Email Kontak
     * @apiParam {string} phone Nomor telepon kontak
     * @apiParam {string} address Alamat kontak
     * @apiParam {string} company Perusahaan Kontak
     * 
     * @apiParamExample {json} Request-Example:
     *      {
     *          "name": "Foo Bar",
     *          "title": "Foo",
     *          "email": "wow@wow.com",
     *          "phone": "12334",
     *          "address": "Sample addssssress",
     *          "company": "The great company"      
     *      }
     * 
     * @apiSuccess (200) {Object} body Contact baru yang di buat
     * 
     * @apiSuccessExample {json} Success-Response:
     *      HTTP/1.1 200 OK
     *      {
     *          "_id": "5981d747f2650923f9d00e4d",
     *          "name": "Foo Bar",
     *          "title": "Foo",
     *          "email": "wow@wow.com",
     *          "phone": "12334",
     *          "address": "Sample addssssress",
     *          "company": "The great company"
     *      }
     */
    async create(req, res, next){
        try{
            const contact = await Contact.create({
                name: req.body.name,
                title: req.body.title,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                company: req.body.company
            });
            res.json(contact);
        }catch(err){
            return next(err);
        }
    },

    /**
     * @api {delete} /v1/contact/:id Delete contact by id
     * @apiName DeleteContact
     * @apiGroup Contact
     * 
     * @apiParam {string} id ID Kontak
     * 
     * @apiSuccess (200) {string} message Pesan berhasil
     * 
     * @apiSuccessExample {json} Success-Response:
     *      HTTP/1.1 200 OK
     *      {
     *          "message": "Contact Deleted"
     *      }
     */
    async remove(req, res, next){
        try{
            const contact = await req.contact.remove();
            return res.json({message: "Contact Deleted"});
        }catch(err){
            return next(err);
        }
    }

}