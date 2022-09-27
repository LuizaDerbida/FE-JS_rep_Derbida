let n = prompt(" число", ""); 
let d1 = n % 10; 
n = parseInt(n / 10);
let d2 = n % 10;
n = parseInt(n / 10); console.log("Сума цифр числа:", n + d1 + d2);
