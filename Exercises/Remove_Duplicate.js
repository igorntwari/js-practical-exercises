
let duplicNumbrs = [1,2,3,4,5,3,6,4,7];
let  unDuplicNumbrs = duplicNumbrs.filter((el, indx) => {
     return duplicNumbrs.indexOf(el) === indx;
 });
 

console.log(unDuplicNumbrs); //  1, 2, 3, 4, 5, 6, 7
