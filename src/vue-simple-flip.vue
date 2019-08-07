<template>
  <div v-bind:class="flipped ? 'flip-container flipped': 'flip-container'">
    <div class="flipper">
      <div class="front" v-bind:style="styles">
        <slot name="front"></slot>
        <div class="flip-cta-cont" @click="flip">
          <slot name="cta-slot-front"></slot>
        </div>
      </div>
      <div class="back" v-bind:style="styles">
        <slot name="back"></slot>
        <div class="flip-cta-cont" @click="flip">
          <slot name="cta-slot-back"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipCard",
  data() {
    return {
      flipped: false
    };
  },
  props: {
    height: String,
    width: String,
    backgroundColor: String,
    textColor: String
  },
  computed: {
    styles() {
      return {
        height: this.height,
        width: this.width,
        backgroundColor: this.backgroundColor || "#ffffff",
        color: this.textColor || "black",
        overflow: scroll
      };
    }
  },
  methods: {
    flip() {
      this.flipped = !this.flipped;
    }
  }
};
</script>

<style type='text/css' scoped>
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
}
.flip-container {
  min-height: 120px;
}
.flipper {
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  position: relative;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
  position: relative;
  padding: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 3px 7px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}
.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.front {
  z-index: 2;
}
.flip-cta-cont {
  position: absolute;
  z-index: 10000000000000000000000000000000000000;
  bottom: 1%;
  right: 1%;
}
</style>