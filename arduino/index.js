const sManager = require('./scripts/serialManager.js');

//let sManager = new serialManager();

var serialManager = new sManager();
	serialManager.dbConnect();