import Vue from 'vue';

let MyCounter = Vue.component('my-counter', {
    template: require('./index.html'),
    data() {
        return { count: this.initialCount }
    },
    props: ['initialCount'],
    methods: {
        increase() {
            console.log(typeof this.count);
            ++this.count;
            this.$emit('increase', 1);
            this.$emit('update:initial-count', this.count);
        }
    }
});

export default MyCounter;