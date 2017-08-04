const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  company: { type: String, required: true }
})

module.exports = mongoose.model('Contact', contactSchema)