<template>
    <v-container>
        <h1>Successfully signed up :)</h1>
        <p>{{ data }}</p>
    </v-container>
</template>

<script>
    export default {
        name: "register_success",

        data () {
            return {
                data: this.$route.params.result,
            }
        }
    }
</script>

<style scoped>

</style>