require('dotenv').config();

const enforce = require('express-sslify');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

if(process.env.ENV != 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.get('/', (req, res) => {
    res.render('index', { user: null });
});

app.get('/discord', (req, res) => res.redirect('https://discord.gg/XGxMuKXb9F'));

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(
    process.env.PORT,
    () => process.stdout.write(`Listening on port ${process.env.PORT}\n`)
);