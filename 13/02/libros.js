let librosLeidos = [];

function agregarLibro(titulo) {
    if (titulo && typeof titulo === "string") {
        librosLeidos.push(titulo);
        console.log(`Libro agregado: ${titulo}`);
    } else {
        console.log("Por favor, proporciona un título válido.");
    }
}

function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// Test usando node libros.js, pues ya lo tengo instalado en mi computadora
agregarLibro("El principito");
agregarLibro("1984");
agregarLibro("Cien años de soledad");
mostrarLibrosLeidos();
//PS C:\Users\PC\Desktop\jvdesdeo> cd "C:\Users\PC\Desktop\jvdesdeo\13\02"
//PS C:\Users\PC\Desktop\jvdesdeo\13\02> node libros.js
//Libro agregado: El principito
//Libro agregado: 1984
//Libro agregado: Cien años de soledad
//Libros leídos:
//1. El principito
//2. 1984
//3. Cien años de soledad