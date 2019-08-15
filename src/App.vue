<template>
  <div class="content-window">
    <div class="first-cont">
      <Collapse>
        <template slot="title">
          <div>
            <button>Click</button>
          </div>
        </template>
        <template slot="title-cta">
          <div>
            <button>Click</button>
          </div>
        </template>
        <template slot="content">
          <div class="given-content">
            <p>Here is some excellent content Here is some excellent content</p>
          </div>
        </template>
      </Collapse>
    </div>
  </div>
</template>

<script>
import Collapse from "./accordion.vue";
export default {
  name: "app",
  components: {
    Collapse
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
.first-cont {
  height: 200px;
}
.given-content {
  height: 200px;
  background-color: blue;
  display: flex;
  justify-content: center;
}
</style>
