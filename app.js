const express = require('express');
const app = express();
const path = require("path");
const hbs = require('hbs')
const fs  = require('fs')


console.log(path.join(__dirname,'/partials'));

// to set the view engine 
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname,'/partials') )

app.get("/", (req,res)=>{
    res.render('fullwebsite');
 });

app.get("/hero", (req,res)=>{
    res.render('index');
 });


// build in middleware
// app.use(express.static(path.join(__dirname)))

app.get("/", (req,res)=>{
   res.send('hello from the express');
});

app.get("/about", (req,res)=>{
    fs.readFile('./' + 'index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.listen(8000,()=>{
    console.log("listening.........")
})
