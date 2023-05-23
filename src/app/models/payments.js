import mongoose, {Schema} from "mongoose";

const paymentSchema = Schema({

    value: {
        type: Number,
        required: true,
    },
    date : {
        type: String
    },
    type: {
        type: String,
        "enum": ["credit", "debit"],
        required: true,
    },

    installments : {
        type: Number,
        min : 0,
        validate:   {
            validator : Number.isInteger,
            message: 'Installments is not an integer value'
        },

    },

    description: {
        type: String
    },

});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;