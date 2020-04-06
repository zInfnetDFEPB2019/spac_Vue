import axios from "axios";

const state = {
    earthData:[]
};
const getters = {
    allEarthData: state => state.earthData
};

const actions = {
    getEarthData({ commit }) {
        axios.get(
            "https://api.le-systeme-solaire.net/rest/bodies/terre"
        ).then((response) => {
            commit('getEarthData', response.data);
        });
    },
};
const mutations = {
    getEarthData: (state, earthData) => (state.earthData = earthData),
};

export default {
    state,
    getters,
    actions,
    mutations,
};