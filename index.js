const express = require('express');
const { apiRouter } = require('./routes');
const { connect } = require('mongoose');
const { connectDB } = require('./config/db');
const port = 3000;

const app = express()
app.use(express.json())

connectDB();

app.get('/', (req, res) => {
  res.send('HELLO BACKEND DEVELOPER')
})

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})