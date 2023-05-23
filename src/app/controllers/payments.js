import Payment from "../models/payments.js";
class paymentController {
    getPayment = async (req, res, next) => {
        try {
            const payment = await Payment.findOne({_id: req.params.id})
            return res.status(200).json(payment);
        } catch {
            return res.status(400).json({id : "Invalid payment id."});
        }

    };
    getAllPayment = async (req, res, next) => {
        const payments = await Payment.find();
        return res.status(200).json(payments);
    };

    createPayment = async (req, res, next) => {
        try {
            const post = new Payment({
                description: req.body.description,
                value: req.body.value,
                type: req.body.type,
                installments: req.body.installments,
                date: new Date()
            })
            await post.save()
            res.send(post)
        } catch (ValidationError) {
            let errors = {};
            Object.keys(ValidationError.errors).forEach((key) => {
                errors[key] = ValidationError.errors[key].message;
            });
            return res.status(400).send(errors);
        }
    }

    dailyReport = async (req, res, next) => {

        let start = new Date();
        start.setUTCHours(0,0,0,0);

        let end = new Date();
        end.setUTCHours(23,59,59,999);

        const payments = await Payment.find({
            date: {
                $gte: start,
                $lt: end
            }
        });

        let report = {

            "total_income": 0,
            "credit_income": 0,
            "debit_income": 0,
            "credit_payments_number": 0,
            "debit_payments_number": 0,
            "payments" : payments
        }

        for (const i in payments) {
            report.total_income += payments[i].value;
            if (payments[i].type === "credit") {
                report.credit_income += payments[i].value;
                report.credit_payments_number += 1;
            } else if (payments[i].type === "debit") {
                report.debit_income += payments[i].value;
                report.debit_payments_number += 1;
            }
        }

        report.total_income = report.total_income.toFixed(2);
        report.credit_income = report.credit_income.toFixed(2);
        report.debit_income = report.debit_income.toFixed(2);

        return res.status(200).json(report);

    }
}

export default new paymentController()