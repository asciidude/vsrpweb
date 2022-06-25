require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', (req, res) => {
    res.send('200');
});

app.use('/discord', (req, res) => res.redirect('https://discord.gg/XGxMuKXb9F'));

app.listen(
    process.env.PORT,
    () => process.stdout.write(`Listening on port ${process.env.PORT}\n`)
);