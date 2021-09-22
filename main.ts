function getRandomLetter () {
    if (Math.randomBoolean()) {
        letter = String.fromCharCode(randint(65, 90))
    } else {
        letter = String.fromCharCode(randint(97, 122))
    }
    return letter
}
input.onButtonPressed(Button.A, function () {
    numberOfLetters += 1
})
input.onGesture(Gesture.Shake, function () {
	
})
function getRandomPassowrd (numberOfDigits: number, numberOfLetters: number) {
    password = ""
    for (let index = 0; index <= numberOfDigits - 1; index++) {
        password = "" + password + convertToText(randint(0, 9))
    }
    for (let index2 = 0; index2 <= numberOfLetters - 1; index2++) {
        password = "" + password + getRandomLetter()
    }
    return password
}
input.onButtonPressed(Button.AB, function () {
    if (numberOfDigits < 2 || numberOfLetters < 4 || numberOfDigits + numberOfLetters < 8) {
        basic.showIcon(IconNames.Sad)
        music.playTone(131, music.beat(BeatFraction.Breve))
    } else {
        randomPassword = getRandomPassowrd(numberOfDigits, numberOfLetters)
    }
    basic.showString("" + (randomPassword))
})
input.onButtonPressed(Button.B, function () {
    numberOfDigits += 1
})
function stringToArray (text: string) {
    textArray = []
    for (let index3 = 0; index3 <= text.length; index3++) {
        textArray.push(text.charAt(index3))
    }
    return textArray
}
function arrayToString (textArray: any[]) {
    result = ""
    for (let waarde of textArray) {
        result = "" + result + waarde
    }
    return result
}
let result: string[][][][][][][][] = []
let textArray: string[][][][][][][][][] = []
let randomPassword: string[][][][][][][][] = []
let password: string[][][][][][][][] = []
let letter: string[][][][][][][][] = []
let numberOfLetters = 0
let numberOfDigits = 0
let shuffledPassword = ""
let tekstlijst: any[] = []
let position = 0
let lijst: string[] = []
let resultaat = ""
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
numberOfDigits = 0
numberOfLetters = 0
