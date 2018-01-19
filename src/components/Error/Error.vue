<template>
    <div>
        <img v-bind:src="img">
    </div>
</template>

<script>
    export default {
        name: 'Error',
        created() {
    
        },
        data() {
            return {
                img: require('../../assets/image/Error.png')
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    img {
        width: 100%;
    }
</style>