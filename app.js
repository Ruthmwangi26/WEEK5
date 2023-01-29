const express = require ('express');
const morgan = require('morgan');
// express app
const app = express ();
//register view engine
app.set('view engine', 'ejs');


//listen for requests(creates server instance)
app.listen(3000);


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