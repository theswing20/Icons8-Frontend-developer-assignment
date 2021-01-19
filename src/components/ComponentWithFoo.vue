<template>
    <div class="component-with-foo">
        <div class="component-with-foo__title">ComponentWithFoo</div>

        <BasicButton class="component-with-foo__button" @click.native="childsSearch()">{{ imageIsActive ? 'Hide image' : 'Show image' }}</BasicButton>

        <transition name="component-fade">
            <img v-if="imageIsActive" class="component-with-foo__img" src="https://icons8.com/vue-static/landings/page-index/products/preview/upscaler.png" alt="Icon8 image">
        </transition>
        
        <div class="component-with-foo__slot">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BasicButton from './basicComponents/BasicButton'

    export default {
        name: 'parent',

        components: {
            BasicButton
        },

        data() {
            return {
                imageIsActive: false
            }
        },

        methods: {
            recursiveSearch(arr) {
                let result = []

                arr.$children.forEach(item => {
                    result.push(item)

                    if (item.$children.length) {
                        const children = this.recursiveSearch(item)

                        children.forEach(item => {
                            if (typeof item === "object") {
                                result.push(item)
                            }
                        })
                    }
                })

                return result
            },

            filter(element) {
                return element.filter(item => {
                    return item.$options.name === 'parent'
                })
            },

            childsSearch() {
                this.foo(0)

                const childs = this.recursiveSearch(this)
                const childs2 = this.filter(childs)

                if (childs2.length) {
                    childs2.map((child, index) => {
                        child.foo(++index)
                    })
                }
            },

            foo(num) {
                this.imageIsActive = !this.imageIsActive
                console.log(`ComponentWithFoo - ${num}`)
            }
        },
    }
</script>

<style scoped>
    @import "../assets/css/transition.css";

    .component-with-foo {
        display: flex;
        flex-direction: column;
        justify-content: center;

        text-align: center;
    }

    .component-with-foo__title {
        font-size: 16px;

        margin: 0 0 20px 0;
    }

    .component-with-foo__button {
        margin: 0 0 14px 0;
    }

    .component-with-foo__img {
        width: 400px;

        margin: 0 auto;
    }

    .component-with-foo__slot {
        margin: 0 0 20px 0;
    }

</style>