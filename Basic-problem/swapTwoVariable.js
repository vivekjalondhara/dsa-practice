const swapTwoVariable = (arg) => {
    let { a, b } = arg
    a = a + b
    b = a - b
    a = a - b
    return { a, b }
}
console.log(swapTwoVariable({ a: 5, b: 3 }))