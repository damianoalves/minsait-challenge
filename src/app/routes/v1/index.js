import payments from './payments.js';
import express from "express";

const router = express.Router();

router.use('/payments/', payments);

export default router;
