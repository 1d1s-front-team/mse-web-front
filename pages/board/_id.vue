<template>
    <div class="main_container">
        제목: {{ title }}
        내용: {{ content }}
        작성일: {{ date }}
        작성자: {{ author }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: '',
            date: '',
            author: '',
        }
    },
    methods: {
        async fetchData() {
            try{
                const b_id = this.$route.path.split('/')[2]
                const result = await this.$axios.$get(`/api/board/${b_id}`)
                console.log(result)
                
                this.title = result[0].title
                this.content = result[0].content
                this.author = result[0].student_id

                const date = result[0].date.split('T')[0].split('-')
                // const time = result[0].date.split('T')[1]
                this.date = `${date[0]}년 ${date[1]}월 ${date[2]}일`
            } catch (err) {
                console.error(err)
            }
        }
    },
    created() {
        this.fetchData()
    }
}
</script>

<style>

</style>
