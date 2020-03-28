<template>
    <div>
        <div id="divContentHolderLocalInformation">
            <Header/>
            <section id="sectionLocalInformation">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/local_information.png"
                               height="75" width="75" alt="local information icon section"></b-img>
                        <p class="titleSection">LOCAL INFORMATION</p>
                    </b-row>
                </div>

                <div>
                    <Sun/>
                    <Moon/>
                    <Coordinates/>
                </div>
                
            </section>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import Sun from "@/components/Earth/Sun";
    import Moon from "@/components/Earth/Moon";
    import Coordinates from "@/components/Earth/Coordinates";
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "LocalInformation",
        components: {Coordinates, Moon, Sun, Footer, Header},
        methods: {
            ...mapActions(["getGeolocationData"]),
        },
        computed:
            mapGetters(["allGeolocationData"]),
        created() {
            this.getGeolocationData();
        }
    }
</script>

<style scoped>
    .imageSection {
        margin-left: 50px;
    }

    .titleSection {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 30px;
        margin-left: 25px;
        margin-top: 20px !important;
        align-self: self-end;
    }

    .contentTitle {
        margin-top: 5px !important;
        margin-left: 25px !important;
    }

    .row {
        margin: 0;
    }

    .form-row  {
        margin: 0;
    }

    #divContentHolderLocalInformation {
        position: relative;
    }
    
    .bg-b-table-default {
        background-color: #181818 !important;
    }

    #sectionLocalInformation {
        margin-bottom: 25px !important;
    }
</style>