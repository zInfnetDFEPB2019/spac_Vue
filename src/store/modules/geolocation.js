import axios from "axios";

const state = {
    geolocationData:[],
};
const getters = {
    allGeolocationData: state => state.geolocationData,
};

const actions = {
      getGeolocationData({ commit }) {
          let options = {
             enableHighAccuracy: true,
             timeout: 5000,
             maximumAge: 0
          };

         navigator.geolocation.getCurrentPosition(success, error, options);

         function success(pos) {
             let gps = pos.coords;

             axios.get(
                 "https://api.ipgeolocation.io/astronomy?apiKey=a5aceb4342624748a36648d2272db916&lat=" + String(gps.latitude) +
                 "&long=" + String(gps.longitude))
                 .then((response) => {commit('getGeolocationData', response.data);
                     console.log(response);
                 })
         }
         function error(err) {
             console.warn('ERROR(' + err.code + '): ' + err.message);
             return null;
         }
      }
        //  axios.get(
        //     "https://api.ipgeolocation.io/astronomy?apiKey=a5aceb4342624748a36648d2272db916&lat=" + lat + "&long=" + long)
        //     .then((response) => {commit('getGeolocationData', response.data);
        //         console.log(response);
        //     });
        // }
};
const mutations = {
    getGeolocationData: (state, geolocationData) => (state.geolocationData = geolocationData),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
