<template>
    <div class="section-header">       
        <div class="title">
            <div class="line"></div>
            <h3>{{title}}</h3>
            <div class="line"></div>
        </div>
        <div class="subtitle">{{subtitle}}</div>
    </div>
</template>

<script>
export default {
    name:"SectionHeader",
    props: {
        title: String,
        subtitle: String
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common';

.section-header {
    text-align: center;
    margin-bottom: $gutter--lg;

    .title {
        @include flex--C-C;
        margin-bottom: $gutter--md;

        h3 {
            position: relative;
            margin: 0 $gutter--lg;
        }

        .line {
            height: .0625rem;
            line-height: 1.875rem;
            background-color: $grey-500;
            flex-grow: 1;
        }

    }
}
</style>