import axios from "axios";

const state = {
    marsPhotos:[]
};
const getters = {
    allMarsPhotos: state => state.marsPhotos
};

const actions = {
    getMarsPhotos({ commit }) {
        axios.get(
            "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?camera=mast&sol=1000&api_key=5ZuQWT0HluYL1cXTkwZTSuGAg21iQ2XqnwzgSX4Q"
        ).then((response) => {
            commit('getMarsPhotos', response.data);
            console.log(response.data);
        });
    },
};
const mutations = {
    getMarsPhotos: (state, marsPhotos) => (state.marsPhotos = marsPhotos),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
