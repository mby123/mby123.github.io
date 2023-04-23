(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{336:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"treeshaking-全局-api-非兼容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#treeshaking-全局-api-非兼容"}},[t._v("#")]),t._v(" Treeshaking (全局 API) 非兼容 "),s("Badge",{attrs:{text:"非兼容",type:"error"}})],1),t._v(" "),s("p",[t._v("Vue.nextTick() 是一个直接暴露在单个 Vue 对象上的全局 API。实际上，实例方法 $nextTick() 只是一个方便的 Vue.nextTick() 包裹器，将其回调的 this 上下文自动绑定到当前实例上，以方便使用。")]),t._v(" "),s("p",[t._v("但是，如果你从来都没有过手动操作 DOM 的必要，也没有在你的应用中使用或测试过异步组件，那该怎么办？或者，不管出于什么原因，你更喜欢使用老式的 window.setTimeout() 来代替它？在这种情况下，nextTick() 的代码就会变成死代码——也就是说，代码写了，但从未使用过。而死代码很难成为一个好的东西，尤其是在我们的客户端上下文中，每一个字节都很重要。")]),t._v(" "),s("p",[t._v("如 webpack 和 Rollup (Vite 基于它) 这样的模块打包工具支持 tree-shaking，这是表达“消除死代码”的一个花哨术语。遗憾的是，由于之前的 Vue 版本中的代码编写方式，如 Vue.nextTick() 这样的全局 API 是不支持 tree-shake 的，不管它们实际上是否被使用了，都会被包含在最终的打包产物中。")]),t._v(" "),s("h3",{attrs:{id:"_2-x-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-语法"}},[t._v("#")]),t._v(" 2.x 语法")]),t._v(" "),s("p",[t._v("如果你曾经在 Vue 中手动操作过 DOM，你可能会用过这种方式：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_3-x-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-x-语法"}},[t._v("#")]),t._v(" 3.x 语法")]),t._v(" "),s("p",[t._v("在 Vue 3 中，全局和内部 API 都经过了重构，并考虑到了 tree-shaking 的支持。因此，对于 ES 模块构建版本来说，全局 API 现在通过具名导出进行访问。例如，我们之前的代码片段现在应该如下所示：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nextTick "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些和 DOM 有关的东西")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("通过这一更改，如果模块打包工具支持 tree-shaking，则 Vue 应用中未使用的全局 API 将从最终的打包产物中排除，从而获得最佳的文件大小.")]),t._v(" "),s("h3",{attrs:{id:"受影响的-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#受影响的-api"}},[t._v("#")]),t._v(" 受影响的 API")]),t._v(" "),s("p",[t._v("Vue 2.x 中的这些全局 API 受此更改的影响：")]),t._v(" "),s("ul",[s("li",[t._v("Vue.nextTick")]),t._v(" "),s("li",[t._v("Vue.observable (用 Vue.reactive 替换)")]),t._v(" "),s("li",[t._v("Vue.version")]),t._v(" "),s("li",[t._v("Vue.compile (仅完整构建版本)")]),t._v(" "),s("li",[t._v("Vue.set (仅兼容构建版本)")]),t._v(" "),s("li",[t._v("Vue.delete (仅兼容构建版本)")])])])}),[],!1,null,null,null);s.default=n.exports}}]);