const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const conn = require('./conn')
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
