<template>
    <div class="main_container">
        <div class="top">
            <div class="title">Board</div>
            <div class="category">
                <a 
                    v-for="(category) in categories" :key="category"
                    @click.prevent="setCategory(category)"
                    :class= "{'active': currentCate == category}">
                        {{ category }}
                </a>
            </div>
        </div>
        <div class="middle">
            <div v-if="loadingBoards">로딩중</div>
            <div class="content" v-if="boards.length && !loadingBoards">
                <v-card
                    class="lists mx-auto"
                    v-for="b in boards" :key="b.id"
                    @click="view(b.id)"
                    tile>
                        <div class="list-title">{{b.title}}</div>
                        <div class="list-description">
                            <span><i class="fas fa-user"></i> {{ b.student_id }} |</span>
                            <span><i class="far fa-eye"></i> {{ b.hit }} |</span>
                            <span><i class="far fa-calendar"></i> {{ getDate(b.date) }} |</span>
                        </div>
                </v-card>
            </div>
            <div v-show="!boards.length && !loadingBoards" class="no-result">
                <v-card class="mx-auto" tile>
                    글 목록이 없습니다.
                </v-card>
            </div>
        </div>
        <div>
            <nuxt-link class="btn write" to="/board/write"><i class="fas fa-pencil-alt"></i>  글쓰기</nuxt-link>
        </div>

        <div class="bottom">
            <v-pagination class="pagination" v-if="boards.length" v-model="page" :length="totalPage"></v-pagination>
        </div>
    </div>
        <!-- <p>test: {{ board_example.title }}</p> -->
</template>

<script>
    export default {
        data () {
            return {
                boards: [],
                categories: ['전체보기', '스터디', '수업'],
                currentCate: '전체보기',
                page: 1,
                totalPage: 1,
                loadingBoards: true,
            }
        },
        methods: {
            setCategory(cate) {
                let c = '';
                switch (cate) {
                    case '전체보기': c ='all'; break;
                    case '스터디': c = 'study'; break;
                    case '수업' : c ='class'; break;
                }
                this.currentCate = cate;
                this.loadBoards(c);
            },
            async loadBoards(cate) {
                this.loadingBoards = true;
                try{
                    let url = `api/board/category/${cate}`
                    if(cate === 'all') url = 'api/board'

                    const result = await this.$axios.$get(url)
                    
                    this.boards = result;
                    this.totalPage = Math.ceil(result.length/10)
                    this.loadingBoards = false
                } catch (err) {
                    console.error(err);
                }
            },
            getDate(d) {
                return d.split('T')[0].replace(/-/gi,'.')
            },
            view(id){
                this.$router.push(`/board/${id}`)
            }
        },
        created () {
            this.loadBoards('all')
        }
    }
</script>

<style>

.top {
    height: 50px;
    margin-bottom: 30px;
    padding: 10px 20px;
    vertical-align: middle;
    background-color: white;
}
.middle {
    margin-bottom: 20px;
}
.title{
    float: left;
}
.category {
    display: block;
    float: right;
}
.category a {
    margin-right: 5px;
}
.category a.active{
    font-weight: bold;
}
.lists {
    width: 100%;
    padding: 10px 20px;
    cursor: pointer;
}
.lists:hover {
    background-color: lightblue;
    transition: .3s;
}
.lists:hover .list-title{
    font-weight: bold;
    transition: .3s;
}
.lists .list-title {
    font-size: 18px;
}
.lists .list-description {
    margin: 10px 0 0 0;
    font-size: 15px;
    color: gray;
}
.lists .list-description span {
    margin-right: 5px;
    padding-right: 5px;
}
.btn.write {
    width: 100px;
    height: 30px;
    float: right;
    background-color: white;
    border: 2px solid gray;
    border-radius: 3px;
    font-weight: bold;
    text-align: center;
}
.bottom {
    display: table;
    margin: auto;
    margin-top: 30px;
}
</style>
