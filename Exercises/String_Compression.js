function compressString(str) {
    let newStr = "";
    let counter = 1;
    for (let i = 0 ; i <str.length; i++) {
       if (str[i] === str[i+1]) {
        counter++
       } else {
       newStr += (`${str[i]}${counter}`)
       counter = 1
       }

    }
    return newStr
}
console.log(compressString("AAAABBBCCDAA"));
console.log(compressString("XYZ"));