webpackJsonp([1],{"2d/L":function(e,t){},"87hR":function(e,t){},MEss:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("7+uW"),s={name:"Demo",data:function(){return{text:{header:"Here is header",content:"Here is content",footer:"Here is footer",wait:""},resizeValue:0,position:null,demo1Visible:!1,demo2Visible:!1,demo3Visible:!1,demo4Visible:!1,demo5Visible:!1,demo6Visible:!1,demo7Visible:!1,demo8Visible:!1,demo9Visible:!1,demo10Visible:!1,demo11Visible:!1,demo12Visible:!1,demo13Visible:!1,demo14Visible:!1,demo15Visible:!1,demo16Visible:!1}},methods:{showDemo1:function(e){this.position=e,this.demo1Visible=!0},showResizeDemo:function(e){this.resizeValue=0,this.position=e,this.demo14Visible=!0},onOpen:function(){this.text.wait="I am opened"},onClose:function(e){e.wait=!0,this.text.wait="I will close after 3 seconds...",setTimeout(function(){e.close=!0},3e3)},onResize:function(e){this.resizeValue=e.size}}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"demo"}},[i("p",{staticClass:"standout"},[e._v("You can press `ESC` key to close slide.")]),e._v(" "),i("slide-out",{attrs:{visible:e.demo1Visible,dock:e.position,title:e.text.header},on:{"update:visible":function(t){e.demo1Visible=t}}},[i("code",[e._v(':dock="'+e._s(e.position)+'"')]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo2Visible},on:{"update:visible":function(t){e.demo2Visible=t}}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.text.header))]),e._v(" "),i("div",[e._v("Close button would be removed while use "),i("code",[e._v('slot="header"')])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo3Visible,size:"50%",title:e.text.header},on:{"update:visible":function(t){e.demo3Visible=t}}},[i("div",[i("code",[e._v(' size="50%"')])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo4Visible,size:"200px",title:e.text.header},on:{"update:visible":function(t){e.demo4Visible=t}}},[i("div",[i("code",[e._v('size="200px"')])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo5Visible},on:{"update:visible":function(t){e.demo5Visible=t}}},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.text.header))]),e._v(" "),i("div",[e._v(e._s(e.text.content))]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo6Visible},on:{"update:visible":function(t){e.demo6Visible=t}}},[i("div",[e._v(e._s(e.text.content))]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo7Visible,title:e.text.header},on:{"update:visible":function(t){e.demo7Visible=t}}},[i("div",[e._v(e._s(e.text.content))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo8Visible,"close-on-mask-click":!1,title:e.text.header},on:{"update:visible":function(t){e.demo8Visible=t}}},[i("div",[i("code",[e._v(':close-on-mask-click="false"')])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo9Visible,title:e.text.header,"disable-animation":""},on:{"update:visible":function(t){e.demo9Visible=t}}},[i("div",[i("code",[e._v("disable-animation")])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo10Visible,title:e.text.header,"mask-color":"rgba(89, 150, 105, 0.5)"},on:{"update:visible":function(t){e.demo10Visible=t}}},[i("div",[i("code",[e._v('mask-color="rgba(89, 150, 105, 0.5)"')])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo11Visible,title:e.text.header,"show-mask":!1},on:{"update:visible":function(t){e.demo11Visible=t}}},[i("div",[i("code",[e._v(':show-mask="false"')])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo12Visible,title:e.text.header,"append-to":"#customize","allow-resize":""},on:{"update:visible":function(t){e.demo12Visible=t}}},[i("div",[i("div",[i("code",[e._v('append-to="#customize" allow-resize')])]),e._v(" "),i("p",[e._v("Element "),i("code",[e._v("#customize")]),e._v(" "),i("b",[e._v("SHOULD NOT")]),e._v(" be "),i("code",[e._v("position: static")])]),e._v(" "),i("div",[e._v("Resize is available for this instance.")]),e._v(" "),i("p",[i("span",{staticStyle:{color:"red"}},[e._v("<-")]),e._v(" Move the cursor onto this border to have a try")])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo13Visible,title:e.text.header},on:{"update:visible":function(t){e.demo13Visible=t},open:e.onOpen,close:e.onClose}},[i("p",[i("code",[e._v('@open="onOpen" @close="onClose"')])]),e._v(" "),i("div",[e._v(e._s(e.text.wait))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo14Visible,dock:e.position,title:e.text.header,"allow-resize":""},on:{"update:visible":function(t){e.demo14Visible=t},resize:e.onResize}},[i("div",[i("p",[i("code",[e._v('allow-resize @resize="onResize"')])]),e._v(" "),i("p",[i("code",[e._v("allow-resize")]),e._v(" makes it resizable")]),e._v(" "),i("p",[i("code",[e._v('@resize="onResize"')]),e._v(" makes function "),i("code",[e._v("onResize")]),e._v(" to accept resize event")])]),e._v(" "),i("div",[e._v("Resize value: "+e._s(e.resizeValue)+"px")]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo15Visible,title:"And God said, let there be light, and there was light"},on:{"update:visible":function(t){e.demo15Visible=t}}},[i("div",[e._v("Long header text turns out "),i("b",[e._v("ellipse")]),e._v(" style.")]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("slide-out",{attrs:{visible:e.demo16Visible,title:e.text.header,"ignore-esc":""},on:{"update:visible":function(t){e.demo16Visible=t}}},[i("div",[i("p",[i("code",[e._v("ignore-esc")])]),e._v(" "),i("p",[e._v("\n        This makes slide ignore "),i("code",[e._v("Esc")]),e._v(" key press.\n      ")]),e._v(" "),i("p",[e._v("\n        So you can not close slide by press "),i("code",[e._v("Esc")]),e._v(" key.\n      ")]),e._v(" "),i("p",[e._v("\n        No matter how many times you press "),i("code",[e._v("Esc")]),e._v(" key, slide will always keep opened.\n      ")])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(e._s(e.text.footer))])]),e._v(" "),i("div",{staticClass:"demo-block"},[i("h3",[e._v("Dock position")]),e._v(" "),i("ul",[i("li",[i("button",{on:{click:function(t){return e.showDemo1("top")}}},[e._v("Top")]),e._v(" "),i("button",{on:{click:function(t){return e.showDemo1("right")}}},[e._v("Right")]),e._v(" "),i("button",{on:{click:function(t){return e.showDemo1("bottom")}}},[e._v("Bottom")]),e._v(" "),i("button",{on:{click:function(t){return e.showDemo1("left")}}},[e._v("Left")])])])]),e._v(" "),i("div",{staticClass:"demo-block",attrs:{id:"customize"}},[i("h3",[e._v("Customize")]),e._v(" "),i("ul",[i("li",[i("button",{on:{click:function(t){e.demo2Visible=!0}}},[e._v("Header")]),e._v(" "),i("button",{on:{click:function(t){e.demo12Visible=!0}}},[e._v("Append to specified element "),i("b",[e._v("#customize")])])]),e._v(" "),i("li",[i("button",{on:{click:function(t){e.demo3Visible=!0}}},[e._v("Size: 50%")]),e._v(" "),i("button",{on:{click:function(t){e.demo4Visible=!0}}},[e._v("Size: 200px")])]),e._v(" "),i("li",[i("button",{on:{click:function(t){e.demo5Visible=!0}}},[e._v("No close button")]),e._v(" "),i("button",{on:{click:function(t){e.demo6Visible=!0}}},[e._v("No Header")]),e._v(" "),i("button",{on:{click:function(t){e.demo7Visible=!0}}},[e._v("No Footer")])]),e._v(" "),i("li",[i("button",{on:{click:function(t){e.demo8Visible=!0}}},[e._v("Disable close on mask click")]),e._v(" "),i("button",{on:{click:function(t){e.demo9Visible=!0}}},[e._v("Disable animation")])]),e._v(" "),i("li",[i("button",{on:{click:function(t){e.demo10Visible=!0}}},[i("span",[e._v("Mask color")]),e._v(" "),i("span",{staticStyle:{width:"14px",height:"14px",background:"rgba(89, 150, 105, 0.5)",display:"inline-block","vertical-align":"-2px"}})]),e._v(" "),i("button",{on:{click:function(t){e.demo11Visible=!0}}},[e._v("No Mask")])]),e._v(" "),i("li",[i("button",{on:{click:function(t){e.demo16Visible=!0}}},[e._v("Ignore ESC key press")])])])]),e._v(" "),i("div",{staticClass:"demo-block"},[i("h3",[e._v("Event")]),e._v(" "),i("ul",[i("li",[i("button",{on:{click:function(t){e.demo13Visible=!0}}},[e._v("Event after open and before close")])])])]),e._v(" "),i("div",{staticClass:"demo-block"},[i("h3",[e._v("Allow Resize")]),e._v(" "),i("ul",[i("li",[i("button",{on:{click:function(t){return e.showResizeDemo("top")}}},[e._v("Top")]),e._v(" "),i("button",{on:{click:function(t){return e.showResizeDemo("right")}}},[e._v("Right")]),e._v(" "),i("button",{on:{click:function(t){return e.showResizeDemo("bottom")}}},[e._v("Bottom")]),e._v(" "),i("button",{on:{click:function(t){return e.showResizeDemo("left")}}},[e._v("Left")])])])]),e._v(" "),i("div",{staticClass:"demo-block"},[i("h3",[e._v("Long header text")]),e._v(" "),i("ul",[i("li",[i("button",{on:{click:function(t){e.demo15Visible=!0}}},[e._v("Long header")])])])])],1)},staticRenderFns:[]};var l={name:"App",components:{Demo:i("VU/8")(s,n,!1,function(e){i("87hR")},"data-v-4caa5116",null).exports}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),i("h2",[e._v("Install")]),e._v(" "),i("code",[e._v("npm install @hyjiacan/vue-slideout")]),e._v(" "),i("p",[e._v("or")]),e._v(" "),i("code",[e._v("yarn add @hyjiacan/vue-slideout")]),e._v(" "),i("p",[e._v("For the latest code, you can:")]),e._v(" "),i("code",[e._v("git clone https://github.com/hyjiacan/vue-slideout.git")]),e._v(" "),e._m(1),e._v(" "),i("h2",[e._v("Source")]),e._v(" "),e._m(2),e._v(" "),i("h2",[e._v("Samples")]),e._v(" "),i("demo")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("\n    SlideOut\n    "),t("small",[this._v("A Slide-Out component for Vue.js 2.0")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("or "),t("a",{attrs:{href:"https://github.com/hyjiacan/vue-slideout/archive/master.zip"}},[this._v("download archive")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/hyjiacan/vue-slideout.git"}},[this._v("Github")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/hyjiacan/vue-slideout.git"}},[this._v("Gitee")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/hyjiacan/vue-slideout/blob/master/src/components/Demo.vue",target:"_blank"}},[this._v("Demo\n      Source")])])])}]};var r=i("VU/8")(l,a,!1,function(e){i("2d/L")},null,null).exports,d={size:{type:[String,Number],default:400},zIndex:{type:Number,default:1997},visible:{type:Boolean,default:!1},title:{type:String},closeOnMaskClick:{type:Boolean,default:!0},ignoreEsc:{type:Boolean,default:!1},customClass:{type:String},showMask:{type:Boolean,default:!0},maskColor:{type:String,default:null},dock:{type:String,default:"right"},appendTo:{type:[String,HTMLElement],default:null},disableAnimation:{type:Boolean,default:!1},allowResize:{type:Boolean,default:!1},minSize:{type:Number,default:60},maxSize:{type:Number,default:0},lockScroll:{type:Boolean,default:!1}},c=i("Obbl"),v=i.n(c);o.a.use(v.a);var u={name:"SlideOut",props:d,data:function(){return{isVisible:!1,mousedown:!1,mouseDownPosition:{x:0,y:0},originSize:{width:0,height:0},resizeValue:0,parentElement:null}},watch:{visible:function(e){this.toggle(e)}},computed:{dockOn:function(){return this.dock||"right"},containerStyle:function(){var e={"z-index":this.zIndex};this.mousedown&&(e.userSelect="none");var t=this.isVisible?"0":"100%";switch(this.dockOn){case"left":e.right=t;break;case"right":e.left=t;break;case"top":e.bottom=t;break;case"bottom":e.top=t}return e},maskStyle:function(){return this.maskColor?{"background-color":this.maskColor}:{}},layoutStyle:function(){var e={},t=this.resizeValue>0?this.resizeValue+"px":"number"==typeof this.size?this.size+"px":this.size,i=this.isVisible||this.disableAnimation?0:"number"!=typeof this.size&&/%$/.test(this.size)?-parseInt(this.size)+"%":-parseInt(this.size)+"px";switch(this.dockOn){case"right":e.width=t,e.right=i;break;case"left":e.width=t,e.left=i;break;case"bottom":e.height=t,e.bottom=i;break;case"top":e.height=t,e.top=i}return e},containerClasses:function(){return[this.customClass,"dock-"+this.dockOn,this.isVisible?"visible":"",this.disableAnimation?"":"enable-animation",this.title||this.$slots.header?"slide-show-header":"",this.$slots.footer?"slide-show-footer":""]}},methods:{getArgs:function(){var e=this;return{wait:!1,set close(t){t&&e.setVisibleValue(!1)},get close(){}}},toggle:function(e){if(e!==this.isVisible){if(e)return this.setVisibleValue(!0),void this.$emit("open");var t=this.getArgs();this.$emit("close",t),t.wait||this.setVisibleValue(!1)}},setVisibleValue:function(e){e&&(this.resizeValue=0),this.isVisible=e,this.$el.focus(),this.$emit("update:visible",e)},appendComponentTo:function(){if(this.appendTo){var e=this.appendTo;if("string"==typeof e&&!(e=document.querySelector(e)))throw new Error("SlideOut 找不到指定的 AppendTo 节点: "+this.appendTo);e.appendChild(this.$el),this.parentElement=e}else this.parentElement=this.$el.parentElement},onMaskClick:function(){this.closeOnMaskClick&&this.toggle(!1)},getParentSize:function(){var e=this.parentElement.getClientRects()[0];return{width:e.width,height:e.height}},getMyOwnSize:function(){var e=this.$refs.layout.getClientRects()[0];return{width:e.width,height:e.height}},mouseDownHandler:function(e){this.mousedown=!0,this.mouseDownPosition={x:e.pageX,y:e.pageY},this.originSize=this.getMyOwnSize()},mouseMoveHandler:function(e){var t=this;if(this.mousedown){var i=e.pageX-this.mouseDownPosition.x,o=e.pageY-this.mouseDownPosition.y,s=this.getParentSize(),n=this.originSize,l=0;switch(this.dock){case"top":(l=n.height+o)>s.height&&(l=s.height);break;case"right":(l=n.width-i)>s.width&&(l=s.width);break;case"bottom":(l=n.height-o)>s.height&&(l=s.height);break;case"left":(l=n.width+i)>s.width&&(l=s.width)}this.maxSize>0&&this.maxSize<l&&(l=this.maxSize),this.resizeValue=l<this.minSize?this.minSize:l,this.$nextTick(function(){t.$emit("resize",{size:t.resizeValue})})}},mouseUpHandler:function(){this.mousedown=!1},onKeydown:function(e){this.isVisible&&this.toggle(!1)},onSlideScroll:function(e){return e.preventDefault(),!1}},mounted:function(){this.appendComponentTo(),this.allowResize&&(document.addEventListener("mousemove",this.mouseMoveHandler),document.addEventListener("mouseup",this.mouseUpHandler)),this.ignoreEsc||this.$el.addEventListener("keydown",this.onKeydown)},beforeDestroy:function(){this.ignoreEsc||this.$el.removeEventListener("keydown",this.onKeydown),this.allowResize&&(document.removeEventListener("mousemove",this.mouseUpHandler),document.removeEventListener("mouseup",this.mouseMoveHandler)),this.isVisible&&this.setVisibleValue(!1)}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"scroll-lock",rawName:"v-scroll-lock",value:e.isVisible&&e.lockScroll,expression:"isVisible && lockScroll"}],staticClass:"slide",class:e.containerClasses,style:e.containerStyle,attrs:{tabindex:"0"}},[e.showMask?i("div",{staticClass:"slide-mask",style:e.maskStyle,on:{click:e.onMaskClick,scroll:e.onSlideScroll}}):e._e(),e._v(" "),i("div",{ref:"layout",staticClass:"slide-layout",style:e.layoutStyle},[e.allowResize?i("div",{staticClass:"slide-drag-handle",on:{mousedown:e.mouseDownHandler}}):e._e(),e._v(" "),e.$slots.header||e.title?i("div",{staticClass:"slide-header"},[e._t("header",[i("div",{staticClass:"slide-title-text"},[e._v("\n          "+e._s(e.title)+"\n        ")]),e._v(" "),i("button",{staticClass:"slide-btn-close",on:{click:function(t){return e.toggle(!1)}}},[i("svg",{attrs:{version:"1.1",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"}},[i("path",{attrs:{d:"M493.45411 71.89033 197.751365 361.596502c-9.624195 9.380648-9.624195 24.707728 0 34.138518 9.576099 9.381671 25.222451 9.381671 34.848693 0l253.612115-248.494561 0 786.690176c0 13.3214 11.047614 24.142863 24.642237 24.142863 13.597693 0 24.645306-10.821463 24.645306-24.142863L535.499715 147.240459l253.632581 248.494561c9.603729 9.381671 25.248034 9.381671 34.847669 0 4.836145-4.76349 7.194866-10.939143 7.194866-17.116843 0-6.1777-2.405793-12.355399-7.194866-17.116843L528.255731 71.797209c-9.602705-9.383718-25.244964-9.383718-34.849716 0L493.45411 71.89033z"}})])])],{title:e.title})],2):e._e(),e._v(" "),i("div",{staticClass:"slide-content"},[e._t("default")],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$slots.footer,expression:"$slots.footer"}],staticClass:"slide-footer"},[e._t("footer")],2)])])},staticRenderFns:[]};var _=i("VU/8")(u,h,!1,function(e){i("MEss")},"data-v-f7a84e16",null).exports;_.install=function(e){e.component(_.name,_)};var m=_;o.a.config.productionTip=!1,o.a.use(m),new o.a({el:"#app",components:{App:r},template:"<App/>"})}},["NHnr"]);