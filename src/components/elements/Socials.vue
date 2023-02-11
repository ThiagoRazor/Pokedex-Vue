<template>
  <div class="git">
    <a
      href="https://github.com/ThiagoRazor"
      target="_blank"
    >
      <img src="../../../public/img/git.png" alt="Git logo" />
    </a>
  </div>
  <div class="whats">
    <a href="https://api.whatsapp.com/send/?phone=5532999492255&text&type=phone_number&app_absent=0" target="_blank">
      <img src="../../../public/img/zap.png" alt="Whatsapp logo" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.git {
    position: fixed;
    bottom: 2%;
    right: 2%;
    
    & img {
      width: 40px;
      height: 40px;
    }

    @media (max-width: map-get($media-breakpoints, "sm")) {
      & {
        position: absolute;
      }
    }
  }
    .whats {
      position: fixed;
      bottom: 8%;
      right: 2%;
  
      & img {
        width: 40px;
        height: 40px;
      }
  
      @media (max-width: map-get($media-breakpoints, "sm")) {
        & {
          position: absolute;
        }
      }
    }
</style>
