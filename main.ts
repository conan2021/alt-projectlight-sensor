basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            . # # # .
            . . # # #
            . . # # #
            . . # # #
            . # # # .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
