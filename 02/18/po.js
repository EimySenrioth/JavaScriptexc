class Book {
  constructor(titulo, autor, publicacion, estado, chapters = []) {
    this.titulo = titulo;
    this.autor = autor;
    this.publicacion = publicacion;
    this.estado = estado; 
    this.chapters = chapters;
  }

  agregarCapitulo(capitulo) {
    this.chapters.push(capitulo);
  }

  eliminarCapitulo(capitulo) {
    const index = this.chapters.indexOf(capitulo);
    if (index !== -1) {
      this.chapters.splice(index, 1);
    }
  }

  mostrarInfo() {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Publicación: ${this.publicacion}`);
    console.log(`Estado: ${this.estado}`);
    console.log(`Capítulos: ${this.chapters.join(", ")}`);
  }
}

// Crear instancias de libros
const libro1 = new Book("El principito", "Antoine de Saint-Exupery", 1943, "disponible", ["Capítulo 1", "Capítulo 2"]);
const libro2 = new Book("1984", "George Orwell", 1949, "disponible", ["Capítulo 1", "Capítulo 2"]);

// Llamar al método mostrarInfo()
libro1.mostrarInfo();
libro2.mostrarInfo();
