function capitalize(string) {
    const firstChar = string.slice(0,1).toUpperCase()
    const next = string.substring(1, string.length)

    return (firstChar + next)
}

function reverseString(string) {
    let reverseString = ''

    for (let i = string.length - 1; i > -1; i--) {
        reverseString += string.charAt(i)
    }

    return reverseString
}

function ceasarCypher(string, factor) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w' ,'x' ,'y' ,'z']
    let encryptedString = ''

    for (let i = 0; i < string.length; i++) {
        const character = string.slice(i, i + 1)

        if (alphabet.includes(character)) {
            const index = alphabet.indexOf(character)
            let encryptIndex = index + factor

            if (encryptIndex - 25 > 0) {
                encryptIndex -= 26

                const encryptChar = alphabet[encryptIndex]

                encryptedString += encryptChar

                continue
            }

            const encryptChar = alphabet[encryptIndex]

            encryptedString += encryptChar

            continue
        }

        encryptedString += character
    }

    return encryptedString
}

function analyzeArray(array) {
    let object = {}
    let min = array[0]
    let max = array[0]

    for (const num of array) {
        if (num > max) max = num
        if (num < min) min = num
    }

    object.average = (array.reduce((prev, curr) => prev + curr)) / array.length
    object.min = min
    object.max = max
    object.length = array.length
    
    return object
}

const calculator = {
    add: function(a,b) {
            return a + b
        },
    substract: function(a,b) {
            return a - b
        },
    multiply: function(a,b) {
            return a * b
        },
    divide: function(a,b) {
            return a / b
        }
}

export { capitalize, reverseString, calculator, ceasarCypher, analyzeArray }