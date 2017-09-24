import Vue from 'vue';
let todolist = Vue.component('todolist', {
    template: require('./index.html'),
    props: ['todo'],
    methods: {
        clickRemove(...params) {
            this.$emit('remove');
        }
    }
});

export default todolist;