import axios from "axios";
import FeltOnEarth from "@/store/classes/FeltOnEarth";

const state = {
    feltOnEarthData:[]
};
const getters = {
    allFeltOnEarthData: state => state.feltOnEarthData
};

const actions = {
    getFeltOnEarthData({ commit }) {
        axios.get(
            "https://data.nasa.gov/resource/gh4g-9sfh.json"
        ).then((response) => {
            let comets = response.data,
                feltComets = Array();

            for (let i = 0; i < comets.length; i++) {
                let
                    id = comets[i]["id"],
                    fall = comets[i]["fall"],
                    lat = FeltOnEarth.checkNullValue(String(Number(comets[i]["reclat"]).toFixed(2))),
                    long = FeltOnEarth.checkNullValue(String(Number(comets[i]["reclong"]).toFixed(2))),
                    mass = FeltOnEarth.checkMassValue(comets[i]["mass"]),
                    name = comets[i]["name"],
                    year = FeltOnEarth.checkNullValue(String(new Date(comets[i]["year"]).getFullYear()));

                feltComets.push(new FeltOnEarth(id,fall,lat,long,mass,name,year));
            }
            commit('getFeltOnEarthData', feltComets);
        });
    },
};
const mutations = {
    getFeltOnEarthData: (state, feltOnEarthData) => (state.feltOnEarthData = feltOnEarthData),
};

export default {
    state,
    getters,
    actions,
    mutations,
};