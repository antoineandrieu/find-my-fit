const express = require('express');
const path = require('path');
const app = express();

app.get('/test', (req, res) => {
    res.send('Welcome to the backend!');
});

const port = process.env.PORT || 8000;
app.listen(port);
console.log('App is listening on port ' + port);
