let strip: neopixel.Strip = null
maqueen.IR_callbackUser(function ({ myparam: message }) {
    if (message == 68) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
    }
    if (message == 67) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 150)
    }
    if (message == 70) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
    }
    if (message == 21) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
    }
    if (message == 64) {
        basic.showIcon(IconNames.Sad)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.motorStopAll()
    }
})
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
})
