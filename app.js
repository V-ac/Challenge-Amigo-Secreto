// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//lista de amigos
let amigos = [];
let lista = document.getElementById('listaAmigos');
let resultadoAmigo = document.getElementById('resultado');
//funcion para agregar amigo
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == '') {
        alert('Por favor, ingrese un nombre válido');
    } else {
        let nuevoNombre = amigos.push(nombreAmigo);
        limpiarLista();
        mostrarNombres();
        document.querySelector('#amigo').value = '';


    }

}

//mostrar la lista
function mostrarNombres() {
    //let lista = document.getElementById('listaAmigos');
    amigos.forEach(elementoAmigo => {
        //creamos el elemento li
        let nuevoLi = document.createElement('li');
        //asignamos el texto a li
        nuevoLi.textContent = elementoAmigo;
        //Añadimos el alemento li a el contenedor de la lista
        lista.appendChild(nuevoLi);
    })

}

//limpia la lista para asegurarse que no hay duplicados
function limpiarLista() {

    lista.innerHTML = "";
}


//generar sorteo
function sortearAmigo() {
    let numeroAmigo = Math.floor(Math.random() * amigos.length);

    console.log(amigos.length);
    console.log(numeroAmigo);
    resultadoAmigo.innerHTML = `El amigo secreto sorteado es: ${amigos[numeroAmigo]}`;
    //se limpia la lista
    limpiarLista();
    //se eliminan los nombres
    //amigos.length = 0;

}