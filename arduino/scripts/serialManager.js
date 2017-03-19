
const SerialPort = require('serialport');

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

    constructor() {
        console.log('Constructor triggered');
       this.setup(); 
    }
}

module.exports = SerialManager;


/*class SerialManager {

    setup(){
        let that = this;

        that.port = new SerialPort('COM3',{
            baudrate: 9600,
            parser: SerialPort.parsers.readline('\n')
        },  function (err) {
            if (err) {
                that.connectionError = true;
                return console.log('Error: ', err.message);
            }else{
                this.initListeners();
            }
        });
    }

    initListeners(){
        let that = this;
        if (that.connectionError === true) {
            that.port.on('open', function(){
                console.log('Serial Port Connection established');
                that.port.on('data', function(data){
                    console.log(data);
                });
            });
        }else{
            console.log('Error while trying to setup the connection');
        }
    }

    init(){
        this.initListeners();
    }

    constructor() {
        
    }
}*/