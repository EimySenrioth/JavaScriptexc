let index = 1;
while (index <= 100) {
    console.log(index);
    index++;
}
for (let index = 1; index <= 10; index++) {
    console.log('iteracion', index);
}

const alumnos = ['Juan', 'Pedro', 'Maria', 'Lucia', 'Ana'];
for (let index = 0; index < alumnos.length; index++) {
    console.log('iteracion', index);
    console.log(alumnos[index]);
}

const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0)
        console.log('FizzBuzz');
    else if (index % 3 === 0)
        console.log('Fizz');
    else if (index % 5 === 0)
        console.log('Buzz');
    else
        console.log(index);
}