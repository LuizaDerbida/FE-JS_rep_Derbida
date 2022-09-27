let num = 666;
let name;
if ((num%2)==0)
name = 'парне';
else 
name = 'непарне'
if (num<10) 
name += ' однозначне число';
else if (num>9&&num<100) 
name += ' двузначне число';
else name += ' трьохзначне число';
console.log(name);
