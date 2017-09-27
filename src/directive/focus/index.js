import Vue from 'vue';

export default Vue.directive('focus', {
    inserted(el) {
        console.log('msg from focus')
        el.focus();
    }
});