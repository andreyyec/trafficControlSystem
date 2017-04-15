
const MongoClient = require('mongodb').MongoClient;

class dbManager {

    setup(){
        let that = this;

        MongoClient.connect('mongodb://localhost:27017/tcsdb', (err, database) => {
            if (err) {
                console.log('=> Debug => Database connection error');
                return console.log(err);
            }
            that.db = database;
            // database.collection('records1').find().toArray(function(err, results) {
            //   console.log(results)
            //   // send HTML file populated with quotes here
            // })
        });
    }

    findAllCollectionRecords(collection) {
        return this.db.collection(collection).find().toArray();
    }

    // CRUD EXAMPLES
    // INSERT
    //db.records1.insert({'year':'2017', 'month':'01', day:'01', 'time':'12:05:17'});

    constructor() {
        console.log('Starting Database Manager');
        this.setup(); 
    }
}

module.exports = dbManager;