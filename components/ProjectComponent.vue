<template>
  <div v-cloak class="column is-6" @keydown.esc="deactiveOverlay">
    <div class="imagery" @click="activateOverlay">
      <img :src="photo" alt="">
      <img class="hover" :src="photoHover" alt="">
    </div>
    <div class="overlay" :class="{active: isActive}" @click="deactiveOverlay">
      <img class="close" src="~/static/close.svg" alt="" @click="deactiveOverlay">
      <div class="video" :data-vimeo-url="url" :data-vimeo-width="1000" :id="id"></div>
    </div>
  </div>
</template>

<style scoped>

  [v-cloak] {
    display: none;
  }
  .overlay .close {
    position: absolute;
    right: 0;
    top: 0;
    height: 25px;
    margin: 7% 10% 0px 0px;
    cursor: pointer;
    z-index: 999;
    display: none;
  }
  .overlay.active .close {
    display: block;
  }
  .imagery {
    position: relative;
  }
  .imagery .hover {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .imagery:hover .hover {
    opacity: 1;
  }
  .imagery {
    cursor: pointer;
  }
  .overlay.active {
    position: fixed;
    min-height: 100%;
    z-index: 998;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay .video {
    display: none;
  }
  .overlay.active .video {
    display: block;
  }
</style>

<script>
  import Player from '@vimeo/player'
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      photo: {
        type: String,
        required: true
      },
      photoHover: {
        type: String,
        required: true
      }                  
    },
    data() {
      return {
        isActive: false,
        player: false
      }
    },
    methods: {
      activateOverlay() {
        this.isActive = true
      },
      deactiveOverlay() {
        this.isActive = false
        this.player.pause()
      },
      deactiveOverlayEscape(e) {
        if (e.keyCode === 27 && this.isActive) {
          this.isActive = false;
          this.player.pause()
        }
      }
    },
    created() {
      window.addEventListener('keyup', this.deactiveOverlayEscape);
    },
    mounted() {
      this.player = new Player(this.id)
    }
  }
</script>
