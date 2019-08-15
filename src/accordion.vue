<template>
  <div @click="newToggle" class="1">
    <div :class="`${activeClass} accordion`">
      <div class="title-cont">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div>
          <slot name="title-cta"></slot>
        </div>
      </div>
      <div class="panel" :style="pannelStyle">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      elementHeight: 0
    };
  },
  methods: {
    newToggle(event) {
      const panelHeight = this.$el.querySelector(".panel").firstChild
        .scrollHeight;
      this.elementHeight = panelHeight;
      this.open = !this.open;
    }
  },
  computed: {
    pannelStyle() {
      return this.open ? { maxHeight: `${this.elementHeight}px` } : {};
    },
    activeClass() {
      return this.open ? "active" : "";
    }
  }
};
</script>

<style scoped>
.title-cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  width: 95%;
}
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  transition: 0.4s;
}

.active,
.accordion:hover {
  background-color: #ccc;
}

.panel {
  width: 100%;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
}
</style>