<template>
    <div>
        <div id="divContentHolderISS">
            <Header/>

            <section id="sectionISS">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/iss_section_logo.png"
                               height="75" width="75" alt="iss icon section"></b-img>
                        <p class="titleSection">ISS</p>
                    </b-row>
                </div>

                <div>
                    <Id/>
                    <LatLong/>
                    <Metrics/>
                    <Crew/>
                </div>
            </section>

            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import Id from "@/components/ISS/Id";
    import Metrics from "@/components/ISS/Metrics";
    import LatLong from "@/components/ISS/Location";
    import Crew from "@/components/ISS/Crew";

    export default {
        name: "ISS",
        components: {Crew, LatLong, Metrics, Id, Footer, Header},
        data() {
            return {
                fields: [
                    {key:'Date',sortable: true},
                    {key:'Sol',sortable: true},
                    {key:'Average',sortable: true},
                    {key:'Maximum',sortable: true},
                    {key:'Minimum',sortable: true},
                    {key:'Samples',sortable: true},
                ],
                items: [
                    {Date:'03/03/2020',Sol:'451',Average:'-62.174',Maximum:'-10.329',Minimum:'-93.563',Samples:'274075'},
                    {Date:'04/03/2020',Sol:'452',Average:'-58.657',Maximum:'-9.202',Minimum:'-94.25',Samples:'305838'},
                    {Date:'05/03/2020',Sol:'453',Average:'-59.785',Maximum:'-10.765',Minimum:'-95.073',Samples:'259908'},
                    {Date:'06/03/2020',Sol:'454',Average:'-61.741',Maximum:'-12.515',Minimum:'-95.909',Samples:'180534'},
                    {Date:'07/03/2020',Sol:'455',Average:'-63.987',Maximum:'-12.801',Minimum:'-95.437',Samples:'300454'},
                    {Date:'08/03/2020',Sol:'456',Average:'-61.451',Maximum:'-9.595',Minimum:'-94.59',Samples:'177554'},
                    {Date:'09/03/2020',Sol:'457',Average:'-59.117',Maximum:'-9.105',Minimum:'-95.712',Samples:'310592'}
                ]
            }
        },
    }
</script>

<style>

    #sectionISS {
        margin-bottom: 100px !important
    }

    .imageSection {
        margin-left: 50px;
    }

    .titleSection {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 30px;
        margin-left: 25px;
        align-self: self-end;
    }

    .contentTitle {
        margin-top: 5px !important;
        margin-left: 25px !important;
    }

    #divContentHolderISS {
        position: relative;
    }

    td {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 15px;
        padding-top: 15px;
    }
</style>