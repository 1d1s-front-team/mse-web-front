<template>
    <v-container fluid class="indigo lighten-5">
        <nuxt-link to="/gallery">Back to lists</nuxt-link>
        <div class="post">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
        </div>
    </v-container>
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
                id: this.$route.params.id,
            }
        },
        async asyncData ({ $axios, params }) {
            const post = await $axios.$get(`/api/gallery/${params.id}`)
            console.log(post)
            return { post }
        }
    }
</script>

<style scoped>
    .post {
        margin: auto;
        width: 80%;
        background-color: aliceblue;
    }
</style>