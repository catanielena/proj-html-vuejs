<template>
    <div class="post">
        <a class="post__img" :href="url">
            <img :src="image" :alt="title">
        </a>
        <div class="post__head">
            <h4>{{title}}</h4>
            <div class="head__info text--xs">
                {{date}} | {{commentNumb}} comments
            </div>
        </div>
        <p class="text--sm">{{txt}}</p>
    </div>
</template>

<script>
export default {
    name:"PostPreview",
    props: {
        image: String,
        title: String,
        date: String,
        commentNumb: Number,
        txt: String,
        url: String
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common';

.post {

    .post__img {
        height: 14.375rem;
        width: 100%;
        overflow: hidden;
    }
    img {
        @include objFit--C-T;
        transition: transform .5s;

        &:hover {
            transform: scale(1.1);
        }
    }

    .post__head {
        margin: $gutter--md 0;
    }

    .head__info {
        margin-top: $gutter;
    }
}
</style>