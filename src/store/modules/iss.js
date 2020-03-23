import axios from "axios";

const state = {
    members:[],
    issData:[]
};
const getters = {
    allMembers: state => state.members,
    allISSData: state => state.issData
};

const actions = {
    getMembers({ commit }) {
        axios.get(
            "http://api.open-notify.org/astros.json"
        ).then((response) => {
            // let issCrew = Array(),
            //     jsonLength = response.data.number;
            //
            // for (let i = 0; i < jsonLength; i++) {
            //     issCrew.push(String(Object.values(response.data.people)[i]["name"]));
            // }
            commit('getMembers', response.data.people);
        });
    },
    addMember({commit} , new_member){
        commit('addMember', new_member);
    },

    getISSData({ commit }) {
        axios.get(
            "https://api.wheretheiss.at/v1/satellites/25544"
        ).then((responseISS) => {
            commit('getISSData', responseISS.data);
        });
    },

};
const mutations = {
    getMembers: (state, members) => (state.members = members),
    addMember: (state, new_member) => state.members.push(new_member),

    getISSData: (state, issData) => (state.issData = issData),

};

export default {
    state,
    getters,
    actions,
    mutations,
};
