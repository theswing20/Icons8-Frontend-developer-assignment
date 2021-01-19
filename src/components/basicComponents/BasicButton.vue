<template>
    <button class="basic-button">
        <slot></slot>
    </button>
</template>

<style scoped>
    .basic-button {
        padding: 8px 16px;

        font: 600 14px/20px "Inter";

        border: 1px solid #ebebeb;
        background: #ffffff;
        transition: all .2s ease-out;
        cursor: pointer;
    }
    .basic-button:hover {
        opacity: .8;
    }
</style>