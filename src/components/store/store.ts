import { Commit, createStore } from 'vuex';

export default createStore({
state: {
    authenticated: false,
    login: ''
},
mutations: {
    SET_AUTH: (state, auth) => state.authenticated = auth,
    SET_LOGIN: (state, login) => state.login = login 
},
actions: {
    setAuth: ({ commit }, auth) => commit('SET_AUTH', auth),
    setLogin: ({ commit }, login) => commit('SET_LOGIN', login) 
},
	modules: {}
});