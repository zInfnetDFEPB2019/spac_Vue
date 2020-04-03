import axios from "axios";
import ExternalFunctions from "@/store/classes/ExternalFunctions";

const state = {
    detailedComet:[],
};
const getters = {
    allCometDetails: state => state.detailedComet,
    detailedCometById: (state) => (id) => (state.detailedComet.filter(dc => dc._id == id))[0],
};

const actions = {
    getCometDetails({ commit },cometId) {
        axios.get(
            "https://api.nasa.gov/neo/rest/v1/neo/" + cometId + "?api_key=5ZuQWT0HluYL1cXTkwZTSuGAg21iQ2XqnwzgSX4Q"
        ).then((response) => {
            commit('getCometDetails',ExternalFunctions.createCometObject(response.data));
        });
    },

    updateCometDetails({commit},updComet){
        commit("updateCometDetails",updComet);
    },

};

const mutations = {
    getCometDetails: (state, detailedComet) => (state.detailedComet = detailedComet),
    updateCometDetails: (state, updComet) => {
        const index = state.detailedComet.findIndex(dc => dc._id === updComet._id);
        if (index !== -1) {
            state.detailedComet.splice(index, 1, updComet);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
