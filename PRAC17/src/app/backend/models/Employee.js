const mongoose = require('mongoose');

// Define collection and schema
let EmployeeSc = new mongoose.Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'employees'
})
module.exports = mongoose.model('Employee', EmployeeSc)