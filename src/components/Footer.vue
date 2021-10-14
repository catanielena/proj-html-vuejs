<template>
    <footer>
        <!-- footer-top -->
        <div class="footer-top">
            <div class="wrapper">
                <div class="footer-top__brand">
                        <div class="brand__logo">
                            <img src="../assets/img/classic_shop_logo_footer.png" alt="classic_shop_logo">
                        </div>
                        <ul class="brand__list">
                            <li class="list__item">12345 North Main Street,</li>
                            <li class="list__item">New York, NY 555555</li>
                            <li class="list__item">Phone: 1.800.555.6789</li>
                            <li class="list__item">Email: info@company.com</li>
                            <li class="list__item">Web: Theme-fusion.com</li>
                        </ul>  
                        <Social/>          
                </div>
                <div class="footer-top__last-info">
                    <div class="last-info__rated">
                        <h6>Top rated</h6>
                        <ul class="rated__list">
                            <li v-for="(n,index) in 3" :key="`featured--${getProdByRated()[index].id}`">
                                <SmallProdCard :prod="getProdByRated()[index]" :rev="false" :dark="true"/>
                            </li>
                        </ul>
                    </div> 
                    <div class="last-info__posts">
                        <h6>Recent posts</h6>
                        <ul class="posts__list">
                            <li v-for="(post, i) in blog" :key="`post_${i}`"><i class="fas fa-chevron-right"></i>{{post.title}}</li>
                        </ul>                        
                    </div>   
                    <div class="last-info__tags">
                        <h6>Tags</h6>
                        <ul class="tags__list">
                            <li v-for="(tag, i) in tags" :key="`tag_${i}`"><a href="#" class="btn">{{tag}}</a></li>
                        </ul>                        
                    </div>                 
                </div>
            </div>
        </div>
        <!-- footer-top -->
        <div class="footer-bottom">
            <div class="wrapper">
                <ul class="bottom__list">
                    <li>© Copyright 2012 - 2021</li>
                    <li>Avada Theme by Theme Fusion</li>
                    <li>All Rights Reserved</li>
                    <li>Powered by WordPress</li>
                </ul>
                <div class="payment__img">
                    <img src="../assets/img/payment_cards_footer.png" alt="">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Social from './Social.vue';
import SmallProdCard from './SmallProdCard.vue';

export default {
    name:"Footer",
    components: {
        Social,
        SmallProdCard
    },
    props: {
        products: Array,
        tags: Array,
        blog: Array
    },
    methods: {
        rateAverage: function(n) {
            let average = 0;
            n.reviews.forEach(elm => {
                average += elm.rate         
            });
            return Math.ceil(average / parseInt(n.reviews.length))
        },
        getProdByRated() {
            return this.products.filter((e) => this.rateAverage(e) == 5 && e.reviews.length > 0);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common';

footer {
    color:  $grey-500;

    .footer-top {
        background-color: $dark--100;
        padding: $sectionMargin--sm 0;

        .wrapper {
            display: flex;
            justify-content: space-between;
        }

        .footer-top__brand {
            flex-shrink: 0;
            .brand__logo {
                max-width: 15rem;

                img {
                    width: 100%;
                }
            }

            .list__item {
                font-size: $txt--xs;
                margin-bottom: $gutter;
                color: #fff;
            }

            &>* {
                margin-bottom: $gutter--lg;
            }
        }

        .footer-top__last-info {
            display: flex;       
            width: 100%;
            justify-content: flex-end;

            &>* {
                margin-left: 2.5rem;
            }

            h6 {
                margin-bottom: 2.5rem;
            }
        }

        .last-info__rated {
            width: 25rem;
        }

        .posts__list {
            li {
                border-bottom: $borderDark;
                padding: $gutter--md 0 ;
                font-size: $txt--sm;
                cursor: pointer;

                &:hover {
                    color: $cbWhite;
                }
            }

            i {
                margin-right: $gutter--sm;
                font-size: $txt--xs;

            }
        }

        .last-info__tags {
            width: 30%;
        }

        .tags__list {
            cursor: pointer;
            @include inlineList;
            flex-wrap: wrap;
            
            a {
                color: white;
                border: $borderDark;
                padding: $gutter;
                margin: 0 $gutter--sm $gutter--sm 0;
                font-size: $txt--sm;
                transition: $bgTransition;

                &:hover {
                    background-color: $cbHavelockBlue;
                }
            }
        }

    }

    .footer-bottom {
        background-color: $dark;
        padding: $gutter--lg 0;

        .wrapper {
            text-align: center;
            font-size: $txt--xs;
        }

        .bottom__list {
            @include inlineList;
            justify-content: center;
            margin-bottom: $gutter--md;

            li:not(:last-child)::after{
                content: '|';
                margin: 0 $gutter--md;
            }
        }
    }
}
</style>