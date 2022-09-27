let choise = prompt("Виберіть опцію: 0 - з дюймів до сантиметрів, 1 - навпаки",""); 
if(choise == 0)
{
    let sm = prompt("Введіть число:","");
    sm = sm*2.54; 
    console.log(sm);
    
} 
else{
    let sm = prompt("Введіть число:","");
    sm = sm/2.54; 
    console.log(sm);}
