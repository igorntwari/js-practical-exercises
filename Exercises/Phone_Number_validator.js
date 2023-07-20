let validatePhoneNumber =  (nmber) => /^([\d]{3})(-| )?([\d]{3})(-| )?([\d]{4})$/.test(nmber) 
   
console.log(validatePhoneNumber("1234567890")) ; // should return true
console.log(validatePhoneNumber("123-456-7890")) ; // should return true
console.log(validatePhoneNumber("123 456 7890")) ; // should return true
console.log(validatePhoneNumber("123-45-67890")) ; // should return false
console.log(validatePhoneNumber("1234-567890")) ; // should return false


