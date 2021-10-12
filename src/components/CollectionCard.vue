<template>
    <div class="collection-card">
        <div class="collection-car__img">
            <img :src="image" :alt="title">
        </div>
        <div class="collection-car__text">
            <h3>{{title}}</h3>
            <h5>{{Subtitle}}</h5>
            <a :href="link" class="btn btn--sm btn--border">View More</a>  
        </div>      
    </div>
</template>

<script>
export default {
    name:"CollectionCard",
    props: {
        image: String,
        title: String,
        Subtitle: String,
        link: String
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common';


.collection-card {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .collection-car__text>* {
        margin-bottom: $gutter--md;

        &:last-child {
            margin-bottom: $gutter--lg;
        }
    }

    .collection-car__img {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
    }

    img {
        @include objFit--C-T;
    }
    
}
</style>