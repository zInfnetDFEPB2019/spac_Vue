import axios from "axios";

const state = {
    members:[]
};

const getters = {
    allMembers: state => state.members,
};

const actions = {
    getMembers({ commit }) {
        axios.get(
            "http://api.open-notify.org/astros.json"
        ).then((response) => {
            commit('getMembers', response.data.people);
        });
    },
};

const mutations = {
    getMembers: (state, members) => (state.members = members),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
