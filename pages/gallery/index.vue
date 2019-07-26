<template>
    <v-app>
        <p>This is where the gallery contents are located</p>

        <v-data-table
                :headers="headers"
                :items="gallery"
                :items-per-page="10"
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <tr @click="viewGalleryPost(props.item.id)">
                    <td>{{ props.item.id }}</td>
                    <td class="text-xs-right">{{ props.item.title }}</td>
                    <td class="text-xs-right">{{ props.item.hits }}</td>
                    <td class="text-xs-right">{{ props.item.date }}</td>
                    <td class="text-xs-right">{{ props.item.student_id }}</td>
                </tr>
            </template>
        </v-data-table>
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
                headers: [
                    {
                        text: 'ID',
                        align: 'center',
                        sortable: true,
                        value: 'id',
                    },
                    { text: 'TITLE', value: 'title' },
                    { text: 'HITS', value: 'hits' },
                    { text: 'DATE', value: 'date' },
                    { text: 'STUDENT ID', value: 'student_id' },
                ],
            }
        },
        async asyncData({ $axios }) {
            const gallery = await $axios.$get('/api/gallery')
            console.log(gallery)
            return { gallery }
        },
        methods : {
            viewGalleryPost: function (id) {
                console.log(id);
                this.$router.push({ name: 'gallery-id', params: { id }});
                // location.reload();
            },
        }
    }
</script>