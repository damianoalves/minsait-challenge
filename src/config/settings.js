let settings = {};

settings.mongo = {}

settings.mongo.user = process.env.MONGO_USER || 'admin';
settings.mongo.pass = process.env.MONGO_PASS || 'secret';
settings.mongo.port = process.env.MONGO_PORT || '27017';
settings.mongo.host = process.env.MONGO_HOST || 'localhost';

export default settings;