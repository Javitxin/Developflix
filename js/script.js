import peliculas from './peliculas.js'
console.log(peliculas);

// Variables donde voy a escribir en el html.
const mostraPelisAccion = document.getElementById('genero-28');
const mostrarPelisThriller = document.getElementById('genero-53');
const mostrarPeliAventura = document.getElementById('genero-12');


// Nuevos arrays por genero:

const arrayAccion = peliculas.filter((valor) => valor.genre_ids.find((num) => num === 28));
const arrayThriller = peliculas.filter((valor) => valor.genre_ids.find((num) => num === 53));
const arrayAventura = peliculas.filter((valor) => valor.genre_ids.find((num) => num === 12));

// Recorro los tres arrays para captura y mostrar el poster y el titulo por cada genero.
arrayAccion.forEach(objeto => {
    // creo los elementos img como label
    const contenedor = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    //Capturo el titulo y lo añado a la label
    const pAccion = objeto.title;
    p.innerText = pAccion;
    // Capturo el poster y se lo añad al img
    const imgAccion = objeto.poster_path;
    img.src = `http://image.tmdb.org/t/p/w200${imgAccion}`;
    // muestro la img :
    mostraPelisAccion.appendChild(contenedor);
    contenedor.appendChild(img);
    contenedor.appendChild(p);
    //console.log(mostraPelisAccion);

});
arrayThriller.forEach(objeto => {
    const contenedor = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const pThriller = objeto.title;
    p.innerText = pThriller;

    const imgThriller = objeto.poster_path;
    img.src = `http://image.tmdb.org/t/p/w200${imgThriller}`;

    mostrarPelisThriller.appendChild(contenedor);
    contenedor.appendChild(img);
    contenedor.appendChild(p);
});
arrayAventura.forEach(objeto => {
    const contenedor = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const pAventura = objeto.title;
    p.innerText = pAventura;

    const imgAventura = objeto.poster_path;
    img.src = `http://image.tmdb.org/t/p/w200${imgAventura}`;

    mostrarPeliAventura.appendChild(contenedor);
    contenedor.appendChild(img);
    contenedor.appendChild(p)
});