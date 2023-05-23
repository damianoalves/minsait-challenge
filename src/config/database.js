import mongoose from "mongoose";
import settings from "./settings.js";

const user = settings.mongo.user
const pass = settings.mongo.pass
const host = settings.mongo.host
const port = settings.mongo.port

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}`, {
            useNewUrlParser: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectMongo;