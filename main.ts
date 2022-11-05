input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 24; index++) {
        led.plot(index % 5, index / 5)
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
