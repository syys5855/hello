import Vue from 'vue';
export default Vue.component('sync-counter', {
    template: require('./index.html'),
    props: ['initcount'],
    data() {
        return { count: this.initcount }
    },
    methods: {
        clickCount() {
            ++this.count;
            this.$emit('update:initcount', this.count);
        }
    }
});