let num;

do {
  num = prompt("Введіть число понад 100?", 0);
} while (num <= 100 && num);
//Цикл do.. While повторюється, поки діють дві перевірки:

//Num Check <= 100 - тобто введене число все ще менше 100.
//Check && num обчислюється в false, коли num є null або порожній рядок ''. цикл while повинен бути зупинений.
//num порівняння <= 100 при null дасть true, тому потрібна друга перевірка.

