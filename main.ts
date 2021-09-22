function getRandomLetter () {
    if (Math.randomBoolean()) {
        letter = String.fromCharCode(randint(65, 90))
    } else {
        letter = String.fromCharCode(randint(97, 122))
    }
    return letter
}
function shuffleText (originalText: string) {
    tempText = originalText
    shuffledText = ""
    while (tempText.length > 0) {
        position = randint(0, tempText.length - 1)
        shuffledText = "" + shuffledText + tempText.charAt(position)
        tempText = "" + tempText.substr(0, position) + tempText.substr(position + 1, tempText.length - position)
    }
    return shuffledText
}
input.onButtonPressed(Button.A, function () {
    numberOfLetters += 1
    basic.showString("" + (numberOfLetters))
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
    return shuffleText(password)
}
input.onButtonPressed(Button.AB, function () {
    if (numberOfDigits < 2 || numberOfLetters < 4 || numberOfDigits + numberOfLetters < 8) {
        basic.showIcon(IconNames.Sad)
        music.playTone(131, music.beat(BeatFraction.Breve))
    } else {
        basic.showString("" + (getRandomPassowrd(numberOfDigits, numberOfLetters)))
    }
})
input.onButtonPressed(Button.B, function () {
    numberOfDigits += 1
    basic.showString("" + (numberOfDigits))
})
function stringToArray (text: string) {
    textArray = []
    for (let index3 = 0; index3 <= text.length; index3++) {
        textArray.push(text.charAt(index3))
    }
    return textArray
}
function reset () {
    numberOfLetters = 0
    numberOfDigits = 0
}
function arrayToString (textArray: any[]) {
    result = ""
    for (let waarde of textArray) {
        result = "" + result + waarde
    }
    return result
}
let result = ""
let textArray: string[] = []
let numberOfDigits = 0
let password = ""
let numberOfLetters = 0
let position = 0
let shuffledText = ""
let tempText = ""
let letter = ""
reset()
