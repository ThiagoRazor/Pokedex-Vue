<template>
  <div>
    <main>
      <Socials />
      <Logo />
      

      
      <section>
              <Container>
                <PokemonList />
              </Container>
        <SearchPokemon />
        

      </section>


    </main>

      <PokemonSkillsModal v-if="show" />
  </div>
</template>

<script setup>
  import { usePokedexStore } from "../store";
  import { storeToRefs } from "pinia";
  import { ref, onBeforeMount } from "vue";

  const store = usePokedexStore();
  const { show } = storeToRefs(store);

  const { fetchPokemons } = store;
  const loading = ref(false);


</script>

<style lang="scss">
main {
    width: 100%;
    min-height: 100vh;
    padding: 2rem 10%;
    background: $bg-darkBlue;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
  }

  section {
    width: 100%;
  }
        
  @media (max-width: map-get($media-breakpoints, "sm")) {
    main {
      padding: 2rem 2.5%;
    }
  }
</style>
