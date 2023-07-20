function oddSquares(numbrs) {

    const oddSquares = numbrs.filter(item => item % 2 !== 0  )
    return oddSquares.map((item) =>  Math.pow(item,2))

}
console.log(oddSquares([1, 2, 3, 4, 5, 6]))