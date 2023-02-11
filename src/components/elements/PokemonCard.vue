<template>
  <div :class="`boxPokemon ${getPokemonFirstType}`">
    <img :src="getImgPokemon" :alt="skills.name"/>
    <h1>{{ skills.name }}</h1>
    <small>Nº{{ skills.id }}</small>
  </div>
</template>

<script setup>
  import { computed, ref } from "vue";

  const props = defineProps({
    skills: Object,
  });

  const skills = ref(props.skills);
  const getPokemonFirstType = computed(() => skills.value.types[0].type.name);

  const getImgPokemon = computed(() => {
    return skills.value.sprites.other["official-artwork"].front_default;
  });
</script>

<style lang="scss">

  .boxPokemon {
    width: 100%;
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    

    & img {
      transition: all ease 0.5s;
      z-index: 1;
    }

    &:hover img {
      transform: scale(1.1);
    }

    & h1 {
      text-transform: capitalize;
      color: $darkBlack;

      @media (max-width: map-get($media-breakpoints, "sm")) {
        font-size: 1.25rem;
      }
    }

    & small {
      padding: 0.25rem;
      border-radius: 10px;
      color: $darkBlack;
      font-weight: bolder;
      position: absolute;
      top: 2%;
      left: 2%;
    }
  }
</style>
