function isLeapYear(year){

  return ((year %100 === 0 && year % 400 === 0)|| (year % 100 != 0 && year % 4 === 0)) ? "It is a leap year" : "Not a leap year";
}
