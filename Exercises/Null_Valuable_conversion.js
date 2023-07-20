let convertNullableValues = (obj) => {
for (let i in obj) {
    if (obj[i] === null) obj[i] = 0;
    if (obj[i] === undefined) obj[i] = "";
}
return obj

}

let person = {
    name: "igor",
    data: undefined,
    age : null
}
console.log(convertNullableValues(person))