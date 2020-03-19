import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import CometSearch from "@/components/Space/CometSearch";
import LocalInformation from "@/components/Earth/LocalInformation";
import MarsWeather from "@/components/MarsWeather/MarsWeather";
import c1 from "@/components/c1";
import SpaceWeather from "@/components/Space/SpaceWeather";
import ISS from "@/components/ISS/ISS";

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
            path:'/spaceweather',
            name:'spaceWeather',
            component: SpaceWeather
        },
        {
            path:'/marsweather',
            name:'marsWeather',
            component: MarsWeather
        },
        {
            path:'/localinformation',
            name:'localInformation',
            component: LocalInformation
        },
        {
            path:'/iss',
            name:'ISS',
            component: ISS
        },
        {
            path:'/c1',
            name:'c1',
            component: c1
        },
    ]
});