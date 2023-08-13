const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log('Database error');
});
database.once('connected', () => {
    console.log('Database connected');
});

const app = express();
const routes = require('../routes.js');
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
    res.json({mess: 'All good!'});
});

app.use('/api', routes);

app.use((req, res) => {
    res.status(404).json({error: "Path Not Found"});
});

app.listen(port, () => {
  console.log(`Server running on [localhost:${port}]`);
});