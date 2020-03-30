<template>
    <div>
        <div>
            <b-row class="contentDivISSCrew">
                <b-img class="imageDivISSCrew"
                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/crew.png"
                       height="40" width="40" alt="iss crew icon"></b-img>
                <p class="titleDivISSCrew">Crew</p>
            </b-row>
        </div>

        <div>
            <table align="center" class="borderTable">
                <tr >
                    <td v-for="member in allMembers"
                        :key="member.name">
<!--                        <p :href="`https://google.com/search?q=${member.name}`">{{ member.name }}</p>-->
<!--                        <router-link :to="`https://google.com/search?q=${member.name}`"><p>{{ member.name }}</p></router-link>-->
                        <a :href="`https://google.com/search?q=${member.name}`">{{ member.name }}</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: "Crew",
        methods: {
            ...mapActions(["getMembers"]),
        },
        computed:
            mapGetters(["allMembers"]),
        created() {
            this.getMembers();
        }
    }
</script>

<style scoped>
    td {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    .imageDivISSCrew {
        margin-left: 100px;
    }

    .titleDivISSCrew {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 4px;
        align-self: self-end;
    }

    .contentDivISSCrew {
        margin-top: 50px !important;
        margin-left: 300px !important;
    }
</style>