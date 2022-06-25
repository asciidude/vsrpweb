require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', (req, res) => {
    res.send('200');
});

app.listen(
    process.env.INSECURE_PORT,
    () => process.stdout.write(`Listening on port ${process.env.INSECURE_PORT}\n`)
);