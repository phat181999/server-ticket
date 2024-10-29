import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config();

const connection = new Sequelize({
  dialect: 'postgres',                        
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  models: [__dirname + '/../models'],         
  logging: false,
});

export default connection;
