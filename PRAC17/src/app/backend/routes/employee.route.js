const express = require('express');
const employeeRoute = express.Router();
// Employee model
let Employee = require('../models/Employee');
// Add Employee
employeeRoute.route('/create').post((req, res, next) => {
  
  Employee.create(req.body).then((result)=>{
    res.json(result);
    console.log(result)})
    .catch((err)=>{console.log(err)})
});
// Get All Employees
employeeRoute.route('/').get((req, res) => {
  Employee.find({}).then((result)=>{res.json(result)})
  .catch((err)=>console.log(err))
 })

// Get single employee
employeeRoute.route('/read/:id').get((req, res) => {
  Employee.findById(req.params.id).then((result)=>{res.json(result)})
  .catch((err)=>console.log(err))

})

// Update employee
employeeRoute.route('/update/:id').put((req, res, next) => {
  Employee.findByIdAndUpdate(req.params.id,req.body).then((result)=>{res.json(result)})
  .catch((err)=>console.log(err))
})

// Delete employee
employeeRoute.route('/delete/:id').delete((req, res, next) => {
  Employee.findOneAndDelete(req.params.id).then((result)=>{res.json(result)})
  .catch((err)=>console.log(err))
})
module.exports = employeeRoute;