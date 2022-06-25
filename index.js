require('dotenv').config();

const enforce = require('express-sslify');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(enforce.HTTPS());

app.get('/', (req, res) => {
    res.send('200');
});

app.get('/discord', (req, res) => res.redirect('https://discord.gg/XGxMuKXb9F'));

app.listen(
    process.env.PORT,
    () => process.stdout.write(`Listening on port ${process.env.PORT}\n`)
);