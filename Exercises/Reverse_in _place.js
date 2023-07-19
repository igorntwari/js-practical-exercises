let str = "I am the good boy";
let reversedStr = str.split(" ");
let newArr = [];
reversedStr.map((item)=>{
    item = item.split("").reverse().join("")
    newArr.push(item)
  
})
    console.log( newArr.join(" "))