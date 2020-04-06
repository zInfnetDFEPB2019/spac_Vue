import axios from "axios";

const state = {
    issData:[]
};
const getters = {
    allISSData: state => state.issData
};

const actions = {
    getISSData({ commit }) {
        axios.get(
            "https://api.wheretheiss.at/v1/satellites/25544"
        ).then((response) => {
            commit('getISSData', response.data);
        });
    },
};
const mutations = {
    getISSData: (state, issData) => (state.issData = issData),
};

export default {
    state,
    getters,
    actions,
    mutations,
};