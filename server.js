const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS server
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: "antonio"
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/', (req, res) => {
//     res.send('Hello data')
// });

app.listen(port, () => {
    console.log(`Escuchuando peticiones enel puerto ${port}`);
});