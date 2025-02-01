// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigoSecreto = new Set();

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#amigo');
    const listaAmigos = document.querySelector('#listaAmigos');
    const buttonAdd = document.querySelector('.button-add');
    const buttonDraw = document.querySelector('.button-draw');
    const resultado = document.querySelector('#resultado');

    buttonAdd.addEventListener('click', () => {
        const nom = input.value.trim();
        if (nom === '') {
            alert('Por favor, ingrese un nombre válido.');
            return;
        }
        if (amigoSecreto.has(nom)) {       
            alert('Este nombre ya ha sido ingresado.');
            return;
        }
        amigoSecreto.add(nom);  
        actualizarLista();
        input.value = '';
    });

    buttonDraw.addEventListener('click', () => {
        if (amigoSecreto.size === 0) {  
            alert('No hay nombres en la lista para sortear.');
            return;
        }
        const nomArray = Array.from(amigoSecreto);  
        const indiceAleatorio = Math.floor(Math.random() * nomArray.length);
        resultado.textContent = `El amigo secreto es: ${nomArray[indiceAleatorio]}`;
    });

    function actualizarLista() {
        listaAmigos.innerHTML = '';
        amigoSecreto.forEach(nom => { 
            const li = document.createElement('li');
            li.textContent = nom;
            listaAmigos.appendChild(li);
        });
    }
});
