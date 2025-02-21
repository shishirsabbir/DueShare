// imports
import { Router } from 'express';
import {
    deleteData,
    getAllData,
    getSingleData,
    greetHello,
    postData,
    updateData,
} from '../controllers/testController.js';

// define router
const router = Router();

// mount controller
router.get('/hello', greetHello);

router.get('/crud/:id', getSingleData);
router.patch('/crud/:id', updateData);
router.delete('/crud/:id', deleteData);

router.post('/crud', postData);
router.get('/crud', getAllData);

// exports
export default router;
