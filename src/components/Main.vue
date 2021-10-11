<template>
    <main class="Main">
        <!-- hero -->
        <section class="hero">
            <div class="wrapper">
                <h2>Brand New Arrivals</h2>
                <div class="hero__subtitle">
                    New collection from New York
                </div>
                <div class="hero__btn">
                    <a href="#" class="btn btn--md btn--border">View All</a>
                    <a href="#" class="btn btn--md btn--border">Lookbook</a>
                </div>
            </div>
        </section>
        <!-- /hero -->
    </main>
</template>

<script>
export default {
    name:"Main"
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common';

.Main {
    padding-top: 11.4rem;
}

.hero {
    color: $cbWhite;
    height: 40.625rem;
    @include flex--x-C;
    @include bgImg('../assets/img/home1_slide_three_bg_2.jpg');

    .wrapper {
        text-align: center;

        & > * {
            margin-bottom: $gutter--md;
        }
    }

    h2 {
        text-transform: capitalize;
    }

    .hero__subtitle {
        text-transform: uppercase;
        font-size: $txt--md;
    }

    .hero__btn {
        @include flex--C-C;
    }
}
</style>