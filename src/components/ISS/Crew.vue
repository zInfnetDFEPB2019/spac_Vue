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
            <table align="center">
                <tr>
                    <td>
                        <p>Andrew Morgan</p>
                        <p>Oleg Skripochka</p>
                        <p>Jessica Meir</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Crew",
        components: {},
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