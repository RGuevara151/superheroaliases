// load the things we need
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

// required module to make calls to a REST API
const axios = require('axios');
const { name } = require('ejs');

var selectedID = "";
app.use(bodyParser.urlencoded());

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.get("/", function(req,res){
{ axios.get(`https://superheroapi.com/api/10221405381743383/search/batman`)
.then((response)=>{
    let results = response.data;
    var hero = results
    let hero_arr = []
    for (i = 0; i < hero.results[0].biography.aliases.length; i++)
        hero_arr[i] = hero.results[0].biography.aliases[i];
        console.log(hero_arr)
    let hero_img = hero.results[0].image;
    console.log(hero_img)

        res.render('index.ejs', {
            hero_arr: hero_arr,
            hero_img: hero_img
        })
    }); 
    }});

    app.post('/heroform', function(req, res){
        var heroN = req.body.heroName
        { axios.get(`https://superheroapi.com/api/10221405381743383/search/${heroN}`)
        .then((response)=>{
            let results = response.data;
            var hero = results
            let hero_arr = []
            for (i = 0; i < hero.results[0].biography.aliases.length; i++)
                hero_arr[i] = hero.results[0].biography.aliases[i];
                console.log(hero_arr)
            let hero_img = hero.results[0].image.url;
            console.log(hero_img)
        
                res.render('index.ejs', {
                    hero_arr: hero_arr,
                    hero_img: hero_img
                })
            });
      
      }})

app.listen(8080);
console.log('8080 is the magic port');