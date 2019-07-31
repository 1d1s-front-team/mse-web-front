<template>
    <v-container fluid>
        <div class="indigo lighten-4">
            <p>This is where the board contents are located</p>
            <p>test: {{ board_example.title }}</p>
        </div>
    </v-container>
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