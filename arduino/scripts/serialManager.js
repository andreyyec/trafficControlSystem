
const   SerialPort = require('serialport'),
        MongoClient = require('mongodb').MongoClient;

class SerialManager {

    setup(){
        let that = this;

        MongoClient.connect('mongodb://localhost:27017/tcsdb', (err, database) => {
            if (err) {
                console.log('=> Debug => Database connection error');
                return console.log(err);
            }
            that.db = database;
            that.port = new SerialPort('COM3',{ baudrate: 9600, parser: SerialPort.parsers.readline('\n') }, (err) => {
                if (err) {
                    console.log('=> Debug => Serial port connection error');
                    return console.log('Error: ', err.message);
                }   
                this.initListeners();
            });
        })
    }

    initListeners(){
        let that = this;
        
        that.port.on('open', function(){
            console.log('Serial Port Connection established');
            that.port.on('data', function(data){
                console.log(data);
            });
        });
    }

    // dbConnect() {
    //     MongoClient.connect('mongodb://localhost:27017/local', function(err, db) {
    //         if (err) {
    //             console.log('error');
    //             console.error(err);
    //         }
    //         var collection = db.collection('collectionName');
    //         collection.find().toArray(function(err, docs) {
    //             console.log('db');
    //             console.log(docs);
    //         });
    //     });
    // }

    // CRUD EXAMPLES
    // INSERT
    //db.records1.insert({'year':'2017', 'month':'01', day:'01', 'time':'12:05:17'});

    constructor() {
        console.log('Starting Serial Manager');
        this.setup(); 
    }
}

module.exports = SerialManager;