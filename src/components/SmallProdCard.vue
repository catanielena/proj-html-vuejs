<template>
    <div class="prod__card" :class="dark==true ? 'dark' : 'light'">
        <ul class="card__info">
            <li class="title" >
                <a class="title__link" :href="prod.url">{{prod.name}}</a>
            </li>
            <li class="stars" v-if="prod.reviews.length > 0">
                <span class="stars" v-if="prod.reviews.length > 0">
                    <i class="fas fa-star" v-for="(star,i) in rateAverage()" :key="i"></i>
                </span>
            </li>
            <li class="sale-price" v-show="prod.salePrice !== null && rev == false">
                ${{prod.salePrice}}
            </li>
            <li class="price" :class="latestPrice()" v-if="rev == false">
                ${{prod.price}}
            </li>
            <li class="author" v-if="rev == true">
                by {{prod.reviews[0].author}}
            </li>
        </ul>
        <div class="card__img">
            <img :src="require(`../assets/img/${prod.id}-400x520.jpg`)" :alt="prod.name">
        </div>
    </div>
</template>

<script>

export default {
    name:"SmallProdCard",
    props: {
        prod: Object,
        rev: Boolean,
        dark: Boolean
    },
    methods: {
        rateAverage() {
            let average = 0;
            this.prod.reviews.forEach(e => {
                average += e.rate         
            });
            return Math.ceil(average / parseInt(this.prod.reviews.length))
        },
        latestPrice() {
            return this.prod.salePrice !== null ? 'underline' : null
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common';
.prod__card {
    display: flex;
    padding: 1rem 0;

    &.dark {
        border-bottom: $borderDark;
    }

    &.light {
        border-bottom: $border;
    }

    .card__info {
        flex-grow: 1;


        &>* {
            display: inline-block;
            margin-right: $gutter--sm;
            margin-bottom: $gutter;
        }

        a, li{
            font-size: $txt--sm;
            color: currentColor;
        }

        .title__link {
            transition: color .5s;
    
            &:hover {
                color: $cbHavelockBlue;
            }
        }
        .stars {
            display: block;
            color: $cbHavelockBlue;
        }

        .sale-price {
            font-weight: 500;  
        }

        .price {
            font-weight: 500; 
            
            &.underline {
                text-decoration: underline;
                text-decoration-color: currentColor;
            }          
        }
    }

    .card__img {
        width: 6rem;

        img {
            width: 100%;
        }
    }
}
</style>