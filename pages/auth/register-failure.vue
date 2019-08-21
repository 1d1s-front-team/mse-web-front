<template>
    <v-container>
        <h1>Sign Up Failure :(</h1>
        <p>reason: {{ error }}</p>
    </v-container>
</template>

<script>
    export default {
        name: "register-failure",

        data () {
            return {
                error: this.$route.params.err,
            }
        }
    }
</script>

<style scoped>

</style>