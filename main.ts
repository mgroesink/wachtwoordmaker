function randomWachtwoord (cijfers: number, letters: number) {
    wachtwoord = ""
    for (let index = 0; index <= aantalCijfers - 1; index++) {
        wachtwoord = "" + wachtwoord + convertToText(randint(0, 9))
    }
    for (let index = 0; index <= aantalLetters - 1; index++) {
        wachtwoord = "" + wachtwoord + randomLetter()
    }
    return wachtwoord
}
function randomLetter () {
    if (Math.randomBoolean()) {
        letter = String.fromCharCode(randint(65, 90))
    } else {
        letter = String.fromCharCode(randint(97, 122))
    }
    return letter
}
input.onButtonPressed(Button.A, function () {
    aantalLetters += 1
})
function shuffleTekst (tekst: string) {
	
}
input.onButtonPressed(Button.AB, function () {
    if (aantalCijfers < 2 || aantalLetters < 4 || aantalCijfers + aantalLetters < 8) {
        basic.showIcon(IconNames.Sad)
        music.playTone(131, music.beat(BeatFraction.Breve))
    } else {
        basic.showString("" + (randomWachtwoord(aantalCijfers, aantalLetters)))
    }
})
input.onButtonPressed(Button.B, function () {
    aantalCijfers += 1
})
let letter = ""
let wachtwoord = ""
let aantalLetters = 0
let aantalCijfers = 0
aantalCijfers = 0
aantalLetters = 0
