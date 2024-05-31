import express from 'express';
import {
    getEmployees,
    getEmployee,
    addEmployee,
    updateEmployee,

} from '../controller/employee.js'

const router = express.Router();

router.get('/', getEmployees);
router.get('/:id', getEmployee);
router.post('/', addEmployee);
router.put('/:id', updateEmployee);




export default router;