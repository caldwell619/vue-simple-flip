<template>
  <div class="content-window">
    <FlipCard height="400px" width="300px" textColor="red" backgroundColor="green">
      <template slot="front">
        <div class="card-face">
          <h1>Buy Now?</h1>
        </div>
      </template>
      <template slot="cta-slot-front">
        <button>CLICK ME!</button>
      </template>
      <template slot="back">
        <div class="card-face">
          <h1>Buy Later.</h1>
          <ul>
            <li>Coverage</li>
            <li>Coverage</li>
            <li>Coverage</li>
            <li>Coverage</li>
            <li>Coverage</li>
            <li>Coverage</li>
            <li>Coverage</li>
            <li>Coverage</li>
            <li>Coverage</li>
            <li>Coverage</li>
            <li>Coverage</li>
          </ul>
        </div>
      </template>
      <template slot="cta-slot-back">
        <button>CLICK ME!</button>
      </template>
    </FlipCard>
  </div>
</template>

<script>
import FlipCard from "./vue-simple-flip.vue";
export default {
  name: "app",
  components: {
    FlipCard
  },
  data: function() {
    return {};
  }
};
</script>

<style>
.content-window {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
