const express = require('express');
const app = express();


app.listen(9854);

app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', { root: __dirname });
})

app.get('/add-item', (req, res) => {
    res.sendFile('./pages/afafadd-item.html', { root: __dirname });
});

app.use((req, res) => {
    res.sendFile('./pages/error.html', { root: __dirname });
});