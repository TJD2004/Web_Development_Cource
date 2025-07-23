const express = require('express')
const app = express()
const port = 3000
//const logger = require('./MWCollection/logger');

function firstMiddleware(req, res, next) {
    console.log("FIrst Middleware");
    next();
}
app.use(firstMiddleware);

function secondMiddleware(req, res, next) {
    console.log("Second Middleware");
    next();
}

function thirdMiddleware(req, res, next) {
    console.log("Third Middleware");
    next();
}

// app.use(logger);


app.use(secondMiddleware);
app.use(thirdMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
