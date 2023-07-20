

function statistics(numbrs) {
    const statistics = numbrs.reduce((sum, item)=> sum +=item , 0)
    return {
      sum:statistics,
      average:(statistics/numbrs.length),
      min:Math.min(...numbrs),
      max:Math.max(...numbrs)
    }
}
console.log(statistics( [1,2,3,4,5]))


  