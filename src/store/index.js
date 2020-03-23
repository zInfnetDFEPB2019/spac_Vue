import Vuex from "vuex";
import Vue from "vue";
import iss from "./modules/iss";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        iss,
    }
});
