const express = require('express')
const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./src/api/routes'));

app.listen(process.env.PORT || 3000);