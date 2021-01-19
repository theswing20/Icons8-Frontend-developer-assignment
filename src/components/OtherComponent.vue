<template>
    <div class="other-component">
        <div class="other-component__title">OtherComponent</div>

        <slot>

        </slot>
    </div>
</template>

<script>
    export default {
        name: 'OtherComponent'
    }
</script>

<style scoped>
    .other-component__title {
        margin: 10px 0;
    }
</style>