<template>
    <div>
        <div class="divContentHolderMarsPhotos">
            <Header/>
            <section id="sectionMarsPhotos">
                <div>
                    <b-row class="contentTitle">
                        <b-img class="imageSection" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/picture_of_the_day.png"
                               height="75" width="75" alt="picture of the day icon section"></b-img>
                        <p class="titleSectionMarsPhotos">Mars Photos</p>
                    </b-row>
                </div>

                <div id="divCardMarsPhotos" v-for="photo in allMarsPhotos" :key="photo.id">
                    <b-card
                            :header="photos.rover.name"
                            header-class="headerAlign"
                            id="cardMarsPhotos"
                            border-variant="dark"
                            :img-src="allMarsPhotos.hdurl"
                            :img-alt="allMarsPhotos.explanation"
                            img-top>
                        <b-card-text id="cardText">
                            {{ allMarsPhotos.explanation }}
                        </b-card-text>
                        <p id="pCopyright"><small>&copy;&nbsp;{{ allMarsPhotos.copyright }}</small></p>
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
        name: "MarsPhotos",
        components: {Footer, Header},
        methods: {
            ...mapActions(["getMarsPhotos"]),
        },
        computed:
            mapGetters(["allMarsPhotos"]),
        created() {
            this.getMarsPhotos();
        }
    }
</script>

<style scoped>

    #cardMarsPhotos {
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

    #sectionMarsPhotos {
        margin-bottom: 100px !important
    }

    .imageSection {
        margin-left: 50px;
    }

    .titleSectionMarsPhotos {
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

    #divCardMarsPhotos {
        margin-top: 25px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;

    }

    #pCopyright {
        color: #616161;
        text-align: end;
    }

</style>