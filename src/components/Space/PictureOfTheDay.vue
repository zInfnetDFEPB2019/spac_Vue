<template>
    <div>
        <div class="divContentHolderPictureOfTheDay">
            <Header/>
            <section id="sectionPictureOfTheDay">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/picture_of_the_day.png"
                               height="75" width="75" alt="picture of the day icon section"></b-img>
                        <p class="titleSectionPictureOfTheDay">Picture of the day</p>
                    </b-row>
                </div>

                <div id="divCardPictureOfTheDay">
                    <b-card
                            :header="allPictures.title"
                            header-class="headerAlign"
                            id="cardPictureOfTheDay"
                            border-variant="dark"
                            :img-src="allPictures.hdurl"
                            :img-alt="allPictures.explanation"
                            img-top>
                        <b-card-text id="cardText">
                            {{ allPictures.explanation }}
                        </b-card-text>
                        <p id="pCopyright"><small>&copy;&nbsp;{{ allPictures.copyright }}</small></p>
                    </b-card>
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
        name: "PictureOfTheDay",
        components: {Footer, Header},
        methods: {
            ...mapActions(["getPictures"]),
        },
        computed:
            mapGetters(["allPictures"]),
        created() {
            this.getPictures();
        }
    }
</script>

<style scoped>

    #cardPictureOfTheDay {
        max-width: calc(100% - 25%);
        max-height: calc(100% - 25%);
        margin: 0 auto;
        background-color: #1F1F1F !important;
        text-align: justify;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    #cardText {
        color: #616161;
    }

    .headerAlign {
        text-align: center !important;
    }

    #sectionPictureOfTheDay {
        margin-bottom: 100px !important
    }

    .imageSection {
        margin-left: 50px;
    }

    .titleSectionPictureOfTheDay {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 30px;
        margin-left: 25px;
        margin-top: -5px !important;
        align-self: self-end;
    }

    .contentTitle {
        margin-top: 5px !important;
        margin-left: 25px !important;
    }

    #divCardPictureOfTheDay {
        margin-top: 25px;
    }

    #pCopyright {
        color: #616161;
        text-align: end;
    }

</style>