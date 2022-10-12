let max, min,cnt;
let numReserve = []; 
function inputSomeValue() {
        min = parseFloat(prompt('Введіть нижню границю діапазону', ""));
        max = parseFloat(prompt('Введіть верхню границю діапазону', ""));
        cnt = parseFloat(prompt('Введіть кількість чисел', ""));
            if (isNaN(min) || isNaN(max) || isNaN(cnt)){//перевірка на числове значення
            alert("Це не число :( спробуй ще раз.")
            inputSomeValue();
            }else {
            alert("Все вірно! ")
            }
    }

    inputSomeValue();


while (numReserve.length <cnt) {
  let randomNumber = parseFloat ((Math.random() * (max - min) + min).toFixed(2))// генеруємо псевдовипадкове число у заданому діапазоні включно, обмежуючи до 2 знаків після коми;
  let found = false;
  for (let i = 0; i < numReserve.length; i++) {//заповнюємо масив до тих пір, поки в нас не вичерпано кількість чисел
  if (numReserve[i] === randomNumber){// якщо таке число вже є в масиві - пропускаємо
   found = true;
   break;
  }
  }
  if (!found) { numReserve[numReserve.length]=randomNumber; }
}
alert(numReserve);