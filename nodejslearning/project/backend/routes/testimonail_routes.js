import express from 'express';
import {

    getTestimonials,
    getTestimonial,
    addTestimonial,
    updateTestimonial,
  
} from '../controller/testimonials.js'

const router = express.Router();

router.get('/', getTestimonials);
router.get('/:id', getTestimonial);
router.post('/', addTestimonial);
router.put('/:id', updateTestimonial);


export default router;