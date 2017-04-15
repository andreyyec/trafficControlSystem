const 	express = require('express'),
		expressLayouts = require('express-ejs-layouts'),
		app = express(),
		MongoClient = require('mongodb').MongoClient,
		dbMng = require('./scripts/dbManager.js');

let dbManager = new dbMng();

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

app.use(expressLayouts);
app.use('/public', express.static('public'));

app.listen(3000, (req, res) => {
    console.log('listening on 3000')
});

app.get('/', (req, res) => {
	var locals = {
	    tabTitle: 'Dashboard - TCSb',
	    mainTitle: 'Dashboard',
	    subTitle: 'Statistics Overview',
  	};

  	res.render('index', locals);

});

app.get('/charts', (req, res) => {
    //res.sendFile(__dirname + '/charts.html');
    
    var locals = {
	    tabTitle: 'Charts - TCSb',
	    mainTitle: 'Charts',
	    subTitle: '',
  	};

  	res.render('charts', locals);
});

app.get('/tables', (req, res) => {
    //res.sendFile(__dirname + '/tables.html');

    var locals = {
	    tabTitle: 'Tables - TCSb',
	    mainTitle: 'Tables',
	    subTitle: '',
  	};

  	res.render('tables', locals); 
});

app.get('/rest', (req, res) => {
    //console.log(dbManager.findAllCollectionRecords('records1'));
    dbManager.findAllCollectionRecords('records1').then( function(results) {
    	console.log(results);
    });
});

app.get('*', function(req, res){
    res.sendFile(__dirname + '/404.html');


   	var locals = {
		tabTitle: 'Not found error - TCSb',
	 	mainTitle: '',
		subTitle: '',
  	};

  	res.render('404', locals);
});
