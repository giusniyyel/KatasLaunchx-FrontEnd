const pokeName = document.getElementById("pokeName").addEventListener("keyup", function(e) {
  if (e.key === 'Enter') {
    fetchPokemon();
    return false;
  }
})

const fetchPokemon = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

  fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        console.log(res);
        pokeImage("./assets/img/pokemon-sad.gif");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);

      let pokemonCode = data.id;
      let pokemonName = data.name;
      let pokeImg = data.sprites.front_default;
      let pokemonStats = data.stats;

      pokeDisplayName(pokemonName);
      pokeDisplayCode(pokemonCode);
      pokeStats(pokemonStats);
      pokeImage(pokeImg);
    });
};

const pokeStats = (pokemonStats) => {
  const pokemonHp = document.getElementById("pokemonHp");
  const pokemonAtk = document.getElementById("pokemonAtk");
  const pokemonDef = document.getElementById("pokemonDef");
  const pokemonSpAtk = document.getElementById("pokemonSpAtk");
  const pokemonSpDef = document.getElementById("pokemonSpDef");
  const pokemonSpeed = document.getElementById("pokemonSpeed");

  pokemonHp.innerHTML = pokemonStats[0].base_stat;
  pokemonAtk.innerHTML = pokemonStats[1].base_stat;
  pokemonDef.innerHTML = pokemonStats[2].base_stat;
  pokemonSpAtk.innerHTML = pokemonStats[3].base_stat;
  pokemonSpDef.innerHTML = pokemonStats[4].base_stat;
  pokemonSpeed.innerHTML = pokemonStats[5].base_stat;
}

const pokeDisplayCode = (pokemonCode) => {
  const pokeDisplayCode = document.getElementById("pokemonCode");
  pokeDisplayCode.innerHTML = pokemonCode;
}

const pokeDisplayName = (pokemonName) => {
  const pokeDisplayName = document.getElementById("pokeNameDisplay");
  pokeDisplayName.innerHTML = pokemonName;
}

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};
