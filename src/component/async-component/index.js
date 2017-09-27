import Vue from 'vue';
export default Vue.component('async-component', (res, rej) => {
    setTimeout(function() {
        require(['./index.html'], (template) => {
            res({
                template,
                data() {
                    return { content: 'wohahahhaha' }
                }
            })
        });
    }, 2000);
});