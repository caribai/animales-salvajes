//Crear las clases representadas en el diagrama implementando la herencia indicada
class Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get img() {
        return this._img;
    }
    get comentarios(){
        return this._comentarios;
    }
    set comentarios(nuevoComentario) { 
        this._comentarios = nuevoComentario; 
    }
    get sonido(){
        return this._sonido;
    }
}

class Leon extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
    }
    Rugir(){
    }
}
class Lobo extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
    }
    Aullar(){
    }
}
class Oso extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
    }
    Gruñir(){
    }
}
class Serpiente extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
    }
    Sisear(){
    }
}
class Aguila extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);
    }
    Chillar(){
    }
}
export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };