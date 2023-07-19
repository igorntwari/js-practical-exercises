let Searching = (n)=> {
    let count = 0;
  for (let i = 1; i <= n; i++) {
    let numbr = i;
    while (numbr > 0) {
      if (numbr % 10 === 0) {
        count++;
      }
     numbr = Math.floor(numbr / 10);
    }
  }

  return count;
}
console.log(Searching(87)); // 55
console.log(Searching(100)); //this are proved test case