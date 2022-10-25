const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const subjectName = require('./data/subject-name.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('API running');
})

app.get('/subject-name', (req, res) => {
    res.send(subjectName)
})

app.listen(port, () => {
    console.log('pedagog api', port);
})