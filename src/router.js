import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import CometSearch from "@/components/Space/CometSearch";
import CometDetail from "@/components/Space/CometDetail";
import EditComet from "@/components/Space/EditComet";
import MarsWeather from "@/components/MarsWeather/MarsWeather";
import LocalInformation from "@/components/Earth/LocalInformation";
import ISS from "@/components/ISS/ISS";
import PictureOfTheDay from "@/components/Space/PictureOfTheDay";
import NewComet from "@/components/Space/NewComet";
import MagneticField from "@/components/Earth/MagneticField";
import Overview from "@/components/Earth/Overview";
import FeltOnEarth from "@/components/Earth/FeltOnEarth";
import NotFound from "@/components/NotFound/NotFound";

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
            component: CometSearch,
        },
        {
            path:'/cometsearch/cometdetail/:id',
            name:'cometDetail',
            component: CometDetail,

        },
        {
            path:'/newcomet',
            name:'newComet',
            component: NewComet,
        },
        {
            path:'/cometsearch/cometdetail/edit/:id',
            name:'editComet',
            component: EditComet,
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
            path:'/overview',
            name:'overview',
            component: Overview
        },
        {
            path:'/localinformation',
            name:'localInformation',
            component: LocalInformation
        },
        {
            path:'/magneticfield',
            name:'magneticField',
            component: MagneticField
        },
        {
            path:'/feltonearth',
            name:'feltOnEarth',
            component: FeltOnEarth
        },
        {
            path:'/iss',
            name:'ISS',
            component: ISS
        },
        {
            path:'/notfound',
            name:'NotFound',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/notfound'
        },
    ]
});