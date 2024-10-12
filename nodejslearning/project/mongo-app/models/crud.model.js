

import db from '../models/index.js'; // Adjust the path as necessary


// CRUD operations using db.employees

// Create
export const addEmployee= async(req, res) => {
  try {
    const employee = new db.employees(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Read all employees
export const getEmployees= async(req, res) => {
  try {
    const employees = await db.employees.find();
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Read one employee
export const getEmployee= async(req, res) => {
  try {
    const employee = await db.employees.findById(req.params.id);
    if (!employee) return res.status(404).send('Employee not found');
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update
export const updateEmployee= async(req, res) => {
  try {
    const employee = await db.employees.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).send('Employee not found');
    res.send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete
export const deleteEmployee= async(req, res) => {
  try {
    const employee = await db.employees.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).send('Employee not found');
    res.send('Employee deleted');
  } catch (error) {
    res.status(500).send(error);
  }
};


