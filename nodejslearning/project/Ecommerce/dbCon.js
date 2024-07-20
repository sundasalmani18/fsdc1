import mysql from 'mysql';

export const db = mysql.createConnection({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "root",
    database: "Ecommerce",
  
 }) 