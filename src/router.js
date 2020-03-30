import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import CometSearch from "@/components/Space/CometSearch";
import CometInfo from "@/components/Space/CometInfo";
import SpaceWeather from "@/components/Space/SpaceWeather";
import MarsWeather from "@/components/MarsWeather/MarsWeather";
import LocalInformation from "@/components/Earth/LocalInformation";
import ISS from "@/components/ISS/ISS";
import c1 from "@/components/c1";
import PictureOfTheDay from "@/components/Space/PictureOfTheDay";
import MarsPhotos from "@/components/MarsPhotos/MarsPhotos";

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
            path:'/cometinfo',
            name:'cometInfo',
            component: CometInfo
        },
        {
            path:'/spaceweather',
            name:'spaceWeather',
            component: SpaceWeather
        },
        {
            path:'/pictureoftheday',
            name:'pictureOfTheDay',
            component: PictureOfTheDay
        },
        {
            path:'/marsweather',
            name:'marsWeather',
            component: MarsWeather
        },
        {
            path:'/marsphotos',
            name:'marsPhotos',
            component: MarsPhotos
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