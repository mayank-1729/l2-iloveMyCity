let express = require('express');
let routeHandler = require('./routes/routes')

let app = express();

app.set('view engine','ejs')
/* Setting path for static files. */
app.use(express.static( __dirname + '/public'));

/* Handling routes */
app.get('/', routeHandler.home);
app.get('/:city', routeHandler.city);

var PORT = process.env.PORT || 3000;

var server = app.listen(PORT, function(req, res){
    console.log("Server started at http://localhost:", +PORT)
});
