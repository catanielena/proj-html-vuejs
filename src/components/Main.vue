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
                            <button class="btn btn--lg btn--filled" :class="{active: category.active}" @click="filterFeatured(i),getProd(category.name)">{{category.name}}</button>
                        </li>
                    </ul>
                </div>
                <div class="featured-prod__prod">                    
                    <ul class="prod__list">
                        <li class="list__item" v-for="prod in productsFiltered" :key="prod.id">
                            <div class="item__img">
                                <img :src="require(`../assets/img/${prod.id}-400x520.jpg`)" :alt="prod.id">
                                <div class="img__hover">
                                    <i class="fas fa-check circle"></i>
                                </div>
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
                <CollectionCard
                    :image="require('../assets/img/winter_collection_bg.jpg')"
                    :title="'Winter Collection'"
                    :subtitle="'Stilish and warm'"
                    :link="'#'"
                />
            </div>
            <div class="collection__season">
                <CollectionCard
                    :image="require('../assets/img/spring_collection_bg.jpg')"
                    :title="'Spring Collection'"
                    :subtitle="'Bright and colorful'"
                    :link="'#'"
                />
            </div>
            <div class="collection__season">
                <CollectionCard
                    :image="require('../assets/img/autumn_collection_bg.jpg')"
                    :title="'Autumn Collection'"
                    :subtitle="'Rich and comfortable'"
                    :link="'#'"
                />
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
        <!-- promo -->
        <section class="promo-adv banner">
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
        </section>
        <!-- /promo -->
        <!-- /new-arrivals -->
        <section class="new-arrivals">
                <SectionHeader :title="'New Arrivals'" :subtitle="'Must have products from our top designers'"/>
                <Carousel :selection="getNewArrivals()"/>       
        </section>
        <!-- /new-arrivals -->    
        <!-- testimonials -->
        <section class="testimonials banner">
            <div class="wrapper">
                <transition name="fade">
                    <div class="testimonials__item" v-if="testimonialMan">
                        <img src="../assets/img/man_testimonial.png" alt="man_testimonial">
                        <p class="item__comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis alias quas nihil ratione eius. Quis alias mollitia sed, praesentium nesciunt assumenda eaque voluptas? Maiores dignissimos atque, consequuntur temporibus unde necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="item__author">
                            <span class="author__name">Dar&iacute;o Pineda</span>, Theme Fusion
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="testimonials__item" v-if="testimonialWoman">
                        <img src="../assets/img/woman_testimonial.png" alt="woman_testimonial">
                        <p class="item__comment">Proin blandit metus vel magna dignissim varius. Morbi enim lorem, sollicitudin vitae ante nec, rutrum venenatis neque. In mi augue, iaculis nec dui ac, condimentum consequat velit. Ut et metus justo.</p>
                        <div class="item__author">
                            <span class="author__name">Alexandra Gonz&aacute;lez</span>, Theme Fusion
                        </div>
                    </div>
                </transition>
                <div class="testimonials--btn">
                    <button type="button" class="btn" @click="testimonialMan = true, testimonialWoman = false">
                        <i :class="testimonialMan ? 'fas fa-circle' : 'far fa-circle'"></i>
                    </button>  
                    <button type="button" class="btn" @click="testimonialMan = false, testimonialWoman = true">
                        <i :class="testimonialWoman ? 'fas fa-circle' : 'far fa-circle'"></i>
                    </button>                                      
                </div>

            </div>
        </section>
        <!-- /testimonials -->
        <!-- blog -->
        <section class="blog">
                <SectionHeader :title="'From our blog'" :subtitle="'The latest Classic Shop news'"/>
                <div class="wrapper">
                    <div class="blog__post" v-for="(n, index) in 3" :key="index">
                        <PostPreview
                            :image="require(`../assets/img/post_img_${blog[index].id}-700x441.jpg`)"
                            :title="`${blog[index].title}`"
                            :date="`${blog[index].date}`"
                            :commentNumb="`${blog[index].comments.length}`"
                            :txt="`${blog[index].postPreview}`"
                            :url="`${blog[index].url}`"
                        />
                    </div>
                </div>
        </section>
        <!-- /blog -->
        <!-- prod-news -->
        <section class="prod-news">
            <div class="wrapper">
                <div class="prod-news__category">
                    <Featured :selection="products" :dark="false"/>
                </div>
                <div class="prod-news__category">
                    <OnSale :selection="products" :dark="false"/>
                </div>
                <div class="prod-news__category">
                    <TopRated :selection="products" :dark="false"/>
                </div>
                <div class="prod-news__category">
                    <LatestReviews :selection="products" :dark="false"/>
                </div>

            </div>
        </section>
        <!-- /prod-news -->
        <!-- logos -->
        <section class="logos">
            <div class="wrapper">
                <div class="logos__img" v-for="i in 5" :key="`img_${i}`">
                    <img :src="require(`../assets/img/b_logotype_${i}.png`)" alt="">
                </div>
            </div>
        </section>
        <!-- logos -->
        <!-- subscribe -->
        <section class="subscribe">

            <div class="wrapper">
                <div class="subscribe__item">
                    <div class="circle">
                        <i class="far fa-envelope"></i>
                    </div>
                    <h4>Subscribe now and get special offers</h4>
                </div>
                <div class="subscribe__item">
                    <input type="email" placeholder="Insert your email...">
                    <a class="btn btn--sm btn--filled">send</a>
                </div>
            </div>

        </section>
        <!-- subscribe -->




    </main>
</template>

<script>
import SectionHeader from './SectionHeader.vue';
import Carousel from './Carousel.vue';
import CollectionCard from './CollectionCard.vue';
import AdvCard from './AdvCard.vue';
import PostPreview from './PostPreview.vue';

import TopRated from './TopRated.vue';
import Featured from './Featured.vue';
import LatestReviews from './LatestReviews.vue';
import OnSale from './OnSale.vue';

export default {
    name:"Main",
    components: {
        SectionHeader,
        Carousel,
        CollectionCard,
        AdvCard,
        PostPreview,
        TopRated,
        Featured,
        LatestReviews,
        OnSale
    },
    props: {
        products: Array,
        categories: Array,
        blog: Array
    },
    data() {
        return {
            productsFiltered: [],
            testimonialMan: true,
            testimonialWoman: false,
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
        getNewArrivals() {
            return this.products
                .filter(e => e.newArrivals == true)
        },
        getProdBySale() {
            return this.products.filter((e) => e.salePrice !== null);
        },
    },
    mounted() {
        this.getProd(this.categories[0].name);
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common';

// .Main {
//     padding-top: 11.4rem;
// }

.hero {
    color: $cbWhite;
    height: 100vh;
    @include flex--x-C;
    @include bgImg--Top('../assets/img/home1_slide_three_bg_2.jpg');

    .wrapper {
        text-align: center;
        animation: enter 13s ease-in-out;

        &>* {
            margin-top: $gutter--lg;

        }
    }

    h2 {
        text-transform: capitalize;
        margin-bottom: $gutter--md;
    }

    .hero__subtitle {
        text-transform: uppercase;
        font-size: $txt--lg;
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
        border: $border--300;
    }

    .filters-list__item {

        .btn.active {
            background-color: $cbWhite;
        }

        &:not(:last-child,:first-child) {
            border-left: $border--300;
            border-right: $border--300;
        }
    }

    .featured-prod__prod {
        .filters-list {
            @include inlineList;
        }

        .list__item {
            width: calc(25% - $gutter);
            animation: linearOpacity 15s;

            &:not(:first-child) {
                margin-left: $gutter;
            }
            &:last-child {
                margin-right: auto;
            }

            .item__img {
                position: relative;
                overflow: hidden;
                
                .img__hover {
                    @include flex--C-C;
                    @include gradientBg;
                    font-size: $txt--lg;
                    position: absolute;
                    top: 100%;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: top .5s, opacity .5s ease-in;
                    i {
                        color: $cbWhite;
                    }
                }                    
                &:hover {
                    .img__hover {
                        top: 0;
                        opacity: 1;
                    } 
                }
                }
            }

            img {
                width: 100%;
                display: block
            }
        }
        
        .prod__list {
            @include inlineList;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: $gutter--md;

            .item__list>* {
                margin-top: $gutter;
            }
        }
    }

.collection {
    color: $cbWhite;
    display: flex;
    text-align: center;

    .collection__season {
        flex-grow: 1;
    }
}

.best-seller,
.new-arrivals{
    margin: $sectionMargin 0;
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

.testimonials {
    padding: $sectionMargin 0;
    color: $cbWhite;
    text-align: center;
    @include bgImg--Center('../assets/img/testimonials_home_1_bg.jpg');

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        height: 100%;
    }

    .testimonials__item {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > * {
            margin-bottom: $gutter--md;
        }
        .item__comment {
            font-style: italic;
        }

        .author__name {
            font-weight: 700;
        }

    }

    .btn {
        color: $cbWhite;
    }
}

.blog {
    padding: $sectionMargin 0;
    border-bottom: $border2;
    .wrapper {
        @include flex--SB-C;
    }

    .blog__post {
        width: calc(100% / 3 - $gutter--md);
    }
}

.prod-news {
    padding: $sectionMargin--sm 0;
    .wrapper {
        display: flex;
        justify-content: space-between;
    }

    .prod-news__category {
        width: calc(25% - 2.5rem);
    }

    h5 {
        margin-bottom: 2.5rem;
    }
}

.logos {
    padding: $sectionMargin--sm 0;
    background-color: $grey-800;

    .wrapper {
        @include flex--SB-C;
    }

    .logos__img {
        width: calc(20% - $gutter--xl);

        img {
            width: 100%;
        }
    }
}

.subscribe {
    padding: $sectionMargin--sm 0;
    background-color: $dark--300;

    .wrapper {
        @include flex--SB-C;
    }

    .subscribe__item {
        display: flex;
        align-items: center;
        color: $cbWhite;

        &>* {
            margin: 0 $gutter;
        }
    }

    h4, i {
        font-size: 2rem;
    }
}
</style>