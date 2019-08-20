<template>
    <v-container>
        <h1>Successfully signed in :)</h1>
        <p>{{ data }}</p>
    </v-container>
</template>

<script>
    export default {
        name: "signin_success",

        data () {
            return {
                data: this.$route.params.res,
            }
        }
    }
</script>

<style scoped>

</style>