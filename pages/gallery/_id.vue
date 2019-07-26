<template>
    <v-app>
        <p>Hello Vue!</p>
        <p>{{ id }}</p>
    </v-app>
</template>

<script>
    export default {
        name: "_id.vue",
        validate ({ params }) {
            // Must be a number
            console.log(params);
            return /^\d+$/.test(params.id)
        },
        data () {
            return {
                id: this.$route.params.id
            }
        },
    }
</script>

<style scoped>

</style>