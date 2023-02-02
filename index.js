const express = require ('express');
const morgan = require('morgan');
require('dotenv').config();


// connecting to mongodb
const mongoose = require('mongoose');

// let indexRouter = require('./routes/index');

// express app
const app = express ();

const PORT = process.env.PORT;




//listen for requests(creates server instance)
app.listen(PORT, () => {
   console.log('Server is running on PORT ${PORT}');
});

//register view engine
app.set('view engine', 'ejs');

// //middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res)=>{
// res.sendFile('./views/index.html' ,{root: __dirname});(this for HTML)
//for ejs files
res.render('index');
});
//404 page

app.use((req, res) =>{
 res.status(404).render('404', {title: '404'});      
});


// Connecting to the Database
let mongodb_url = 'mongodb://localhost:27017/week5';
let dbName = 'darkroom';
mongoose.connect(mongodb_url + dbName,)
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
   console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
   console.log(error);
})

//CRUD OPERATIONS
app.post('/week5', (req, res)=>{
    res.send('Create a new blog')
});