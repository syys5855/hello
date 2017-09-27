import Vue from 'vue';
import _ from 'lodash'
// import todo from '../src/component/todo';
import todolist from '../src/component/todolist';
import MyCounter from '../src/component/counter/index';
import SyncCounter from './component/sync-counter';
import MyChecker from './component/my-checker';
import SlotScope from './component/slot-scope';
import AsyncCom from './component/async-component'

window.trace = _.curry((tag, x) => {
    console.log(tag, x);
    return x;
});

// style
require('bootstrap/dist/css/bootstrap.min.css');


// 定义在内部
// let todo1 = Vue.component('todo-item', {
//     template: `<li>{{todo.text}}</li>`,
//     props: ['todo']
// });


let app = new Vue({
    el: '#app',
    data: {
        myContainer: {
            'padding': '15px 0px'
        },
        message: 'hello world',
        calcMsg: 'calcMsg',
        show: true,
        todos: [
            { text: 'hahah' },
            { text: 'wawaw' },
            { text: 'henhe' }
        ],
        inputText: '',
        inputHtml: `<span style='color:red'>123</span>`,
        dynimcalIds: [
            { id: 'dynimcal1', text: 'id 1' },
            { id: 'dynimcal2', text: 'id 2' },
            { id: 'dynimcal3', text: 'id 3' }
        ],
        disabledClick: true,
        seenDirective: false,
        seenClacArrtibute: false,
        now: new Date(),
        firstName: '',
        lastName: '',
        isActive: true,
        activeClass: 'activeClass',
        errorClass: 'errorClass',
        userInfos: {
            age: 21,
            name: 'syys',
            sex: 'man'
        },
        todolist: [
            { text: 'hahha' }
        ],
        todoText: '',
        todoaPlaceholder: 'input todo thing',
        initialCount: 0,
        syncCount: 0,
        checked: true,
        checkValue: 'hahaha',
        componentId: 'my-checker',
        asyncCom: ''
    },
    mounted() {
        this.$on('123', (...params) => {
            console.log(params);
        });

        setTimeout(() => {
            this.$emit('123', 123);
        }, 3000);


        this.$on('increase', (...params) => {
            console.log('increase--->', params);
        })
    },
    methods: {
        hello() {
            alert('hello');
        },
        toggleDisabled() {
            this.disabledClick = !this.disabledClick;
        },
        toggleDirective() {
            this.seenDirective = !this.seenDirective;
        },
        toggleCalcAttr() {
            this.seenClacArrtibute = !this.seenClacArrtibute;
        },
        getNowByFunc() {
            return new Date();
        },
        getNowByCalc() {
            return this.now;
        },
        toggleSex() {
            this.userInfos.sex = this.userInfos.sex === 'man' ? 'woman' : 'man';
        },
        addUserInf() {
            this.userInfos = Object.assign({}, this.userInfos, {
                firstName: 'zys'
            })
        },
        addTodo() {
            let text = this.todoText;
            this.todolist.push({ text });
            this.todoText = '';
        },
        removeTodo(index) {
            this.todolist.splice(index, 1);
            // console.log(index);
        }
    },
    computed: {
        reversedMessage() {
            console.log(this);
            let join = _.curry((separator, arr) => _.join(arr, separator));
            let split = _.curry((separator, str) => _.split(str, separator));
            let splitBlank = split(''),
                joinComma = join('');
            return _.flowRight(joinComma, _.reverse, splitBlank)(this.calcMsg);
        },
        getNow() {
            return this.now;
        },

        fullName: {
            set: function(newVal) {
                let params = Array.from(arguments);
                this.firstName = newVal;
                console.log(params);
            },
            get: function() {
                console.log('fullName is get from this.firstName');
                return this.firstName;
            }
        }

    },
    filters: {
        date: function(date) {
            return new Date(date).toLocaleString();
        }
    },
    components: {
        todolist,
        MyCounter,
        SyncCounter,
        MyChecker,
        SlotScope,
        AsyncCom
    },
    watch: {
        seenDirective: function(val, oldVal) {
            console.log(`seenDirective change from ${oldVal}  to  ${val}`);
        }
    }
});

window.app = app;