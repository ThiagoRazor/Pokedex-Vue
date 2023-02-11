<template>
  <div class="searchPoke">
    <input
      type="text"
      placeholder="Pesquisar Pokemon"
      v-model="search"
      @keyup.enter="handleSearchPokemons(search)"
    />

    <ButtonSeeMore text="Buscar" @click="handleSearchPokemons(search)" />
  </div>
</template>

<script setup>
  import { usePokedexStore } from "../../store";
  import { ref } from "vue";

  const search = ref("");
  const loading = ref(false);
  const store = usePokedexStore();
  const { searchPokemons } = store;

  async function handleSearchPokemons(value) {
    try {
      loading.value = true;
      await searchPokemons(value.toLowerCase());
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      loading.value = false;
      search.value = "";
    }
  }
</script>

<style lang="scss" scoped>
.searchPoke {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:16px;

    & input {
      width: 50%;
      padding: 0.75rem;
      border: none;
      background: $white;
      color: $black;
      outline: 0;
      border-radius: 8px;

      &::placeholder {
        color: $black;
      }
    }

    @media (max-width: map-get($media-breakpoints, "sm")) {
      & input {
        width: 70%;
      }
    }
  }
</style>
