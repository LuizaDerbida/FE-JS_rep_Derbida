//Використовуючи оператор ?:

function checkAge(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}
//Використовуючи оператор ||:

function checkAge(age) {
  return age > 18 || confirm('Батьки дозволили?');
}
