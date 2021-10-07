import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Scrollbar from 'smooth-scrollbar';
import LocomotiveScroll from 'locomotive-scroll';
import $ from 'jquery';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import * as VueAos from 'vue-aos' 
library.add(fas, fab);


Vue.component('fa', FontAwesomeIcon);
Vue.use(VueAos);

gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll();
const target = document.querySelector('#js-target');

scroll.scrollTo(target);

Vue.config.productionTip = false

require('./assets/scss/main.css');

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')


    // var currentMousePos = { x: -1, y: -1 };
    // $('.img').mousemove(function(e) {
    //     currentMousePos.x = e.pageX;
    //     currentMousePos.y = e.pageY;
      
    //   $('#dualsense').css('-webkit-mask-position-x', currentMousePos.x - 75);
    //   $('#dualsense').css('-webkit-mask-position-y', currentMousePos.y - 75)
    // });

c