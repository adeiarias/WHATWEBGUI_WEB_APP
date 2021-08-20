const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const scanRouter = require('./routes/scan')
const historyRouter = require('./routes/history')

app.use('/scan-website', scanRouter)
app.use('/scan-history', historyRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
