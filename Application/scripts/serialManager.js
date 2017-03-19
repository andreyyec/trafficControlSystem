
const SerialPort = require('serialport');

class SerialManager {

    initListeners(){
        let that = this;
        this.port.on('open', function(){
            console.log('Serial Port Opend');
            that.port.on('data', function(data){
                console.log(data);
            });
        });
    }

    test(){
        console.log('working')
    }

    constructor(options) {
        this.port = new SerialPort('COM3',{
            baudrate: 9600,
            parser: SerialPort.parsers.readline('\n')
        },  function (err) {
            if (err) {
                return console.log('Error: ', err.message);
            }
        });

        this.initListeners();
    }
}

module.exports = SerialManager;