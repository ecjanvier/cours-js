// la variable : var

// déclaration :
var varName;
console.log(varName); // undefined car pas assignée

// assignation :
varName = "varName";
console.log(varName); // 'varName'

// déclaration + assignation :
var myVar = "myVar";
console.log(myVar); // 'myVar'

// multiple déclarations :
var myVar1, myVar2, myVar3;

// multiple assignations :
myVar1 = 1;
myVar2 = 2;
myVar3 = 3;

console.log(myVar1, myVar2, myVar3); // 1 2 3

// réassignation d'une variable var :
var nomDeLaVariableVar;
console.log(nomDeLaVariableVar); // 'undefined'
nomDeLaVariableVar = 1;
nomDeLaVariableVar = [1, 2, 3];
nomDeLaVariableVar = "nomDeLaVariableVar";
console.log(nomDeLaVariableVar); // 'nomDeLaVariableVar'

// hoisting
console.log(varHoisting); // undefined à cause du hoisting
var varHoisting = "varHoisting";
console.log(varHoisting); // 'varHoisting'

// problème avec var :

// pas d'identifiant unique
var idUnique = "unique";
var idUnique = "pasUnique";
console.log(idUnique); // 'pasUnique' car il a écrasé la première valeur

// pas de portée de bloc
{
  var pasDeBloc = "pasDeBloc";
}
console.log(pasDeBloc); // 'pasDeBloc' car pas de portée de bloc

// autre problème de var :

// problème n°1 : confusion dans les bloc {}
var x = 1;
