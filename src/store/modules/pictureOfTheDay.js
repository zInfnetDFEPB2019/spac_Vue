import axios from "axios";

const state = {
    pictures:[],
};
const getters = {
    allPictures: state => state.pictures
};

const actions = {
    getPictures({ commit }) {
        axios.get(
            "https://api.nasa.gov/planetary/apod?api_key=5ZuQWT0HluYL1cXTkwZTSuGAg21iQ2XqnwzgSX4Q"
        ).then((response) => {
            commit('getPictures', response.data);
        });
    },
};

const mutations = {
    getPictures: (state, pictures) => (state.pictures = pictures),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
