import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import CometSearch from "@/components/CometSearch";
import LocalInformation from "@/components/LocalInformation";
import MarsWeather from "@/components/MarsWeather";
import MarsTemperature from "@/components/MarsTemperature";
import c1 from "@/components/c1";

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/cometsearch',
            name:'cometSearch',
            component: CometSearch
        },
        {
            path:'/marsweather',
            name:'marsWeather',
            component: MarsWeather
        },
        {
            path:'/marstemperature',
            name:'marsTemperatures',
            component: MarsTemperature
        },
        {
            path:'/localinformation',
            name:'localInformation',
            component: LocalInformation
        },
        {
            path:'/c1',
            name:'c1',
            component: c1
        },
    ]
});