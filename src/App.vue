<template>
  <div class="content-window">
      <Collapse/>
  </div>
</template>

<script>
import Collapse from "./components/AccoridonList.vue";
export default {
  name: "app",
  components: {
    Collapse
  },
  data: function() {
    return {
      items: [
        {
          title: "hello",
          cta: "Click",
          content:
            "Here is some excellent content Here is some excellent content"
        },
        {
          title: "hello",
          cta: "Click",
          content:
            "Here is some excellent content Here is some excellent content"
        }
      ]
    };
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
