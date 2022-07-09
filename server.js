const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/settings', function (req, res) {
    res.sendFile(`${__dirname}/public/settings.html`);
  });

app.listen(3001, () => {
    console.log('server has been started on port 3001');
});

function fileHandler() {
    fs.open('testFile.txt', 'w', (err) => {
        if(err) throw err;
        console.log('File created');
    });
    
}



