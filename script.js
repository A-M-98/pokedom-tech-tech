import pokemonArray from './data/pokemon.js';

console.log(pokemonArray);

const cardContainer = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
    cardContainer.innerHTML +=`
    <Div class = "card">
        <img class = "card__image" src="${pokemon.sprite}" alt="Pokemon">
        <Div class = "card_content">
        <h1 class = "card_heading"> ${pokemon.name} </h1>
        <p class = "card_text"> ${pokemon.name} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} </p>
        </div>
    </div>
    `

});

