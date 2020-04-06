<template>
    <div>
        <div id="divContentHolderLocalInformation">
            <Header/>
            <section id="sectionLocalInformation">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/comet_search.png"
                               height="75" width="75" alt="local information icon section"></b-img>
                        <p class="titleSection">FELT ON EARTH</p>
                    </b-row>
                </div>

                <div class="container borderTable" id="divContainerTableFeltOnEarth">
                    <b-table sticky-header=true id="tableMarsWeatherPressure" borderless hover :items="allFeltOnEarthData" :fields="fields" :dark="true" responsive=true>

                        <template v-slot:head(id)="data">
                            <span v-b-popover.hover.top.v-dark="{ content: feltOnEarthId }">{{ data.label }}</span>
                        </template>
                        <template v-slot:head(fall)="data">
                            <span v-b-popover.hover.top.v-dark="{ content: feltOnEarthType }">{{ data.label }}</span>
                        </template>
                        <template v-slot:head(lat)="data">
                            <span v-b-popover.hover.top.v-dark="{ content: feltOnEarthLatitude }">{{ data.label }} <sup>(Deg)</sup></span>
                        </template>
                        <template v-slot:head(long)="data">
                            <span v-b-popover.hover.top.v-dark="{ content: feltOnEarthLongitude }">{{ data.label }} <sup>(Deg)</sup></span>
                        </template>
                        <template v-slot:head(mass)="data">
                            <span v-b-popover.hover.top.v-dark="{ content: feltOnEarthMass }">{{ data.label }} <sup>(g)</sup></span>
                        </template>
                        <template v-slot:head(name)="data">
                            <span v-b-popover.hover.top.v-dark="{ content: feltOnEarthName }">{{ data.label }} <sup>(Local)</sup></span>
                        </template>
                        <template v-slot:head(year)="data">
                            <span v-b-popover.hover.top.v-dark="{ content: feltOnEarthYear }">{{ data.label }}</span>
                        </template>
                    </b-table>
                </div>

            </section>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import Glossary from "@/components/Glossary";
    export default {
        name: "FeltOnEarth",
        components: {Footer, Header},
        methods: {
            ...mapActions(["getFeltOnEarthData"]),
        },
        computed:
            mapGetters(["allFeltOnEarthData"]),
        created() {
            this.getFeltOnEarthData();
        },
        data() {
            return {
                fields: [
                    {key:'id',sortable: true,label:'ID'},
                    {key:'fall',sortable: true,label:'Type'},
                    {key:'lat',sortable: true,label:'Latitude'},
                    {key:'long',sortable: true,label:'Longitude'},
                    {key:'mass',sortable: true,label:'Mass'},
                    {key:'name',sortable: true,label:'Name'},
                    {key:'year',sortable: true,label:'Year'},
                ],
                feltOnEarthId:Glossary.methods.data().feltOnEarthId,
                feltOnEarthType:Glossary.methods.data().feltOnEarthType,
                feltOnEarthLatitude:Glossary.methods.data().feltOnEarthLatitude,
                feltOnEarthLongitude:Glossary.methods.data().feltOnEarthLongitude,
                feltOnEarthMass:Glossary.methods.data().feltOnEarthMass,
                feltOnEarthName:Glossary.methods.data().feltOnEarthName,
                feltOnEarthYear:Glossary.methods.data().feltOnEarthYear,
            }
        },
    }
</script>

<style scoped>
    #divContainerTableFeltOnEarth {
        margin-top: 50px;
    }
</style>