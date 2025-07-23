const express = require('express')
const app = express()

function logger(req, res, next) {
    console.log("Logger Middleware");
    next();
}

// function auth(req, res, next) {
//     console.log("Auth Middleware");
//     next();
// }

module.exports = {logger};
