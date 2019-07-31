<template>
    <v-container fluid class="indigo lighten-5">
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
                lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
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