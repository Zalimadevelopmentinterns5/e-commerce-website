const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
    password: {
    type: String,
    required: true,
  },
    address: {
    type: String,
    required: true,
  },
    phone: {
    type: String,
    required: true,
  },
    createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;