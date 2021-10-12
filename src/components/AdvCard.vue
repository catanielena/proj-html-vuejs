<template>
    <div class="adv-card" :style="{backgroundImage: `url(${bg})`}">
        <h3>{{title}}</h3>
        <p>{{txt}}at</p>
        <a :href="link" class="btn btn--sm btn--border">View More</a>
    </div>   
</template>

<script>
export default {
    name:"AdvCard",
    props: {
        title: String,
        txt: String,
        link: String,
        bg: String
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common';


.adv-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: $gutter--lg;
    height: 100%;
    width: 100%;
    color: $cbWhite;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    & > * {
        margin: 0 auto $gutter--md 0;
    }
}
</style>