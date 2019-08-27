<template>
  <div class="first-cont">
    <div v-for="(item, index) in items" :key="index" @click="openDrawer(index)">
      <Accordion :open="openDrawerIndex === index">
        <template slot="title">
          <div>
            <p>{{item.title}}</p>
          </div>
        </template>
        <template slot="title-cta">
          <div>
            <button>{{item.cta}}</button>
          </div>
        </template>
        <template slot="content">
          <div class="given-content">
            <p>{{item.content}}</p>
          </div>
        </template>
      </Accordion>
    </div>
  </div>
</template>

<script>
import Accordion from "./Accordion.vue";
export default {
  components: {
    Accordion
  },
  data() {
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
        },
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
      ],
      openDrawerIndex: null
    };
  },

  methods: {
    openDrawer(drawerIndex) {
      drawerIndex === this.openDrawerIndex
        ? (this.openDrawerIndex = null)
        : (this.openDrawerIndex = drawerIndex);
    }
  }
};
</script>
