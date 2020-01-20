var express    = require('express');			// express module
var app        = express();						// initiating express app
var http       = require('http');					// http module
var bodyParser = require('body-parser');	// body-parser module for reading request body
var server     = http.createServer(app);		// creating server

const Controllers = {
    SystemInfoController: require('./controllers/rest/SystemInfoController'),
    ImageLibraryController: require('./controllers/rest/ImageLibraryController')
};

app.get('/api/v1', Controllers.SystemInfoController.getBasicSystemInformation);
app.get('/api/v1/image-libraries', Controllers.ImageLibraryController.getAllAccredited);


var port = process.env.PORT || 8080;
server.listen(port);		// server starting on port '8080'

// cofiguring body-parser
app.use(bodyParser.json({	// setting json limit
    limit: 1024 * 10000
}));
app.use(bodyParser.text({ 	// setting text limit
    limit: 1024 * 10000
}));
app.use(bodyParser.raw({ 	// setting raw limit
    limit: 1024 * 10000
}));
app.use(bodyParser.urlencoded({		// setting url encoding
    extended: true
}));

//static file configuration
app.use(express.static(__dirname + '/editor'));
app.use('/_resources', express.static(__dirname + '/resources'));

// CORS Issue Fix
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
