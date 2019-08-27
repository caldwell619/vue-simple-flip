'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: "FlipCard",
  data: function data() {
    return {
      flipped: false
    };
  },
  props: {
    height: String,
    width: String,
    backgroundColor: String,
    textColor: String,
    borderRadius: String
  },
  computed: {
    styles: function styles() {
      return {
        height: this.height,
        width: this.width,
        backgroundColor: this.backgroundColor || "#ffffff",
        color: this.textColor || "black",
        overflow: scroll,
        borderRadius: this.borderRadius
      };
    }
  },
  methods: {
    flip: function flip() {
      this.flipped = !this.flipped;
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;function createInjectorSSR(context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__;
  }

  if (!context) { return function () {}; }

  if (!('styles' in context)) {
    context._styles = context._styles || {};
    Object.defineProperty(context, 'styles', {
      enumerable: true,
      get: function get() {
        return context._renderStyles(context._styles);
      }
    });
    context._renderStyles = context._renderStyles || renderStyles;
  }

  return function (id, style) {
    return addStyle(id, style, context);
  };
}

function addStyle(id, css, context) {
  var group =  css.media || 'default' ;
  var style = context._styles[group] || (context._styles[group] = {
    ids: [],
    css: ''
  });

  if (!style.ids.includes(id)) {
    style.media = css.media;
    style.ids.push(id);
    var code = css.source;

    style.css += code + '\n';
  }
}

function renderStyles(styles) {
  var css = '';

  for (var key in styles) {
    var style = styles[key];
    css += '<style data-vue-ssr-id="' + Array.from(style.ids).join(' ') + '"' + (style.media ? ' media="' + style.media + '"' : '') + '>' + style.css + '</style>';
  }

  return css;
}

var server = createInjectorSSR;/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.flipped ? 'flip-container flipped': 'flip-container'},[_vm._ssrNode("<div class=\"flipper\">","</div>",[_vm._ssrNode("<div class=\"front\""+(_vm._ssrStyle(null,_vm.styles, null))+">","</div>",[_vm._t("front"),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flip-cta-cont\">","</div>",[_vm._t("cta-slot-front")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"back\""+(_vm._ssrStyle(null,_vm.styles, null))+">","</div>",[_vm._t("back"),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flip-cta-cont\">","</div>",[_vm._t("cta-slot-back")],2)],2)],2)])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-a60723ae_0", { source: ".flip-container[data-v-a60723ae]{-webkit-perspective:1000;-moz-perspective:1000;-o-perspective:1000;perspective:1000}.flip-container[data-v-a60723ae]{min-height:120px}.flipper[data-v-a60723ae]{-moz-transform:perspective(1000px);-moz-transform-style:preserve-3d;position:relative}.back[data-v-a60723ae],.front[data-v-a60723ae]{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.6s;-webkit-transform-style:preserve-3d;-moz-transition:.6s;-moz-transform-style:preserve-3d;-o-transition:.6s;-o-transform-style:preserve-3d;-ms-transition:.6s;-ms-transform-style:preserve-3d;transition:.6s;transform-style:preserve-3d;top:0;left:0;width:100%;position:relative;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 3px 7px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.back[data-v-a60723ae]{-webkit-transform:rotateY(-180deg);-moz-transform:rotateY(-180deg);-o-transform:rotateY(-180deg);-ms-transform:rotateY(-180deg);transform:rotateY(-180deg);position:absolute}.flip-container.flipped .back[data-v-a60723ae]{-webkit-transform:rotateY(0);-moz-transform:rotateY(0);-o-transform:rotateY(0);-ms-transform:rotateY(0);transform:rotateY(0)}.flip-container.flipped .front[data-v-a60723ae]{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg)}.front[data-v-a60723ae]{z-index:2}.flip-cta-cont[data-v-a60723ae]{position:absolute;z-index:10000000000000000000000000000000000000;bottom:1%;right:1%;cursor:pointer}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-a60723ae";
  /* module identifier */
  var __vue_module_identifier__ = "data-v-a60723ae";
  /* functional template */
  var __vue_is_functional_template__ = false;

  
  var FlipCardComponent = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    server
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$1 = {
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function data() {
    return {
      elementHeight: 0
    };
  },
  computed: {
    pannelStyle: function pannelStyle() {
      return this.open ? { maxHeight: ((this.elementHeight) + "px") } : null;
    },
  },
  mounted: function mounted() {
    // this method is very precise, but a costly operation
    var panelHeight = this.$el.querySelector(".panel").firstChild.offsetHeight;
    this.elementHeight = panelHeight + 15;
  }
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"accordion-root"},[_vm._ssrNode("<div class=\"accordion\">","</div>",[_vm._ssrNode("<div class=\"title-cont\">","</div>",[_vm._ssrNode("<div class=\"title\">","</div>",[_vm._t("title")],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._t("title-cta")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"panel\""+(_vm._ssrStyle(null,_vm.pannelStyle, null))+">","</div>",[_vm._t("content")],2)],2)])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = function (inject) {
    if (!inject) { return }
    inject("data-v-3a7a48cc_0", { source: ".accordion-root[data-v-3a7a48cc]{width:100%}.title-cont[data-v-3a7a48cc]{display:flex;justify-content:space-between;align-items:center;padding:3%;width:100%}.accordion[data-v-3a7a48cc]{cursor:pointer;width:100%;border:none;text-align:left;outline:0}.panel[data-v-3a7a48cc]{width:100%;max-height:0;overflow:hidden;transition:max-height .5s;-webkit-transition:max-height .5s;-moz-transition:max-height .5s;-o-transition:max-height .5s;-ms-transition:max-height .5s}.active[data-v-3a7a48cc]{max-height:100vh}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$1 = "data-v-3a7a48cc";
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-3a7a48cc";
  /* functional template */
  var __vue_is_functional_template__$1 = false;

  
  var ExpansionPanelComponent = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    server
  );// Import vue components

// install function executed by Vue.use()
var install = function (Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('VueSimpleFlip', FlipCardComponent);
  Vue.component('VueExpansionPanel', ExpansionPanelComponent);
};

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
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
var FlipCard = FlipCardComponent;
var ExpansionPanel = ExpansionPanelComponent;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.ExpansionPanel=ExpansionPanel;exports.FlipCard=FlipCard;