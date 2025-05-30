import dotenv from 'dotenv';
import Routes from "./routes/indexRoute.js"; 

dotenv.config();

import './server.js';

console.log("POSTGRES_HOST:", process.env.POSTGRES_HOST);
console.log("POSTGRES_DB:", process.env.POSTGRES_DB);
console.log("POSTGRES_USERNAME:", process.env.POSTGRES_USERNAME);
console.log("POSTGRES_PASSWORD:", process.env.POSTGRES_PASSWORD);
console.log("POSTGRES_PORT:", process.env.POSTGRES_PORT);
