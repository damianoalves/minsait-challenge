import express from "express";
import paymentController from "../../controllers/payments.js";

const router = express.Router();

router.post('/', paymentController.createPayment);

router.get('/', paymentController.getAllPayment);

router.get('/daily-report', paymentController.dailyReport)

router.get('/:id', paymentController.getPayment);

export default router;
