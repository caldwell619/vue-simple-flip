// Import vue components
import FlipCardComponent from './components/FlipCard.vue';
import ExpansionPanelComponent from './components/ExpansionPanel.vue';

// install function executed by Vue.use()
const install = Vue => {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueSimpleFlip', FlipCardComponent);
  Vue.component('VueExpansionPanel', ExpansionPanelComponent);
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
FlipCardComponent.install = install;
ExpansionPanelComponent.install = install;

// Export components
export const FlipCard = FlipCardComponent;
export const ExpansionPanel = ExpansionPanelComponent;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
