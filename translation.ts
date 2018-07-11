import * as GrovePi from 'libs/index';

//var Commands = GrovePi.commands
//var Board = GrovePi.board
//var AccelerationI2cSensor = GrovePi.sensors.AccelerationI2C
var UltrasonicDigitalSensor = GrovePi.sensors.UltrasonicDigital
//var AirQualityAnalogSensor = GrovePi.sensors.AirQualityAnalog
//var DHTDigitalSensor = GrovePi.sensors.DHTDigital
//var LightAnalogSensor = GrovePi.sensors.LightAnalog
var DigitalButtonSensor = GrovePi.sensors.DigitalButton
//var LoudnessAnalogSensor = GrovePi.sensors.LoudnessAnalog
var RotaryAngleAnalogSensor = GrovePi.sensors.RotaryAnalog
//var DustDigitalSensor = GrovePi.sensors.dustDigital
var DigitalOutput = GrovePi.sensors.DigitalOutput

namespace grove {
    // Led
    export function ledOn(port : number) {
        var led = new DigitalOutput(port);
        led.turnOn();
    }

    export function ledOff(port : number) {
        var led = new DigitalOutput(port);
        led.turnOff();
    }

    // Ultrasonic Ranger
    export function pollUltrasonicRanger(port : number) {
        var ultrasonicSensor = new UltrasonicDigitalSensor(port)

        ultrasonicSensor.on('change', function (_res : any) {
            // Do on Change
        })
        ultrasonicSensor.watch()
    }

    export function pollButtonPress(port : number) {
        var buttonSensor = new DigitalButtonSensor(port)

        buttonSensor.on('down', function (res : string) {
            if(res == 'longpress') {
                // Handle long press
            }
            else {
                // handle short press
            }
        })
        buttonSensor.watch()
    }

    export function pollRotaryAngle(port : number) {
        var rotaryAngleSensor = new RotaryAngleAnalogSensor(port)
        
        rotaryAngleSensor.start()
        rotaryAngleSensor.on('data', function (_res : any) {
            // Do on Change
        })
    }

    export function getRotaryAngleValue(port : number) {
        var rotaryAngleSensor = new RotaryAngleAnalogSensor(port)
        
        rotaryAngleSensor.start()

        return rotaryAngleSensor.read()
    }
}

export default grove;