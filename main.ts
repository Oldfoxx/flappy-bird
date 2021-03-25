input.onButtonPressed(Button.A, function () {
    Igrac.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Igrac.change(LedSpriteProperty.Y, 1)
})
let Prazan_Y = 0
let PlociceZida = 0
let Igrac: game.LedSprite = null
let index = 0
let Prepreka_1: game.LedSprite[] = []
Igrac = game.createSprite(0, 2)
Igrac.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Prepreka_1.length > 0 && Prepreka_1[0].get(LedSpriteProperty.X) == 0) {
        Prepreka_1.removeAt(0).delete()
    }
    for (let Prepreka_3 of Prepreka_1) {
        Prepreka_3.change(LedSpriteProperty.X, -1)
    }
    if (PlociceZida % 3 == 0) {
        Prazan_Y = randint(0, 4)
        for (let prolaz = 0; prolaz <= 4; prolaz++) {
            if (prolaz != Prazan_Y) {
                Prepreka_1.push(game.createSprite(4, prolaz))
            }
        }
    }
    for (let Prepreka_2 of Prepreka_1) {
        if (Prepreka_2.get(LedSpriteProperty.X) == Igrac.get(LedSpriteProperty.X) && Prepreka_2.get(LedSpriteProperty.Y) == Igrac.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    PlociceZida += 1
    basic.pause(1000)
})
