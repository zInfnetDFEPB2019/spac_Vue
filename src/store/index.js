import Vuex from "vuex";
import Vue from "vue";
import iss from "./modules/issCrew";
import issData from "@/store/modules/issData";
import geolocation from "@/store/modules/geolocation";
import pictureOfTheDay from "@/store/modules/pictureOfTheDay";
import marsWeather from "@/store/modules/marsWeather";
import marsPhotos from "@/store/modules/marsPhotos";
import cometSearch from "@/store/modules/cometSearch";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cometSearch,
        iss,
        issData,
        marsWeather,
        marsPhotos,
        geolocation,
        pictureOfTheDay,
    }
});
