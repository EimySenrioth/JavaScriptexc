const arrayDeFrutas = ['banana', 'manzana', 'pera', 'platano', 'papaya'];
//objeto
const frutas = {
    manzanas: 10,
    platanos: 5,
    naranjas: 8,
    uvas: 12
};

console.log(frutas);

for (const fruta in frutas) {
    console.log(`${fruta}: ${frutas[fruta]}`);
}

const keys = Object.keys(frutas);
let i = 0;
while (i < keys.length) {
    console.log(`${keys[i]}: ${frutas[keys[i]]}`);
    i++;
}
