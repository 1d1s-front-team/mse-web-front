<template>
    <div class="main_container">
        <label id="img-label" for="img"><i class="far fa-image"></i></label>
        <input id="img" type="file" ref="img" multiple="multiple" accept="image/*" @change="uploadImage()">
        <div class="img-preview">
            <span v-for="url in imagesUrl" :key="url"><img :src="url" alt=""></span>
        </div>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        <!-- <img v-for="i in images" :key="i.id" alt=""> -->
    </div>
</template>

<script>
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/base64uploadadapter'
let ClassicEditor
// let Base64UploadAdapter
if (process.browser) {
    // Base64UploadAdapter = require('@ckeditor/ckeditor5-upload/src/base64uploadadapter')
    ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
}
export default {
    name: 'BoardWrite',
    data() {
        return {
            images: '',
            imagesUrl: [],
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // toolbar: []
                plugins: [ Base64UploadAdapter ]
            },
        }
    },
    methods: {
        uploadImage() {
            this.images = this.$refs.img.files

            let formData = new FormData()

            for(var i=0; i < this.images.length; i++) {
                let image = this.images[i]
                formData.append('images', image)
            }
            console.log(formData)
            this.$axios.$post('/api/board/images', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(res => {
                console.log('SUCCESS!!')
                const { url } = res
                this.imagesUrl = url
                console.log(url)
            })
            .catch(err => {
                console.error(err)
            })
        }
    }
}
</script>

<style>
textarea#content {
    width: 100%;
    border: 1px solid gray;
}
label#img-label {
    cursor: pointer;
    font-size: 2em;
}
input#img {
    display: none;
}
.img-preview img {
    width: 20%
}
</style>
