const express = require('express');

const app = express();
let todoist = [];

app.get('/todoist/list', (_, res) => {
    res.json(todoist);
});

app.put('/todoist/:name', (req, res) => {
    todoist.push(req.params.name);
    res.status(204).end();
});

app.delete('/todoist/:id', (req, res) => {
    const index = Number(req.params.id);
    if (todoist.length < index) {
        res.status(400).json({error: "index range out"});
    }
    todoist.splice(index, 1);
    res.status(204).end();
})

app.listen(3000, () => {
    console.log(`Server is running`);
});