<template>
    <carousel :data="data"></carousel>
</template>

<script>
    export default {
        name:"c1",
        data() {
            return {
                data: [
                    '<div class="example-slide"><MarsTemperature/></div>',
                    '<div class="example-slide">Slide 2</div>',
                    '<div class="example-slide">Slide 3</div>',
                ],
            };
        },
    };
</script>

<style>
    .example-slide {
        align-items: center;
        background-color: #666;
        color: #999;
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        min-height: 10rem;
    }
</style>
