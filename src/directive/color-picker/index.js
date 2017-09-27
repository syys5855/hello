import Vue from 'vue';
export default Vue.directive('color-picker', (el, bind) => {
    console.log(el, bind);
    el.style.backgroundColor = bind.value;
});