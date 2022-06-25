require('dotenv').config();
const express = require('express');
const app = express();

if(process.env.ENV = 'prod') {
    const fs = require('fs');

    const credentials = {
        key: fs.readFileSync('../live/vsrp.me/privkey.pem', 'utf-8'),
        cert: fs.readFileSync('../live/vsrp.me/cert.pem', 'utf-8'),
        ca: fs.readFileSync('../live/vsrp.me/chain.pem', 'utf-8')
    }

    const https = require('https');
    const server = https.createServer(credentials, app);

    server.listen(
        process.env.SECURE_PORT,
        () => process.stdout.write(`Listening on port ${process.env.SECURE_PORT}\n`)
    );
}

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', (req, res) => {
    res.send('200');
});

if(process.env.ENV == 'dev') {
    app.listen(
        process.env.DEV_PORT,
        () => process.stdout.write(`Listening on port ${process.env.DEV_PORT}\n`)
    );
}