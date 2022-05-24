const express = require('express');
const app = express();

const fs = require('fs');

const showdown = require('showdown'),
      converter = new showdown.Converter();

converter.setFlavor('github');

const guide = fs.readFileSync('./GUIDE.md').toString();
      html = converter.makeHtml(guide);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render('template', {
        title: 'guide',
        body: html
    });
});

fs.readdirSync('./md_datas').forEach(file => {
    const file_value = fs.readFileSync(`./md_datas/${file}`).toString();
    const html_file = converter.makeHtml(file_value);
    
    app.get(`/${file.split('.')[0]}`, function (req, res) {
        res.render('template', {
            title: file.split('.')[0],
            body: html_file
        });
    });
});

app.listen(3000, function () {
    console.log('running');
});