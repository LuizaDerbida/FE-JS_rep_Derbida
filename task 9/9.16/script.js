let n = 10;

next_prim_num;
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) { //перевірка чи ділиться на 
    if (i % j == 0) continue next_prim_num; // якщо не підходить - переходимо на наступне.
  }

  alert( i );
}
