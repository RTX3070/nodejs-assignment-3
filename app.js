const path = require('path');
const express = require('express');
const app = express();

const rootDir = require('./util/path');
const usersList = require('./routes/main');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersList);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000, () => console.log('Server listening on Port: 3000'));