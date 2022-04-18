import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";
import i18n from '@/locales'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        UserID: null,
        UserName: null,
        UserToken: null,
        AutoHide: true, //leftDrawer的自动隐藏
        menu: [{
            to: "/home",
            icon: "ri-home-3-line",
            title: i18n.t("leftDrawerMenu.home")
        }, {
            to: "/music",
            icon: "ri-flask-line",
            title: i18n.t("leftDrawerMenu.music")
        }, {
            to: "/room",
            icon: "ri-hotel-line",
            title: i18n.t("leftDrawerMenu.room")
        }, {
            to: "/game",
            icon: "ri-gamepad-line",
            title: i18n.t("leftDrawerMenu.game")
        }, {
            to: "/setting",
            icon: "ri-settings-line",
            title: i18n.t("leftDrawerMenu.setting")
        }],
    },
    mutations: {
        setUserID(state, payload) {
            state.UserID = payload;
        },
        setUserName(state, payload) {
            state.UserName = payload;
        },
        setUserToken(state, payload) {
            state.UserToken = payload;
        },
        toggleAutoHide(state, payload) {
            state.AutoHide = payload === undefined ? !state.AutoHide : payload;
        }
    },
    actions: {
        login({commit}, payload) {
            Axios.post("http://47.97.41.244/test/login.php", {
                userName: payload["UserName"],
                userPassword: payload["UserPassword"]
            }).then((response) => {
                console.log(response);
                if (response.data['token'] != null) {
                    commit('setUserName', payload['UserName']);
                    commit('setUserToken', response.data['token']);
                    localStorage.setItem("userName", payload['UserName']);
                    localStorage.setItem("userToken", response.data['token']);
                    console.log("登录成功");
                } else {
                    console.log("登录失败");
                }
            });
        },
        logout({commit}) {
            commit('setUserName', null);
            commit('setUserToken', null);
            localStorage.removeItem("userName");
            localStorage.removeItem("userToken");
        }
    }
})
