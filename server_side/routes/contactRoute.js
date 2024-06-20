import express from 'express';
// import contactInfo from '../models/contact.js';
import postContact from '../controller/contactController.js';

const contactRoute = express.Router();
contactRoute.route('/contact').post(postContact);
export default contactRoute;