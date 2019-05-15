const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://admin:adminadmin@cluster0-dhg7o.mongodb.net/unform?retryWrites=true', {
    useNewUrlParser: true
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(process.env.PORT || 3333);