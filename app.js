
//calls the installed express app
const express = require('express');
const app = express();
//calls the routes directory and the index.js file
const index = require('./routes/index');

//calls the pug files
app.set('view engine', 'pug');
//calls the public folder for styling and templating
app.use(express.static('public'));

//allows the index.js file to used at the index
app.use("/", index);

//sets the local host to numbered port
const server = app.listen(8008, ()=>{
    console.log(`Port is listening to you carlos ${server.address().port}`);
});

//
// app.get('/', (req,res) =>{
//     res.render('index');
// });