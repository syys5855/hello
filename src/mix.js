import Vue from 'vue';
import MyCounter from './component/counter';
import Focus from './directive/focus';
import ColorPicker from './directive/color-picker'
let myMix = {
    created() {
        this.hello();
    },
    data: {
        params: { a: 1, b: 2 },
        color: ''
    },
    methods: {
        hello() {
            console.log('hello from mix');
        }
    },
    // 指令重名时内部的指令优先
    directives: {
        test: {
            inserted(el, binding) {
                console.log(binding);
            }
        }
    }
}

// var MixCom = Vue.extend({
//     mixins: [myMix]
// }, MyCounter);


new Vue({
    mixins: [myMix],
    el: '#app'

});