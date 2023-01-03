// Problème n°1 : confusion dans les blocs {}
var x = 1;
if (true) {
  var x = 2; // même variable (sa portée n’est pas celle du bloc)
  console.log(x); // 2
}
console.log(x); // 2

// Problème n°2 : la portée
var a = 1;
