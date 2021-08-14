$( document ).ready(function() {
//Se dividie el código en módulos y se importa
import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./clases.js"; // Dividir el código en módulos 

//Funcion que extraje los datos de un animal
const data = async(animal) => {
    const request = await fetch("animales.json");
    const result = await request.json();
    const animal_info = result.animales.find((p) => p.name == animal)
    return animal_info
}
//Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales
document.getElementById('animal').addEventListener('change', async () => {
    const animal_select = document.getElementById('animal').value
    const animal_data = await data(animal_select)
    document.getElementById('preview').innerHTML = `<img class="card-img-top" src="assets/imgs/${animal_data.imagen}" alt=""></img>`
})

let animales_salvajes = [];

document.getElementById('btnRegistrar').addEventListener('click', async () => {
    let animal = document.getElementById('animal').value
    const animal_data = await data(animal)
    const comentarios = document.getElementById("comentarios").value;
    const edad = document.getElementById("edad").value;
    const sonido = `/assets/sounds/${animal_data.sonido}`
    const img = animal_data.imagen
    //Validacion de campos 
    if (animal && edad && comentarios) {
    //Crear las instancias de las clases utilizando los datos del formulario.

        switch (animal) {
        case 'Leon':
            animales_salvajes.push(new Leon(animal, edad, img, comentarios, sonido));
            break;
        case 'Lobo':
            animales_salvajes.push(new Lobo(animal, edad, img, comentarios, sonido));
            break;
        case 'Oso':
            animales_salvajes.push(new Oso(animal, edad, img, comentarios, sonido));
            break;
        case 'Serpiente':
            animales_salvajes.push(new Serpiente(animal, edad, img, comentarios, sonido));
            break;
        case 'Aguila':
            animales_salvajes.push(new Aguila(animal, edad, img, comentarios, sonido));
            break;
        default:
        // code block
    }
    cards();
} else {
    alert("Debe rellenar todos los campos");
}
//Funcion autoejecutable que limpia los campos
(function(){
    document.getElementById('animal').value = ""
    document.getElementById('edad').value = ""
    document.getElementById('comentarios').value = ""
    document.getElementById('preview').innerHTML =""
  })()  
})

//funcion que registra los datos del formulario en la tabla
const cards = () => {
    const animales = document.getElementById('Animales')
    animales.innerHTML = '';
    animales_salvajes.forEach((p, i) => {
        animales.innerHTML += `
    <div class="card col-4 p-0">
    <img id="modal" class="card-img-top modalCard" src="assets/imgs/${p.img}" alt=""></img>
          <div class="card-body p-0">
          <audio id="audio" src="${p.sonido}" controls style=" width:120px;"></audio>
          </div>
    `;
    })
    
    //Modal
    document.querySelectorAll(".modalCard").forEach((i,p) => {
        i.addEventListener("click", (e) => {
            let modal = document.getElementById("exampleModal");
            modal.innerHTML = `
                            <div class="modal-dialog modal-dialog-centered w-25" role="document">
                                <div class="modal-content bg-dark">
                                    <img id="modal"  class="card-img-top modalCard" src="assets/imgs/${animales_salvajes[p].img}"></img>
                                    <div class="modal-body text-white">${animales_salvajes[p].edad}</div>
                                    <div class="modal-body text-white">Comentarios</div>
                                    <div class="modal-body text-white">${animales_salvajes[p].comentarios}</div>
                                </div>
                            </div>`;
    
    $("#exampleModal").modal("toggle");
        })
    
    })
}
}) 
