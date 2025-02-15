//trabajo clase
alert('este es un alerta');
var nombre = 'Juan';
var edad = 11;
var gusto = 'comer';
var gusto2 = 'dormir';
console.log('Mi nombre es ' + nombre + ' y tengo ' + edad + ' años. Me gusta ' + gusto + ' y ' + gusto2 + '.');
//esto es concatenar, es unir texto con variables ocn template strings
console.log(`Mi nombre es ${nombre} y tengo ${edad} años. Me gusta ${gusto} y ${gusto2}.`);
//esto es con template strings, es mas facil y rapido

//metodos de salida
console.log('Hola mundo');
alert('Hola mundo');
document.write('Hola mundo');

//metodos de entrada
prompt('Ingrese su nombre');
confirm('¿Desea salir de la pagina?');

var nombre = prompt('Ingrese su nombre');
var edad = prompt('Ingrese su edad');
var gusto = prompt('Ingrese su gusto');
var gusto2 = prompt('Ingrese su segundo gusto');
console.log(`Mi nombre es ${nombre} y tengo ${edad} años. Me gusta ${gusto} y ${gusto2}.`);

var numero1 = Number(prompt('Ingrese el primer numero'));
var numero2 =   Number(prompt('Ingrese el segundo numero'));
var resultado = parseInt(numero1) + parseInt(numero2);
console.log(`El resultado de la suma es ${resultado}`);