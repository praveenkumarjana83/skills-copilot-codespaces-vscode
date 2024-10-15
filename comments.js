// Create web server
// 1. Import express
const express = require('express');
const app = express();
// 2. Create web server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// Create route
app.get('/comments', (req, res) => {
    res.send('Comments');
});
app.get('/comments/:id', (req, res) => {
    res.send(`Comment with id ${req.params.id}`);
});
app.get('/comments/:id/:name', (req, res) => {
    res.send(`Comment with id ${req.params.id} and name ${req.params.name}`);
});
app.get('/comments/:id/:name/:age', (req, res) => {
    res.send(`Comment with id ${req.params.id}, name ${req.params.name} and age ${req.params.age}`);
});