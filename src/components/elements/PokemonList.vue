<template>
  <div class="blocoPokemons">
    <PokemonCard
      v-for="pokemon in pokemonsSkills"
      :key="pokemon.data.name"
      @click="handleModal(pokemon.data)"
      :skills="pokemon.data"
    />
  </div>
</template>

<script setup>
  import { usePokedexStore } from "../../store";
  import { storeToRefs } from "pinia";

  const store = usePokedexStore();
  const { pokemonsSkills } = storeToRefs(store);

  const { setPokemon, statusModal } = store;

  function handleModal(poke) {
    statusModal();
    setPokemon(poke);
  }
</script>

<style lang="scss" scoped>
.blocoPokemons {
    width: 20%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (max-width: map-get($media-breakpoints, "lg")) {
      & {
            width: 60%;
      }
    }


  }
</style>
