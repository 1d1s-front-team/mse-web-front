<template>
    <v-app>
        <p>This is where the schedule contents are located</p>
        <p>test: {{ schedule_example.title }}</p>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                schedule_example: {
                    id: 1,
                    title: "this is schedule title",
                    start_date: "2019-07-23",
                    end_date: "2019-12-31"
                },
            }
        }
    }
</script>