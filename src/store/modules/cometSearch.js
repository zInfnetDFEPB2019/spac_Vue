import axios from "axios";
import Comet from "../classes/Comet";
import ExternalFunctions from "../classes/ExternalFunctions";

const state = {
    comets:[],
};
const getters = {
    allComets: state => state.comets,
    cometById: (state) => (id) => (state.comets = state.comets.filter(c => c._id == id))[0],
};

const actions = {
    getComets({ commit },dates) {
        const START = dates[0],
              END = dates[1];
        axios.get(
            "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + START + "&end_date=" + END + "&api_key=5ZuQWT0HluYL1cXTkwZTSuGAg21iQ2XqnwzgSX4Q"
        ).then((response) => {

            function formatDateJSON(dateValue) {
                let date = new Date(dateValue),
                    dateISO = date.toISOString(),
                    day = dateISO.substr(8, 2),
                    month = dateISO.substr(5, 2),
                    year = dateISO.substr(0, 4);
                return (year + "-" + month + "-" + day);
            }

            function cometSearch () {
                let comets = response.data,
                    start = new Date(START),
                    end = new Date(END),
                    cometList = Array();

                start.setHours(start.getHours() + 4);
                end.setHours(end.getHours() + 4);

                for (start; start <= end; start.setHours(start.getHours() + 24)) {
                    let
                        jsonDate = formatDateJSON(start),
                        dataPath = Object.values(comets)[2][jsonDate];

                    for (let iterator = 0; iterator < dataPath.length; iterator++){
                        let
                            id = String(Object.values(comets)[2][jsonDate][iterator]["id"]),
                            name = String((Object.values(comets)[2][jsonDate][iterator]["name"]).replace("(", "").replace(")", "")),
                            absoluteMagnitude = String(Object.values(comets)[2][jsonDate][iterator]["absolute_magnitude_h"]),
                            estimatedDiameterAvg = String((((Object.values(comets)[2][jsonDate][iterator]["estimated_diameter"]["meters"]["estimated_diameter_max"]
                                + Object.values(comets)[2][jsonDate][iterator]["estimated_diameter"]["meters"]["estimated_diameter_min"]) / 2)).toFixed(2)),
                            potentiallyHazardous = Comet.hazardLevel(Object.values(comets)[2][jsonDate][iterator]["is_potentially_hazardous_asteroid"]),
                            closeApproach = ExternalFunctions.correctNullValue(String(Object.values(comets)[2][jsonDate][iterator]["close_approach_data"][0]["close_approach_date_full"]).replace(" ", " - ")),
                            relativeVelocity = String(Number(Object.values(comets)[2][jsonDate][iterator]["close_approach_data"][0]["relative_velocity"]["kilometers_per_hour"]).toFixed(2)),
                            missDistance = String(Number(Object.values(comets)[2][jsonDate][iterator]["close_approach_data"][0]["miss_distance"]["kilometers"]).toFixed(2)),
                            sentryObject = Comet.hitChanceNext100Years(String(Object.values(comets)[2][jsonDate][iterator]["sentry_object"]));

                        let comet = new Comet(
                            id,
                            name,
                            absoluteMagnitude,
                            estimatedDiameterAvg,
                            potentiallyHazardous,
                            closeApproach,
                            relativeVelocity,
                            missDistance,
                            sentryObject
                        );
                        cometList.push(comet);
                    }
                }
                return cometList;
            }
            commit('getComets',cometSearch());
        });
    },

    deleteComet({ commit }, id) {
        commit("deleteComet", id);
    },

    updateComet({commit},updComet){
        commit("updateComet",updComet);
    },

    addComet({commit} , new_comet){
        commit('addComet', new_comet);
    },

};
const mutations = {
    getComets: (state, comets) => (state.comets = comets),
    deleteComet: (state, id) =>
        (state.comets = state.comets.filter(c => c._id !== id)),
    updateComet: (state, updComet) => {
        const index = state.comets.findIndex(c => c._id === updComet.id);
        if (index !== -1) {
            state.comets.splice(index, 1, updComet);
        }
    },
    addComet: (state, new_comet) => state.comets.push(new_comet),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
