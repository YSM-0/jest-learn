import { capitalize, reverseString, calculator, ceasarCypher, analyzeArray } from "./exercise";

test('marseille to be Marseille', () => {
    expect(capitalize('marseille')).toBe('Marseille')
})

test('cacaboudin to be Cacaboudin', () => {
    expect(capitalize('cacaboudin')).toBe('Cacaboudin')
})

test('yohan to be nahoy', () => {
    expect(reverseString('yohan')).toBe('nahoy')
})

test('1 + 3 = 4', () => {
    expect(calculator.add(1,3)).toBe(4)
})

test('1 - 3 = -2', () => {
    expect(calculator.substract(1,3)).toBe(-2)
})

test('3 * 3 = 9', () => {
    expect(calculator.multiply(3,3)).toBe(9)
})

test('9 / 3 = 3', () => {
    expect(calculator.divide(9,3)).toBe(3)
})

test('attack at dawn! returns fyyfhp fy ifbs!', () => {
    expect(ceasarCypher('attack at dawn!', 5)).toBe('fyyfhp fy ifbs!')
})

test('phrase plus longue et factor different', () => {
    expect(ceasarCypher('attack at dawn? et encore plus!!! zzxcr', 7)).toBe('haahjr ha khdu? la lujvyl wsbz!!! ggejy')
})

test('return the good object', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})