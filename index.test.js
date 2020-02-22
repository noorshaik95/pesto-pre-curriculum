const {
    describe,
    it,
    expect,
    matchers
  } = require('./index')

let executes = 0
const noop = () => { executes += 1 }

describe('describe', () => {
    it('executes a callback function', () => {
        const actual = describe('', noop)

        expect(executes).toBe(1)
    })
})

describe('expect', () => {
    it('returns an object', () => {
        const actual = expect(true)

        expect(typeof actual).toBe('object')
        expect(typeof actual.toBe).toBe('function')
    })
})

describe('matchers', () => {
    describe('toBe', () => {
        it('works', () => {
            const actual = matchers('1').toBe('1')

            expect(actual).toBe(true)
        })
    })
})

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

describe('Arthimetic operations', () => {
    it('adds two numbers', () => {
        const result = add(1, 2)
        expect(result).toBe(3)
    });

    it('subtracts two numbers', () => {
        const result = subtract(1, 2)
        expect(result).toBe(-1)
    });

    it('multiplies two numbers', () => {
        const result = multiply(1, 2)
        expect(result).toBe(2)
    })

    it('divides two numbers', () => {
        const result = divide(1, 2)
        expect(result).toBe(0.5)
    })
})
