const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is Backend of WebSite');
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
