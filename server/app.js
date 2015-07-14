var path = require('path');
var express = require('express');
var FlashCardModel = require('./models/flash-card-model');
var bodyParser = require('body-parser');
// NOTE: need node-sass-middleware for scss file to compile


var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

// The path of our public directory. ([ROOT]/public)
var publicPath = path.join(__dirname, '../public');

// The path of our index.html file. ([ROOT]/index.html)
var indexHtmlPath = path.join(__dirname, '../index.html');

// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// for more information about __dirname

// http://nodejs.org/api/path.html#path_path_join_path1_path2
// for more information about path.join

// When our server gets a request and the url matches
// something in our public folder, serve up that file
// e.g. angular.js, style.css
app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: false
}));

// If we're hitting our home page, serve up our index.html file!
app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});

app.use(function (req, res, next) {
	console.log('made it')
	next();
});

app.get('/cards', function (req, res) {

    var modelParams = {};

    if (req.query.category) {
    	modelParams.category = req.query.category;
    }

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});


app.post('/cards', function (req, res, next){
    var newCard = new FlashCardModel();
    console.log('req.body:', req.body);
    newCard.question = req.body.question;
    newCard.category = req.body.category;
    newCard.answers = req.body.answers;
    newCard.save(function(err, newCard){
        if(err) return next(err);
        res.send(newCard);
    });
    //REVIEW
/*    FlashCardModel.create(req.body)
    .then(function (newCard){
        res.send(newCard);
    })
    .then(null, next);*/
})

//route responds with updated flash card (after edit)
/*app.put('/cards/:flashCardId', function (req, res, next){
    FlashCardModel.findById(flashCardId, function(err, card){
        if(!card) return next(err);
        
        for(var key in req.body){
            card[key] = req.body[key];
        }

        card.save(function(err, card){
            if(err) return next(err);
            console.log("updated card:", card);
            res.send(card);
        })
        
    })
})*/


















