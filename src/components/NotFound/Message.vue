<template>
    <div class="divError container-fluid">
        <p class="Error404">404</p><br>
        <h4>You got beyond our limit!</h4>
        <h4>But here is a fun fact:</h4>
        <h4>The universe is expanding on a 72 km/s rate.</h4>
    </div>
</template>

<script>
    export default {
        name: "Message"
    }
</script>

<style scoped>
    .Error404 {
        font-size: 150px;
    }

    .divError {
        text-align: center;
        margin: 0 auto;
    }
</style>