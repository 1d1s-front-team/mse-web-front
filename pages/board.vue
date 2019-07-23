<template>
    <v-app>
        <p>This is where the board contents are located</p>
        <p>test: {{ board_example.title }}</p>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                board_example: {
                    id: 1,
                    title: "this is title",
                    date: "2019-07-23 10:29:37",
                    student_id: 32101010,
                    category: "ETC",
                    content: "hi",
                    pin: "0"
                },
            }
        }
    }
</script>