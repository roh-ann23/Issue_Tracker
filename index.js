const express = require('express');
// set up database
const db = require('./config/mongoose');
const port = 8000;
const app = express();
const dotenv = require('dotenv')

const expressLayouts = require('express-ejs-layouts');
app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));
app.use(expressLayouts);


//
dotenv.config();
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use('/', require('./routes'));

app.listen(port, () =>{
  // if (err) {
  //   console.log(`Error in running the server : ${err}`);
  // }
  console.log(`Server is running on the port: ${port}`);
});
