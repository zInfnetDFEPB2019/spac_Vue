import axios from "axios";
import ExternalFunctions from "@/store/classes/ExternalFunctions";

const state = {
    magneticFieldData:[],
};
const getters = {
    allMagneticFieldData: state => state.magneticFieldData,
};

const actions = {
      getMagneticFieldData({ commit }) {
          let options = {
             enableHighAccuracy: true,
             timeout: 10000,
             maximumAge: 0
          };

         navigator.geolocation.getCurrentPosition(success, error, options);

         function success(pos) {
             let gps = pos.coords;

             axios.get(
                 "https://globalmagnet.amentum.space/wmm/magnetic_field?altitude=0&latitude=" + String(gps.latitude) + "&longitude=" + String(gps.longitude) + "&year=" + ExternalFunctions.getMonthYear())
                 .then((response) => {
                     commit('getMagneticFieldData', response.data);
                 })
         }
         function error(err) {
             console.warn('ERROR(' + err.code + '): ' + err.message);
             return null;
         }
      }
};
const mutations = {
    getMagneticFieldData: (state, magneticFieldData) => (state.magneticFieldData = magneticFieldData),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
