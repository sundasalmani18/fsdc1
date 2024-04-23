const express = require('express');
const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello Class2');
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact');
})


app.listen(PORT, () => {
    console.log('Server is running', PORT)
})