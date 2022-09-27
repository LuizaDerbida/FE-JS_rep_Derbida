let a = prompt("Input","");
let count = 0;
let sum = 0;
if(a < 10) {
count = 1;
sum = a % 10;} 
else{count = 2;
sum = parseInt(a / 10 + a % 10);} 

alert (sum); 
alert(count);
