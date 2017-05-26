/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        // 当前用户
        user: {
            name: 'zz',
            img: 'static/1.jpg'
        },
        // 会话列表
        sessions: [
            {
                id: 1,
                user: {
                    name: '示例介绍',
                    img: 'static/2.png'
                },
                messages: [
                    {
                        content: 'Hello，这是参照网上例子做的Vue + Vuex + Webpack构建的简单聊天室示例，聊天记录保存在localStorge。',
                        date: now
                    }, {
                        content: '项目地址: https://github.com/zhoumengmeng/vue-chat-demo.git',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: 'webpack',
                    img: 'static/3.jpg'
                },
                messages: [{
                    content:'欢迎Star！',
                    date:now
                }]
            }
        ],
        // 当前选中的会话
        currentSessionId: 1,
        // 过滤出只包含这个key的会话
        filterKey: ''
    },
    mutations: {
        INIT_DATA(state){
            let data = localStorage.getItem("vue-chat-session");
            if(data){
                state.sessions = JSON.parse(data);
            }
        },
        SET_FILTER_KEY(state, value) {
            state.filterKey = value;
        },
        SELECT_SESSION(state,id) {
            state.currentSessionId = id;
        },
        SEND_MESSAGE(state,content) {
            let session = state.sessions.filter((item)=> item.id == state.currentSessionId)[0]
            session.messages.push({
                content: content,
                date:now,
                self:true
            })
            localStorage.setItem("vue-chat-session",JSON.stringify(state.sessions));
        }
    },
    actions:{
    	search({commit},value) {
            commit("SET_FILTER_KEY",value)
        },
        selectSession({commit},id) {
            commit("SELECT_SESSION",id)
        },
        sendMessage({commit},content){
            commit("SEND_MESSAGE",content)
        },
        initData({commit}){
            commit("INIT_DATA")
        }
    }

});


export default store;
// export const actions = {
//     initData: ({ dispatch }) => dispatch('INIT_DATA'),
//     sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
//     selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
//     search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value)
// };
