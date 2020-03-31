<template>
    <div>
        <div>
            <b-row class="contentDivSpaceCometInfoCloseApproach">
            <b-img class="imageDivSpaceCometInfoCloseApproach" src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/close_approach.png"
                   height="50" width="50" alt="comet close approach icon icon"></b-img>
                <p class="titleDivSpaceCometInfoCloseApproach">Close Approach <sup>Complete</sup></p>
            </b-row>
        </div>

        <div class="container" id="divContainerTableSpaceCometInfoCloseApproach">
            <div class="borderTable">
                <b-table sticky-header=true id="tableSpaceCometInfoCloseApproach" borderless hover :items="allCometDetails._closeApproach" :fields="fields" dark="true" responsive=true></b-table>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "CloseApproach",
        props: {
            cometId: String
        },
        components: {},
        methods: {
            ...mapActions(["getCometDetails"]),
        },
        computed:
            mapGetters(["allCometDetails"]),
        data() {
            return {
                kmh:"'<sup>km/h</sup>'",
                fields: [
                    {key:'_closeApproachDate',sortable: true,label:'Close Approach Date'},
                    {key:'_relativeVelocity',sortable: true,label:'Relative Velocity km/h'},
                    {key:'_missDistance',sortable: true,label:'Miss Distance km'},
                    {key:'_orbitingBody',sortable: true},
                ],
            }
        },

    }
</script>

<style>

    .imageDivSpaceCometInfoCloseApproach {
        margin-left: 100px;
    }

    .titleDivSpaceCometInfoCloseApproach {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 8px;
        align-self: self-end;
    }

    .contentDivSpaceCometInfoCloseApproach {
        margin-top: 50px !important;
        margin-left: 45px !important;
    }

    #tableSpaceCometInfoCloseApproach {
        color: #E2E2E2 !important;
        background-color: #181818 !important;
    }

    .bg-b-table-default {
        background-color: #181818 !important;
    }

    #divContainerTableSpaceCometInfoCloseApproach {
        margin-top: 25px;
    }
</style>