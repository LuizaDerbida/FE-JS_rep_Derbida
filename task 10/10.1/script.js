function isEmpty(obj) {
  for (let key in obj) {
    // якщо тіло циклу почне працювати - означає, що об'єкт має властивості
    return false;
  }
  return true;
}
