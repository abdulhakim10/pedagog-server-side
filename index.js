const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 5000;

const subjectName = require('./data/subject-name.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('API running');
})

app.get('/subject-name', (req, res) => {
    res.send(subjectName)
})

// for id 
app.get('/subject/:id', (req, res) => {
    const id = req.params.id;
    const item = subjectName.find(it => it.id === id)
    res.send(item)
})
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const item = subjectName.find(it => it.id === id)
    res.send(item)
})

app.listen(port, () => {
    console.log('pedagog api', port);
})