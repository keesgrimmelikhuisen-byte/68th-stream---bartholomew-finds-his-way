namespace SpriteKind {
    export const Object = SpriteKind.create()
    export const Background = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pointer.overlapsWith(sticky)) {
        game.setDialogTextColor(12)
        game.setDialogFrame(img`
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            444444444444444444444444444444
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            555555555555555555555555555555
            `)
        game.setDialogCursor(img`
            . . . . 
            . . . . 
            . . . . 
            . . . . 
            `)
        game.showLongText("PW: WHERE I MET J.", DialogLayout.Center)
    } else if (pointer.overlapsWith(letter)) {
        envelope = sprites.create(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddfffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddffffffffffffffffffffffffffff
            ffffffffffffffffffffffddfffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffff
            fffffffffffffffffffffffdddffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffff
            fffffffffffffffffffffffdddddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffff
            fffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffff
            fffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffff
            ffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffff
            ffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffff
            ffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffff
            ffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffff
            ffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffff
            fffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffff
            fffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffff
            fffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffff
            fffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffff
            fffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffff
            fffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffff
            ffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffff
            ffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffff
            ffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffff
            fffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffff
            fffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffff
            fffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffff
            fffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffff
            fffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffff
            fffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffff
            fffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffff
            ffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffff
            ffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffff
            ffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
            ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ffffffffffffffffffffff
            fffffffffffffffffffffffffff1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ffffffffffffffffffff
            ffffffffffffffffffffffffff1.ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111fffffffffffffffffff
            ffffffffffffffffffffffffff1.ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111ffffffffffffffffff
            fffffffffffffffffffffffff11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111bbfffffffffffffff
            ffffffffffffffffffffffff111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111bb11fffffffffffffff
            fffffffffffffffffffffff1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1bb11111ffffffffffffff
            ffffffffffffffffffffff11111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb1111111ffffffffffffff
            ffffffffffffffffffffff11111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbb111111111ffffffffffffff
            fffffffffffffffffffff111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb111111111111ffffffffffffff
            fffffffffffffffffffff111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbb111111111111111fffffffffffff
            ffffffffffffffffffff1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddb111111111111111111fffffffffffff
            ffffffffffffffffffff1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb11111111111111111111ffffffffffff
            ffffffffffffffffffff1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb1111111111111111111111ffffffffffff
            fffffffffffffffffffbb111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb111111111111111111111111ffffffffffff
            ffffffffffffffffff1bbbb1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbb11111111111111111111111111ffffffffffff
            ffffffffffffffffff11111bbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb11111111111111111111111111111ffffffffffff
            ffffffffffffffffff11111111bbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb1111111111111111111111111111111ffffffffffff
            ffffffffffffffffff111111111111bbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb111111111111111111111111111111111ffffffffffff
            ffffffffffffffffff1111111111111111bbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb11111111111111111111111111111111111ffffffffffff
            ffffffffffffffffff11111111111111111111bbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb1111111111111111111111111111111111111ffffffffffff
            ffffffffffffffffff111111111111111111111111bbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb111111111111111111111111111111111111111ffffffffffff
            fffffffffffffffffff11111111111111111111111111111bbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddbb11111111111111111111111111111111111111111ffffffffffff
            fffffffffffffffffff11111111111111111111111111111111111bbbbdddddddddddddddddddddddddddddddddddddddddddddbb1111111111111111111111111111111111111111111ffffffffffff
            fffffffffffffffffff111111111111111111111111111111111111111bbbbddddddddddddddddddddddddddddddddddddbbdbb111111111111111111111111111111111111111111111ffffffffffff
            fffffffffffffffffff1111111111111111111111111111111111111111111bbbbddddddddddddddddddddddddddddddbb1bb11111111111111111111111111111111111111111111111ffffffffffff
            fffffffffffffffffff11111111111111111111111111111111111111111111111bbbdddddddddddddddddddddddddbb1b1b111111111111111111111111111111111111111111111111ffffffffffff
            ffffffffffffffffffff1111111111111111111111111111111111111111111111111bbdddddddddddddddddddddbb1bb111111111111111111111111111111111111111111111111111ffffffffffff
            ffffffffffffffffffff111111111111111111111111111111111111111111111111111bbbbbddddddddddddddbbbbb11111111111111111111111111111111111111111111111111111ffffffffffff
            ffffffffffffffffffff11111111111111111111111111111111111111111111111111111111bbbbbbbbbdddbbbb11111111111111111111111111111111111111111111111111111111ffffffffffff
            ffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111bbb1b1111111111111111111111111111111111111111111111111111111111ffffffffffff
            ffffffffffffffffffff111111111111111111111111111111111111111111111b11111111111111111111bbb11111111111111111111111111111b11111111111111111111111111111ffffffffffff
            ffffffffffffffffffff1111111111111111111111111111111111111111111bb111111111111111111111111111111111111111111111111111111bb111111111111111111111111111ffffffffffff
            ffffffffffffffffffff111111111111111111111111111111111111111111b1111111111111111111111111111111111111111111111111111111111bb1111111111111111111111111ffffffffffff
            ffffffffffffffffffff1111111111111111111111111111111111111111bb1111111111111111111111111111111111111111111111111111111111111bb11111111111111111111111ffffffffffff
            fffffffffffffffffffff11111111111111111111111111111111111111b11111111111111111111111111111111111111111111111111111111111111111bb111111111111111111111ffffffffffff
            fffffffffffffffffffff1111111111111111111111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111b11111111111111111111ffffffffffff
            fffffffffffffffffffff11111111111111111111111111111111111bb1111111111111111111111111111111111111111111111111111111111111111111111bb111111111111111111ffffffffffff
            fffffffffffffffffffff1111111111111111111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111111111bb1111111111111111ffffffffffff
            fffffffffffffffffffff111111111111111111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111111111111bb11111111111111ffffffffffff
            fffffffffffffffffffff11111111111111111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111111111111111bb111111111111ffffffffffff
            fffffffffffffffffffff1111111111111111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111111111111111111bb1111111111ffffffffffff
            fffffffffffffffffffff111111111111111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111111111111111111111bb11111111ffffffffffff
            fffffffffffffffffffff11111111111111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbb11111ffffffffffff
            fffffffffffffffffffff111111111111111111111111111bb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111b11111ffffffffffff
            fffffffffffffffffffff11111111111111111111111111b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffff
            fffffffffffffffffffff1111111111111111111111111b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffff
            ffffffffffffffffffffff11111111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffff
            ffffffffffffffffffffff111111111111111111111bb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffff
            ffffffffffffffffffffff11111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffff
            ffffffffffffffffffffff1111111111111111111b11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffff
            ffffffffffffffffffffff11111111111111111bb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffff
            ffffffffffffffffffffff1111111111111111b1111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffff11111111111111bb1111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffff111111111111bb11111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffff111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffff11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffff11111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffff111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `, SpriteKind.Background)
        game.setDialogTextColor(11)
        game.setDialogFrame(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            . . . . 
            . . . . 
            . . . . 
            . . . . 
            `)
        game.showLongText("" + padText("Dearest Barty,", 14) + "    I miss you! It seems so   long since our summer in      austria.", DialogLayout.Center)
        envelope.destroy()
    } else if (pointer.overlapsWith(computer)) {
        showComputerText("" + padText("> COMPUTER LOCKED", 26) + padText("> ENTER PASSWORD...", 26))
    } else if (pointer.overlapsWith(keyboard)) {
        if (game.askForString("ENTER PASSWORD:") == "austria") {
            showComputerText("" + padText("> UNLOCKED!", 26) + padText("> HELLO BARTHOLOMEW!", 26) + padText("> I'VE BEEN EXPECTING YOU...", 26) + padText("> IT HAS BEEN [3 YEARS] SINCE YOU LOGGED IN", 26))
        }
    }
})
function showComputerText (text: string) {
    game.setDialogTextColor(7)
    game.setDialogFrame(img`
        f f f 
        f f f 
        f f f 
        `)
    game.setDialogCursor(img`
        . . . . . . 
        . . . . . . 
        . . . . . . 
        . . . . . . 
        . . . . . . 
        7 7 7 7 7 7 
        `)
    game.showLongText(text, DialogLayout.Full)
}
function padText (text2: string, width: number) {
    paddedText = text2
    while (paddedText.length % width != 0) {
        paddedText = "" + paddedText + " "
    }
    return paddedText
}
let paddedText = ""
let envelope: Sprite = null
let sticky: Sprite = null
let letter: Sprite = null
let keyboard: Sprite = null
let computer: Sprite = null
let pointer: Sprite = null
pointer = sprites.create(assets.image`idk`, SpriteKind.Player)
controller.moveSprite(pointer)
pointer.setFlag(SpriteFlag.StayInScreen, true)
pointer.z = 10
computer = sprites.create(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ....................d...........................................
    ...................ddddddddddddddddddddd........................
    .................ddbbbbbbbbbbbbbbbbbbbbddddddddddddddddd........
    ...............ddbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddd......
    .............ddbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddd..
    ...........ddbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddd.
    .........ddbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddd.
    .......ddbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddd.
    .....ddbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddd.
    ...ddbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddffffffdddd.
    ..dbbbbbbbbbbbbbbbbbbddddddddddddddddddddffffffffffffffffffdddd.
    ...ddbbbbbbbbbbbbbbddddddddddddffffffffffffffffffffffffffffddddd
    ..dbbddddbbbbbbbbbddddddddddddfffffffffffffffffffffffffffffddddd
    ..dbbbbbbdddbbbbbbdddddddddffffffffffffffffffffffffffffffffddddd
    ..dbbbbbbbbbdddbbbdddddddddffffff111ffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbddbdddddddddfff111fffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbddddddddddff1ffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbddddddddddff1ffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbddddddddddfffffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ..dbbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ...dbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ...dbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ...dbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ...dbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ...dbbbbbbbbbbbbbdddddddddffffffffffffffffffffffffffffffffffdddd
    ...dbbbbbbbbbbbbbbddddddddffffffffffffffffffffffffffffffffffddd.
    ...dbbbbbbbbbbbbbbddddddddffffffffffffffffffffffffffffffffffddd.
    ...dbbbbbbbbbbbbbbddddddddffffffffffffffffffffffffffffffffffddd.
    ...dbbbbbbbbbbbbbbddddddddfffffffffffffffffffffffffffffffffdddd.
    ...dbbbbbbbbbbbbbbddddddddfffffffffffffffffffffffffffffffffddd..
    ...dbbbbbbbbbbbbbbddddddddfffffffffffffffffffffffffffffddddddd..
    ...dbbbbbbbbbbbbbbdddddddddffffffffffffffffffddddddddddddddddd..
    ...dbbbbbbbbbbbbbbdddddddddddffffffffddddddddddddddddddddddddd..
    ...dbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddd..
    ...dbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddd...
    ...dbbbbbbbbbbddbbddddddddddddddddddddddddddddddddddddddddddd...
    ...ddddddddddddddddddddddddddddddddddddddddddddddddddd.....d....
    ...d...............ddddddddddddddddddddddddddddddd........d.....
    ...d...............dddddddddddddddddddddddddddd...........d.....
    .............................ddddddddddddddd.............d......
    ..................................ddddd.........................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    `, SpriteKind.Object)
computer.setPosition(34, 46)
keyboard = sprites.create(img`
    ........................................................................
    ........................................................................
    ..........................................cccccccccccccccccc............
    .......................................cccbcbbbbcbbbbccbbbc.............
    ...................................ccccbbbbbcbbbbcbbbbbcbbbc............
    ............................cccccccbcbbbbbbbbcbbbbbbbbbbbccccc..........
    ........................ccccbccbbbbbbcbbbbbbbbcbbbbbcccccbbbbbc.........
    ....................ccccbbbbbbbcbbbbbbcbbbbbbbbcccccbbbbbbbbbbbc........
    ................ccccbbcbbbbbbbbcbbbbbbbbbbcccccbbbbcbbbbbbbbbbccc.......
    ............ccccbbbbbbbcbbbbbbbbcbbbccccccbbbbbbbbbbcbbbbbbbcccbcc......
    .......cccccbbbbcbbbbbbbcbbbbbbcccccbbbbbbbbcbbbbbbbbcbbccccbbbbbcc.....
    ....cccbbcbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbcbbbbbbccccbbbbbbbbbcc.....
    ....cbbbbbcbbbbbbccbbcccccccbbbbbbbbbbcbbbbbbbbcccccbbbbbbbbbccccbbc....
    ...ccbbbbbcbbbbbcccccbbbbbbbbbbcbbbbbbbcbbbccccbbbbbbbbbbbcccbbbbbbbc...
    ...ccbbbbcccbcccbbbbbbbcbbbbbbbbccbbbbbccccbbccbbbbbccccccbbbbbcbbbbbc..
    ...cbccccbbbbbbcbbbbbbbbcbbbbbbbbccccccbbbbbbbccbbbcccbbbbccbbbccbbbbcc.
    ...ccbcbbbbbbbbcbbbbbbbbbcbbbbccccbbbbbbbbbbbbbccccbcbbbbbbbcbbbccccccc.
    ....cbcbbbbbbbbbccbbbbbbbcccccbbcbbbbbbbcbbbcccbbbbbbcbbbbbbbcccccc.....
    .....cbcbbbbbbbbbcbbbccccbbbbbbbbcbbbbbbccccbbbbbbbbbccbcccccbcc........
    .....cbbcbbbbbbbbccccbbbcbbbbbbbbcbbccccbbbbbbbbbbbbbcccbccccc..........
    ......cbcbbbbbcccbbbbbbbbcbbbbbbbcccbbbbbbbbbbbbbbccccccc...............
    .......ccbccccbccbbbbbbbbbcbbccccbbbbbbbbbbbbbcccccc....................
    .......cbcbbbbbbcbbbbbbbbbcccbbcbbbbbbbbbbccccbccc......................
    ........ccbbbbbbccbbbbccccbbbbbccbbbbbccccbbccc.........................
    .........ccbbbbbbbbcccbbcbbbbbbbccccccbbbccc............................
    .........cbcbbbccccbbbbbbcbcccccbbbbbbccc...............................
    ..........ccbccbbcbbbbbbbccbbbbbcccccc..................................
    ...........ccbbbbbcbbbcccbbbcccc........................................
    ...........ccbbbbbcccccccccc............................................
    ............ccbbcccccc..................................................
    ............cccc.c......................................................
    ........................................................................
    `, SpriteKind.Object)
keyboard.setPosition(53, 90)
letter = sprites.create(img`
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    .................................11b1...........
    ...............................1111b11..........
    ..............................1111b11111........
    ............................11111b1111111.......
    .........................1111111b1111111111.....
    .....................11111111111b11111111111....
    ...................111111111111b1111111111111...
    .................1111111111111b11111111111111...
    ...............111111111111111b111bb1111bbbb1...
    ............11111111111111111b11111111111111bb..
    ..........11111111111111111bb11111111111111111b.
    ........11111111bbbbbbbbbbb11111111111111111111.
    ....1.11111bbbbb11111111111111111111111111......
    ....11bbbbb1111111111111b111111111111111........
    ......11111111111111111111111111111111..........
    .......111111111111111111111111111111...........
    ........11111111111111bb11111111111.............
    ..........111111111111b11111111.................
    ...........111111111111111111...................
    ............111111111111111.....................
    .............111111111111.......................
    ..............11111b111.........................
    ...............111b111..........................
    ................11b11...........................
    .................11.............................
    ................................................
    ................................................
    `, SpriteKind.Object)
letter.setPosition(120, 65)
sticky = sprites.create(img`
    ........................
    ................5.......
    ..............555.......
    ............55555.......
    ..........55555445......
    .......55555555555......
    ...5555555445555555.....
    5555555544555555c55.....
    5555555555555555cc55....
    555554555555c5555c555...
    554445555555cc55555555..
    .45555555ccc55555555555.
    .55555555ccc5555555c555.
    .555ccc55555555cc5ccc555
    ..55cc555555555c5c5c5555
    ..555c5555555c555c555555
    ...555555555c5c55555555.
    ...55555cc5555c555555...
    ....5555cc555555555.....
    ....5555c5c5555555......
    .....555555555..........
    .....5555555............
    ......5555..............
    ........................
    `, SpriteKind.Object)
sticky.setPosition(28, 83)
