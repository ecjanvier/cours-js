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
console.log(nomDeLaVariableVar); // 'undefine'
nomDeLaVariableVar = 1;
nomDeLaVariableVar = [1, 2, 3];
nomDeLaVariableVar = "nomDeLaVariableVar";
console.log(nomDeLaVariableVar); // 'nomDeLaVariableVar'
