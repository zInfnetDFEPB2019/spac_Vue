import axios from "axios";

const state = {
    comets:[],
};
const getters = {
    allComets: state => state.comets,
};

const actions = {
    getComets({ commit },dates) {
        const START = dates[0],
              END = dates[1];
        axios.get(
            "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + START + "&end_date=" + END + "&api_key=5ZuQWT0HluYL1cXTkwZTSuGAg21iQ2XqnwzgSX4Q"
        ).then((response) => {

            class Comet {
                constructor(id, name, absoluteMagnitude, estimatedDiameterAvg, potentiallyHazardous,
                            closeApproach, relativeVelocity, missDistance, sentryObject) {
                    this._id = id;
                    this._name = name;
                    this._absoluteMagnitude = absoluteMagnitude;
                    this._estimatedDiameterAvg = estimatedDiameterAvg;
                    this._potentiallyHazardous = potentiallyHazardous;
                    this._closeApproach = closeApproach;
                    this._relativeVelocity = relativeVelocity;
                    this._missDistance = missDistance;
                    this._sentryObject = sentryObject;
                }

                get id() {
                    return this._id;
                }
                set id(value) {
                    this._id = value;
                }

                get name() {
                    return this._name;
                }
                set name(value) {
                    this._name = value;
                }

                get absoluteMagnitude() {
                    return this._absoluteMagnitude;
                }
                set absoluteMagnitude(value) {
                    this._absoluteMagnitude = value;
                }

                get estimatedDiameterAvg() {
                    return this._estimatedDiameterAvg;
                }
                set estimatedDiameterAvg(value) {
                    this._estimatedDiameterAvg = value;
                }

                get potentiallyHazardous() {
                    return this._potentiallyHazardous;
                }
                set potentiallyHazardous(value) {
                    this._potentiallyHazardous = value;
                }

                get closeApproach() {
                    return this._closeApproach;
                }
                set closeApproach(value) {
                    this._closeApproach = value;
                }

                get relativeVelocity() {
                    return this._relativeVelocity;
                }
                set relativeVelocity(value) {
                    this._relativeVelocity = value;
                }

                get missDistance() {
                    return this._missDistance;
                }
                set missDistance(value) {
                    this._missDistance = value;
                }

                get sentryObject() {
                    return this._sentryObject;
                }
                set sentryObject(value) {
                    this._sentryObject = value;
                }

                static ceilValue(value){
                    return Math.ceil(value);
                }

                static hazardLevel(String){
                    let classification;

                    if (String === "true") {
                        classification = "DANGER";
                    } else {
                        classification = "SAFE";
                    }
                    return classification;
                }

                static hitChanceNext100Years(String){
                    let possibility;

                    if (String === "true") {
                        possibility = "MAYBE";
                    } else {
                        possibility = "SAFE";
                    }
                    return possibility;
                }
            }

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
                            closeApproach = String(Object.values(comets)[2][jsonDate][iterator]["close_approach_data"][0]["close_approach_date_full"]).replace(" ", " - "),
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
            console.log(cometSearch());
            commit('getComets',cometSearch());
            // commit('getComets', response.data);
            // console.log(response.data);
        });

    },
};
const mutations = {
    getComets: (state, comets) => (state.comets = comets),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
