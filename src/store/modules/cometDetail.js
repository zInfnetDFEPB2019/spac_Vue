import axios from "axios";
// import externalFunctions from "../../external_functions";
import CometDetail from '../classes/CometDetail';
import CloseApproach from '../classes/CloseApproach';

const state = {
    detailedComet:[],
};
const getters = {
    allCometDetails: state => state.detailedComet,
};

const actions = {
    getCometDetails({ commit },cometId) {
        axios.get(
            "https://api.nasa.gov/neo/rest/v1/neo/" + cometId + "?api_key=5ZuQWT0HluYL1cXTkwZTSuGAg21iQ2XqnwzgSX4Q"
        ).then((response) => {
            let details = response.data;

            function createCometObject() {
                let
                    id = String((details)["id"]),
                    absoluteMagnitude = String((details)["absolute_magnitude_h"]),
                    name = String((details)["name"].replace("(", "").replace(")", "")),
                    estimatedDiameterAvg = String(((((details)["estimated_diameter"]["meters"]["estimated_diameter_max"]
                        + (details)["estimated_diameter"]["meters"]["estimated_diameter_min"]) / 2)).toFixed(2)),
                    potentiallyHazardous = CometDetail.hazardLevel((details)["is_potentially_hazardous_asteroid"]),
                    sentryObject = CometDetail.hitChanceNext100Years(String((details)["sentry_object"])),
                    closeApproach = CloseApproach.getApproachDates(details);

                let
                    comet = new CometDetail(
                    id,
                    absoluteMagnitude,
                    name,
                    estimatedDiameterAvg,
                    potentiallyHazardous,
                    sentryObject,
                    closeApproach
                );
                return comet;
            }
        commit('getCometDetails',createCometObject());
        });
    },

};

const mutations = {
    getCometDetails: (state, detailedComet) => (state.detailedComet = detailedComet),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
