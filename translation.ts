import * as GrovePi from './libs'

var Commands = GrovePi.commands
var Board = GrovePi.board
var AccelerationI2cSensor = GrovePi.sensors.AccelerationI2C
var UltrasonicDigitalSensor = GrovePi.sensors.UltrasonicDigital
var AirQualityAnalogSensor = GrovePi.sensors.AirQualityAnalog
var DHTDigitalSensor = GrovePi.sensors.DHTDigital
var LightAnalogSensor = GrovePi.sensors.LightAnalog
var DigitalButtonSensor = GrovePi.sensors.DigitalButton
var LoudnessAnalogSensor = GrovePi.sensors.LoudnessAnalog
var RotaryAngleAnalogSensor = GrovePi.sensors.RotaryAnalog
var DustDigitalSensor = GrovePi.sensors.dustDigital
var DigitalOutput = GrovePi.sensors.DigitalOutput

namespace grove {
    // Led
    function ledOn(port) {
        var led = new DigitalOutput(port);
        led.turnOn();
    }

    function ledOff(port) {
        var led = new DigitalOutput(port);
        led.turnOff();
    }

    // Ultrasonic Ranger
    function pollUltrasonicRanger(port) {
        var ultrasonicSensor = new UltrasonicDigitalSensor(port)

        ultrasonicSensor.on('change', function (res) {
            // Do on Change
        })
        ultrasonicSensor.watch()
    }

    function pollButtonPress(port) {
        var buttonSensor = new DigitalButtonSensor(port)

        buttonSensor.on('down', function (res) {
            if(res == 'longpress') {
                // Handle long press
            }
            else {
                // handle short press
            }
        })
        buttonSensor.watch()
    }

    function pollRotaryAngle(port) {
        var rotaryAngleSensor = new RotaryAngleAnalogSensor(port)
        
        rotaryAngleSensor.start()
        rotaryAngleSensor.on('data', function (res) {
            // Do on Change
        })
    }

    function getRotaryAngleValue(port) {
        var rotaryAngleSensor = new RotaryAngleAnalogSensor(port)
        
        rotaryAngleSensor.start()

        return rotaryAngleSensor.read()
    }
}

export default grove;