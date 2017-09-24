import Vue from 'vue';

let todo = Vue.component('todo-item', {
    props: ['todo'],
    template: require('./index.html')
});

export default todo;