// Problème 1, confusion dans les blocs {} :
var x = 1;
if (true) {
  var x = 2; // même variable, car sa portée n’est pas celle du bloc !
  console.log(x); // 2
}
console.log(x); // 2
