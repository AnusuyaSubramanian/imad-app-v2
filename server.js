var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles = {
'Article-One' : {
    title : 'Article One | Anusuya Subramanian',
    heading : 'Article One',
    date : 'Feb 13 2017',
    content : `
        <p>
        This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article.
       </p>
       <p>
        This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article.
       </p>
       <p>
        This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article. This is the content for the first article.
       </p>
    `
},
'Article-Two' : {
    title : 'Article Two | Anusuya Subramanian',
    heading : 'Article Two',
    date : 'Feb 23 2017',
    content : `
        <p>
        This is the content for the second article.
       </p>
    `
},
'Article-Three' : {
    title : 'Article Three | Anusuya Subramanian',
    heading : 'Article Three',
    date : 'Feb 30 2017',
    content : `
        <p>
        This is the content for the third artcle.
       </p>
    `
}
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />   
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:ArticleName', function(req, res){
    var ArticleName = req.params.ArticleName;
    res.send(createTemplate(Articles[ArticleName]));
});

app.get('/article-two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
