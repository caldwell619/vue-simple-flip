// Import vue components
import FlipComponent from './components/vue-simple-flip.vue';
import AccordionComponent from './components/accordion.vue';

// install function executed by Vue.use()
const install = Vue => {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueSimpleFlip', FlipComponent);
  Vue.component('VueAccordion', AccordionComponent);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
/* global window global */
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
FlipComponent.install = install;
AccordionComponent.install = install;

// Export components
export const FlipCard = FlipComponent;
export const Accordion = AccordionComponent;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
