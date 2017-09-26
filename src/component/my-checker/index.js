import Vue from 'vue';
export default Vue.component('my-checker', {
    template: require('./index.html'),
    props: {
        checked: Boolean,
    },
    model: {
        event: "hahahaha", //model 通过这hahahaha这个事件触发
        prop: 'checked' //要更改的值
    },
    methods: {
        changeSelect($event) {
            this.$emit('hahahaha', $event.target.checked);
        }
    }
});