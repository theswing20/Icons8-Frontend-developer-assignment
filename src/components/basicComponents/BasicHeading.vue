<template>
    <div class="basic-heading">
        <BasicGradient class="basic-heading__gradient"/>
        <div class="basic-heading__title">{{ title }}</div>
    </div>
</template>

<script>
    import BasicGradient from './BasicGradient'

    export default {
        props: {
            title: {
                type: String,
                default: "",
                required: true
            }
        },

        components: {BasicGradient}
    }
</script>

<style scoped>
    .basic-heading {
        position: relative;

        display: flex;
        justify-content: center;

        margin: 100px 0 120px 0;
    }

    .basic-heading__title {
        width: 400px;

        font-size: 34px;
        font-weight: bold;
        line-height: 46px;
        text-align: center;
    }

    .basic-heading__gradient {
        position: absolute;
        top: -340px;
        z-index: -1;

        width: 600px;
    }
</style>