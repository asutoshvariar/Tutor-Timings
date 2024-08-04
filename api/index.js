var nodePandoc = require('node-pandoc');
var src, args, callback;
const express = require('express');
var app = express();
const port = 3000;
const path = require('path');

src = "https://filesamples.com/samples/document/docx/sample4.docx";

args = '--extract-media ./media -f docx -t html5 -o ./public/sample4.html';

callback = function (err, result) {
 
    if (err) {
      console.error('Oh Nos: ',err);
    }

    console.log(result);
    return result;
};

nodePandoc(src, args, callback);

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/sample4.html'));
});

app.get('/media', (req, res) => {
    res.sendFile(path.join(__dirname, 'sample4.html'));
});

app.listen(port, () => console.log(`Testplot is listening on port ${port}.`));