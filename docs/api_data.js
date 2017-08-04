define({ "api": [
  {
    "type": "post",
    "url": "/v1/auth/login",
    "title": "Login User",
    "name": "AuthenticateUser",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n    \"email\": \"foo@bar.com\",\n    \"password\": \"foobar\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Token yang dipakain untuk authorization</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Token yang digunakan untuk merefresh access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"accessToken\": \"foo\",\n    \"refreshToken\": \"bar\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/resources/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/v1/auth/refresh",
    "title": "Refresh Token",
    "name": "RefreshToken",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "refreshToken",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n    \"email\": \"foo@bar.com\",\n    \"refreshToken\": \"foobar\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Token yang dipakain untuk authorization</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Token yang digunakan untuk merefresh access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"accessToken\": \"foo\",\n    \"refreshToken\": \"bar\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/resources/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/v1/auth/register",
    "title": "Register User Baru",
    "name": "RegisterNewUser",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n    \"email\": \"foo@bar.com\",\n    \"password\": \"foobar\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Token yang dipakain untuk authorization</p>"
          },
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "refreshToken",
            "description": "<p>Token yang digunakan untuk merefresh access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"accessToken\": \"foo\",\n    \"refreshToken\": \"bar\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/resources/auth.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "delete",
    "url": "/v1/contact/:id",
    "title": "Delete contact by id",
    "name": "DeleteContact",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>ID Kontak</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Pesan berhasil</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Contact Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/resources/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/v1/contact",
    "title": "List contact",
    "name": "ListContact",
    "group": "Contact",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "List",
            "description": "<p>semua contact</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/v1/resources/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "post",
    "url": "/v1/contact",
    "title": "New Contact",
    "name": "NewContact",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Nama Kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title Kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email Kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>Nomor telepon kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>Alamat kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>Perusahaan Kontak</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Foo Bar\",\n    \"title\": \"Foo\",\n    \"email\": \"wow@wow.com\",\n    \"phone\": \"12334\",\n    \"address\": \"Sample addssssress\",\n    \"company\": \"The great company\"      \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Contact baru yang di buat</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5981d747f2650923f9d00e4d\",\n    \"name\": \"Foo Bar\",\n    \"title\": \"Foo\",\n    \"email\": \"wow@wow.com\",\n    \"phone\": \"12334\",\n    \"address\": \"Sample addssssress\",\n    \"company\": \"The great company\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/resources/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "get",
    "url": "/v1/contact/:id",
    "title": "SHow contact by id",
    "name": "ShowContact",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>ID Kontak</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Contact yang ingin ditampilkan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5981d747f2650923f9d00e4d\",\n    \"name\": \"Foo bar\",\n    \"title\": \"Foo\",\n    \"email\": \"wow@wow.com\",\n    \"phone\": \"12334\",\n    \"address\": \"Sample addssssress\",\n    \"company\": \"The great company\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/resources/contact.js",
    "groupTitle": "Contact"
  },
  {
    "type": "put",
    "url": "/v1/contact/:id",
    "title": "Edit contact by id",
    "name": "UpdateContact",
    "group": "Contact",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>ID Kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>Nama Kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>Title Kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>Email Kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "phone",
            "description": "<p>Nomor telepon kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "address",
            "description": "<p>Alamat kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "company",
            "description": "<p>Perusahaan Kontak</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Foo Bar\",\n    \"title\": \"Foo\",\n    \"email\": \"wow@wow.com\",\n    \"phone\": \"12334\",\n    \"address\": \"Sample addssssress\",\n    \"company\": \"The great company\"      \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Contact baru yang di edit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5981d747f2650923f9d00e4d\",\n    \"name\": \"Foo Bar\",\n    \"title\": \"Foo\",\n    \"email\": \"wow@wow.com\",\n    \"phone\": \"12334\",\n    \"address\": \"Sample addssssress\",\n    \"company\": \"The great company\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/resources/contact.js",
    "groupTitle": "Contact"
  }
] });
