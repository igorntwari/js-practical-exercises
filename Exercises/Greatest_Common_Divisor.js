function GCD(num1, num2) {
   
    if (num2 === 0) {
        return num1;
    }
    return GCD(num2, num1 % num2);
 }
 
 console.log(GCD(12, 24)); // taste cases 