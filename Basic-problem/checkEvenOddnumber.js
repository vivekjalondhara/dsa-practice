const checkEvenOddNumber = (arg) => {
    const { num } = arg
    if (num % 2 === 0) {
        console.log(`${num} Is Even Number`)
        return true

    }
    console.log(`${num} Is Odd Number`)
    return false
}

console.log(checkEvenOddNumber({ num: 10 }))