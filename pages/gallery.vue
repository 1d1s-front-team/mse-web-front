<template>
    <v-app>
        <p>This is where the gallery contents are located</p>
        <p>test: {{ gallery_example.title }}</p>
        <!--<p>{{ user }}</p>-->
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                gallery_example: {
                    id: 1,
                    title: "this is gallery title",
                    hits: 100000,
                    date: "2019-07-23 10:29:37",
                    student_id: 32101010,
                    content: "hi"
                },
            }
        },
        // async asyncData({ $axios }) {
        //     const user = await $axios.$get('localhost:8080/api/user')
        //     return { user }
        // }
    }
</script>