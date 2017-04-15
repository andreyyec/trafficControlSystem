
const   SerialPort = require('serialport'),
        MongoClient = require('mongodb').MongoClient;

class SerialManager {

    setup(){
        let that = this;

        that.port = new SerialPort('COM3',{
            baudrate: 9600,
            parser: SerialPort.parsers.readline('\n')
        },  function (err) {
            if (err) {
                return console.log('Error: ', err.message);
            }else{
                this.initListeners();
            }
        });
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

    dbConnect() {
        MongoClient.connect('mongodb://localhost:27017/local', function(err, db) {
            if (err) {
                console.log('error');
                console.error(err);
            }
            var collection = db.collection('collectionName');
            collection.find().toArray(function(err, docs) {
                console.log('db');
                console.log(docs);
            });
        });
    }

    constructor() {
        console.log('Constructor triggered');
        //this.setup(); 
    }
}

module.exports = SerialManager;