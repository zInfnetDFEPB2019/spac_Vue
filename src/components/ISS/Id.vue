<template>
    <div>
        <div>
            <b-row class="contentDivISSId">
                <b-img class="imageDivISSId"
                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/hashtag.png"
                       height="40" width="40" alt="hashtag icon"></b-img>
                <p class="titleDivISSId">ID</p>
        </b-row>
        </div>

        <div>
            <table align="center">
                <tr>
                    <td>
                        <b-img src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/satellite_id.png"
                               height="50" width="50" alt="satellite id icon"></b-img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Satellite Number</p>
                        <p>25544</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Id",
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

    .imageDivISSId {
        margin-left: 100px;
    }

    .titleDivISSId {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left !important;
        font-size: 20px;
        margin-left: 20px;
        margin-top: 4px;
        align-self: self-end;
    }

    .contentDivISSId {
        margin-top: 50px !important;
        margin-left: 300px !important;
    }
</style>