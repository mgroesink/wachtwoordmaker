function shuffleText (originalText: any[]) {
    shuffledPassword = ""
    tekstlijst = originalText
    while (tekstlijst.length > 0) {
        position = randint(0, tekstlijst.length - 1)
        shuffledPassword = "" + shuffledPassword + tekstlijst[position]
        tekstlijst.removeAt(position)
    }
    return shuffledPassword
}
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
input.onGesture(Gesture.Shake, function () {
    lijst = []
    for (let index = 0; index <= "Hallo".length - 1; index++) {
        lijst.push("hallo".charAt(index))
    }
    resultaat = shuffleText(lijst)
    basic.showString("" + (resultaat))
})
input.onButtonPressed(Button.AB, function () {
    if (aantalCijfers < 2 || aantalLetters < 4 || aantalCijfers + aantalLetters < 8) {
        basic.showIcon(IconNames.Sad)
        music.playTone(131, music.beat(BeatFraction.Breve))
    } else {
        randomPassword = randomWachtwoord(aantalCijfers, aantalLetters)
    }
    basic.showString("" + (randomPassword))
})
input.onButtonPressed(Button.B, function () {
    aantalCijfers += 1
})
let randomPassword = ""
let resultaat = ""
let lijst: string[] = []
let letter = ""
let wachtwoord = ""
let position = 0
let tekstlijst: any[] = []
let shuffledPassword = ""
let aantalLetters = 0
let aantalCijfers = 0
aantalCijfers = 0
aantalLetters = 0
