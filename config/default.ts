const dotenv = require('dotenv');

dotenv.config();

export default {
  port: 3100,
  host: 'localhost',
  dbUri: process.env.MONGO_URL,
  saltWorkFactor: 10,
}