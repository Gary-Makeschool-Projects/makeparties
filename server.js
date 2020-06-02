// express
const express = require('express')
//handlebars
var exphbs = require('express-handlebars')

// intialize express as app
const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// root get request
app.get('/', (req, res) => {
    res.render('home', { msg: 'Handlebars are Cool!' });
  })

// port
const port = process.env.PORT || 8000;

// tell the app to start listening
app.listen(port, () => {
    console.log('Listeing on port ' + port)
})