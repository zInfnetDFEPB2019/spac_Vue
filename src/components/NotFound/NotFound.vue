<template>
    <div>
        <div id="divMessage">
            <Message/>
        </div>
        <div>
            <Animation/>
        </div>
        <br>
        <router-link to="/">
            <b-button variant="outline-dark">Return
                <b-img id="iconHomeButton"
                       src="https://raw.githubusercontent.com/christianvajgel/spa_c_assets/master/images/home_icon_48px.png"
                       height="24" width="24" alt="Home icon">
                </b-img>
            </b-button>
        </router-link>
    </div>
</template>

<script>
    import Animation from "@/components/NotFound/Animation";
    import Message from "@/components/NotFound/Message";
    export default {
        name: "NotFound",
        components: {Message, Animation}
    }
</script>

<style scoped>
    #iconHomeButton {
        margin-top: -5px;
        margin-left: 5px;
    }

    #divMessage {
        margin-top: 110px !important;
    }
</style>