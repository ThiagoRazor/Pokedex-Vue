<template>
  <div class="logo">
    <a href="./">
      <img
        src="../../../public/img/logo.png"
        alt="logo"
        id="top"
      />
    </a>
    <a href="./">
      <img class="poke" src="../../../public/img/poke.png" alt=""/>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.logo {
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;


    & img {
      width: 15vw;
    }

    & .poke {
      width: 3vw;
    }

    @media (max-width: map-get($media-breakpoints, "sm")) {
      & {
        margin-bottom: 0;

        & img {
          width: 70vw;
        }
                & .poke {
                  width: 3vw;
                }
      }
    }
  }
</style>
