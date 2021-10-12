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
        <!-- featured-products -->
        <section class="featured-prod">
            <div class="wrapper">
                <SectionHeader :title="'Featured Products'" :subtitle="'Must have products from our top sellers'"/>
                <div class="featured-prod__filters">
                    <ul class="filters-list">
                        <li class="filters-list__item" v-for="(category, i) in categories" :key="category.name">
                            <button class="btn btn--lg" :class="{active: category.active}" @click="filterFeatured(i),getProd(category.name)">{{category.name}}</button>
                        </li>
                    </ul>
                </div>
                <div class="featured-prod__prod">
                    <ul class="prod__list">
                        <li class="list__item" v-for="prod in productsFiltered" :key="prod.id">
                            <div class="item__img">
                                <img :src="require(`../assets/img/${prod.id}-400x520.jpg`)" :alt="prod.id">
                            </div>
                            <ul class="item__list">
                                <li>
                                    <h4>{{prod.name}}</h4>
                                </li>
                                <li class="item__tag text--sm">{{commaList(prod.tag)}}</li>
                                <li class="item__price">
                                    <span class="sale-price text--sm" v-if="prod.salePrice !== null">${{prod.salePrice}}</span>
                                    <span>${{prod.price}}</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- /featured-products -->
        <!-- collection -->
        <section class="collection banner">
            <div class="collection__season">
                <div class="season__img">
                    <img src="../assets/img/winter_collection_bg.jpg" alt="winter">
                </div>
                <div class="season__text">
                    <h3>Winter Collection</h3>
                    <h5>Stilish and warm</h5>
                    <a href="#" class="btn btn--sm btn--border">View More</a>
                </div>
            </div>
            <div class="collection__season">
                <div class="season__img">
                    <img src="../assets/img/spring_collection_bg.jpg" alt="spring">
                </div>
                <div class="season__text">
                    <h3>Spring Collection</h3>
                    <h5>Bright and colorful</h5>
                    <a href="#" class="btn btn--sm btn--border">View More</a>
                </div>
            </div>
            <div class="collection__season">
                <div class="season__img">
                    <img src="../assets/img/autumn_collection_bg.jpg" alt="autumn">
                </div>
                <div class="season__text">
                    <h3>Autumn Collection</h3>
                    <h5>Rich and comfortable</h5>
                    <a href="#" class="btn btn--sm btn--border">View More</a>
                </div>
            </div>
        </section>
        <!-- /collection -->
        <!-- best-seller -->
        <section class="best-seller">
            <div class="wrapper">
                <SectionHeader :title="'Best Seller'" :subtitle="'Must have products from our top sellers'"/>
                <Carousel :selection="getBestSeller()"/>
            </div>
        </section>
        <!-- /best-seller -->
        <div class="promo-adv banner">
            <div class="wrapper">
                <div class="promo-adv__item">
                    <AdvCard 
                    :title="'70% Off'" 
                    :txt="'Vivamus tempor leo lacus, feugiat ut magna aliquam erat'"
                    :link="'#'"
                    :bg="require('../assets/img/promo_box_1_bg.jpg')"/>                 
                </div>
                <div class="promo-adv__item">
                    <AdvCard 
                    :title="'Free Shipping'" 
                    :txt="'Vivamus tempor leo lacus, feugiat ut magna aliquam erat'"
                    :link="'#'"
                    :bg="require('../assets/img/promo_box_2_bg.jpg')"/>                 
                </div>                
            </div>
        </div>
        
    </main>
</template>

<script>
import SectionHeader from './SectionHeader.vue';
import Carousel from './Carousel.vue';
import AdvCard from './AdvCard.vue';


export default {
    name:"Main",
    components: {
        SectionHeader,
        Carousel,
        AdvCard
    },
    props: {
        products: Array,
        categories: Array
    },
    data() {
        return {
            productsFiltered: []
        }
    },
    methods: {
        filterFeatured(i) {
            this.categories.forEach(e => e.active = false);
            this.categories[i].active = true;
        },
        getProd(c) {
            this.filterCategory = c;
            this.productsFiltered = this.products.filter((e) => e.category.toLowerCase() == c.toLowerCase() && e.featured == true);
            return this.productsFiltered;
        },
        commaList(arr) {
            return arr.join(', ')
        },
        getBestSeller() {
            return this.products
                .filter(e => e.bestSeller == true)
                .reverse()
        },

    },
    mounted() {
        this.getProd(this.categories[0].name)
    }
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
    @include bgImg--Top('../assets/img/home1_slide_three_bg_2.jpg');

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

.featured-prod {
    margin: $sectionMargin 0 12.5rem;
    .featured-prod__filters {
        @include flex--C-C;
    }

    .filters-list {
        @include inlineList;
        border: $border;
    }

    .filters-list__item {
        background-color: $grey-800;

        .btn.active {
            background-color: $cbWhite;
        }
    }

    .featured-prod__prod {
        .filters-list {
            @include inlineList;
        }

        .list__item {
            width: 25%;

            img {
                width: 100%;
            }

            &:last-child {
                margin-right: auto;
            }
        }
        
        .prod__list {
            @include inlineList;
            justify-content: space-between;
            flex-wrap: wrap;

            .item__list>* {
                margin-top: $gutter;
            }
        }

        .sale-price {
            color: $cbHavelockBlue;
            text-decoration: line-through;
            text-decoration-color: $cbShark;
            margin-right: $gutter--sm;
        }
    }

}

.collection {
    color: $cbWhite;
    display: flex;
    text-align: center;

    .collection__season {
        flex-grow: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .season__text>* {
            margin-bottom: $gutter--md;

            &:last-child {
                margin-bottom: $gutter--lg;
            }
        }
    }

    .season__img {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
    }

    img {
        @include objFit--C-T;
    }
}

.best-seller {
    margin: $sectionMargin;
}

.promo-adv {
    @include bgImg--Center('../assets/img/bkgd_confetti-compressor.jpg');
    padding: $bannerPadding 0;
    .wrapper {
        height: 100%;
        @include flex--SB-C;
    }

    .promo-adv__item {
        height: 100%;
        width: calc(50% - $gutter--md);
        background-color: red;
    }

}
</style>