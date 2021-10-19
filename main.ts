basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    led.unplot(0, 0)
})
