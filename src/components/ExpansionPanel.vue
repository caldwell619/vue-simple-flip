<template>
  <div class="accordion-root">
    <div class="accordion">
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
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      elementHeight: 0
    };
  },
  computed: {
    pannelStyle() {
      return this.open ? { maxHeight: `${this.elementHeight}px` } : null;
    },
  },
  mounted() {
    // this method is very precise, but a costly operation
    const panelHeight = this.$el.querySelector(".panel").firstChild.offsetHeight;
    this.elementHeight = panelHeight + 15;
  }
};
</script>

<style scoped>
.accordion-root {
  width: 100%;
}
.title-cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  width: 100%;
}
.accordion {
  cursor: pointer;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
}

.panel {
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
  -webkit-transition: max-height 0.5s;
  -moz-transition: max-height 0.5s;
  -o-transition: max-height 0.5s;
  -ms-transition: max-height 0.5s;
}
.active {
  max-height: 100vh;
}
</style>