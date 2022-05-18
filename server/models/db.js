require ('dotenv').config();
const express = require ('express');
const mysql = require('mysql2');

const con = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PSWD,
    database: process.env.MYSQL_DB
});

const query = (sql, binding) => {
    return new Promise ((resolve, reject) =>{
        con.query(sql,binding, (err, result,fields) => {
            if (err) reject (err);
            resolve(result);
        });
    });
}

const createQuery ="Create database if it does not exist bmi;";
con.query(createQuery);

module.exports = {con, query};