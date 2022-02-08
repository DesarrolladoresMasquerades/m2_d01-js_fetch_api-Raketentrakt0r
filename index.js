console.log("JS Loaded")

fetch("https://pokeapi.co/api/v2/pokemon") // that is a promise
.then((response) => response.json())
.then(buildPokedex)
.catch(console.log);
/*
function buildPokedex(pokeDex){
    pokeDex.results.forEach((pokemon) =>  {
          const newH1 = document.createElement("h1");
          newH1.innerText = pokemon.name;

          const newLink = document.createElement("a");
          newLink.innerText = "Link to Pokemon"
          newLink.href = pokemon.url;

          document.body.appendChild(newH1);
          document.body.appendChild(newLink);
    });*/

    /*
    function buildPokedex(pokeDex){
        pokeDex.results.forEach((pokemon) =>  {
            const newH1 = document.createElement("h1");
            newH1.innerText = pokemon.name;
    
            const newLink = document.createElement("a");
            newLink.innerText = "Link to Pokémon";
            newLink.href = pokemon.url;

            const newImg = document.createElement("img");
            fetch(pokemon.url)
            .then((response) => response.json())
            .then((onePokemon) => {
              newImg.src = onePokemon.sprites.front_shiny;
              document.body.appendChild(newH1);
              document.body.appendChild(newImg);
              document.body.appendChild(newLink);
              })
        });
}
*/



function buildPokedex(pokeDex){
   const pokeNames= pokeDex.results.map((pokemon) => pokemon.name)
   const pokeLinks= pokeDex.results.map((pokemon) => pokemon.url)
   //const pokeImg //= []
const fetchImgPromises = pokeLinks.map((link)=>
    fetch(link).then((response) => response.json())
    );

Promise.all(fetchImgPromises).then((arrayOfPokeman) => {
    addToDom(pokeNames,pokeLinks,arrayOfPokeman);
  });
}

function addToDom(names,links,pokeman){
        
    for(let i = 0; i < pokeman.length; i++){
        const newH1 = document.createElement("h1");
        newH1.innerText = names[i];

        const newLink = document.createElement("a");
        newLink.innerText = "Link to Pokémon";
        newLink.href = links[i];

        const newImg = document.createElement("img");
        newImg.src = pokeman[i].sprites.front_shiny;
          document.body.appendChild(newH1);
          document.body.appendChild(newImg);
          document.body.appendChild(newLink);
    }
        
}
        


/*
    pokeDex.results.forEach((pokemon) =>  {
        const newH1 = document.createElement("h1");
        newH1.innerText = pokemon.name;

        const newLink = document.createElement("a");
        newLink.innerText = "Link to Pokémon";
        newLink.href = pokemon.url;

        const newImg = document.createElement("img");
        fetch(pokemon.url)
        .then((response) => response.json())
        .then((onePokemon) => {
          newImg.src = onePokemon.sprites.front_shiny;
          document.body.appendChild(newH1);
          document.body.appendChild(newImg);
          document.body.appendChild(newLink);
          });

          pokeDex.results.map()
    });*/
