import Vuex from "vuex";
import Vue from "vue";
import iss from "./modules/issCrew";
import issData from "@/store/modules/issData";
import geolocation from "@/store/modules/geolocation";
import pictureOfTheDay from "@/store/modules/pictureOfTheDay";
import marsWeather from "@/store/modules/marsWeather";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        iss,
        issData,
        marsWeather,
        geolocation,
        pictureOfTheDay,
    }
});
