import axios from "axios";
import ExternalFunctions from "@/store/classes/ExternalFunctions";

const state = {
    marsWeather:[]
};
const getters = {
    allMarsWeather: state => state.marsWeather
};

const actions = {

    getMarsWeather({ commit }) {
        axios.get(
            "https://api.nasa.gov/insight_weather/?api_key=5ZuQWT0HluYL1cXTkwZTSuGAg21iQ2XqnwzgSX4Q&feedtype=json&ver=1.0"
        ).then((response) => {
            commit('getMarsWeather', ExternalFunctions.createMarsWeatherObject(response.data));
        });
    },

};
const mutations = {
    getMarsWeather: (state, marsWeather) => (state.marsWeather = marsWeather),
};

export default {
    state,
    getters,
    actions,
    mutations,
};