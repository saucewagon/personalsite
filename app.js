const express = require('express');
const path = require('path');
const app = express();

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'hello'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'hello'
    });
});

app.get('/resume/', (req, res) => {
    res.render('resume', {
        title: 'hello'
    });
});

app.listen(3000, () => {
    console.log('server started');
});