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
                    {key:'mass',sortable: true,label:'Mass (g)'},
                    {key:'name',sortable: true,label:'Name (Local)'},
                    {key:'year',sortable: true,label:'Year'},
                ],
            }
        },
    }
</script>

<style scoped>
    #divContainerTableFeltOnEarth {
        margin-top: 50px;
    }
</style>