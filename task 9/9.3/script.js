let a =1, b = 2, c = 3;  
if  ((a <= b) && (b <= c) || (a >= b) && (b >= c)) {
a *= 2;
b *= 2;
c *= 2;
} else {
a *= -1;
b *= -1;
c *= -1;
}
alert('a = ' + a + 'b = ' + b + 'c = ' + c);



