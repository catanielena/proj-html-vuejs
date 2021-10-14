<template>
    <div class="carousel">
        <div class="carousel__slider">
            <VueSlickCarousel v-bind="settings">
                <div v-for="prod in selection" :key="`${prod.id}`" class="slider__img">
                        <img :src="require(`../assets/img/${prod.id}-400x520.jpg`)" :alt="prod.id">
                        <div class="img__hover">
                            <ul class="hover__list">
                                <li><h4>{{prod.name}}</h4></li>
                                <li class="text--sm">{{commaList(prod.tag)}}</li>
                                <li class="price">${{prod.price}}</li>
                            </ul>
                            <div class="hover__btn">
                                <a href="#" class="btn text--xs"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                                <a href="#" class="btn text--xs"><i class="fas fa-list-ul"></i> Details</a>
                            </div>
                        </div>
                </div>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name:"Carousel",
    props: {
        selection: Array
    },
    components: { VueSlickCarousel },
    data() {
        return {           
            min: 0,
            max: 5,
            settings: {
                "arrows": true,
                "infinite": true,
                "slidesToShow": 5,
                "slidesToScroll": 1,
                "autoplay": true,
                "speed": 1400,
                "autoplaySpeed": 1400,
                "cssEase": "ease-in-out", 
                "pauseOnHover": true     
            }
        }
    },
    methods: {
        next() {
            if(this.max >= this.selection.length) {
                this.min = 0;
                this.max = 5;
            } else {
                this.min++;
                this.max++;
            }
            console.log(this.selection.length)
        },
        prev() {
            if(this.min <= 0) {
                this.min = this.selection.length - 5;
                this.max = this.selection.length;
            } else {
                this.min--;
                this.max--;
            }
        },
        commaList(arr) {
            return arr.join(', ')
        },     
    }
}
</script>
<style lang="scss">
@import '../assets/style/common';
.carousel__slider {
    padding: 0;
}
.slick-slider.slick-initialized {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.slick-prev:before, .slick-next:before {
    color: $cbWhite;
    background-color: $grey-300;
    padding: $gutter--md $gutter;
    font-family: "Font Awesome 5 Free";
    display: inline-block;
}
button.slick-prev, button.slick-next {
    position: inherit;
    top: inherit;
    display: inline-block;
    width: inherit;
    height: inherit;
}
button.slick-next {
    right: 0;
}
button.slick-prev {
    left: 0;
}
button.slick-prev:before {
    font-weight: 900;
    content: "\f053";
    font-family: "Font Awesome 5 Free";
}

button.slick-next:before {
    font-weight: 900;
    content: "\f054";
    font-family: "Font Awesome 5 Free";
}
</style>
<style lang="scss" scoped>
@import '../assets/style/common';

.carousel {
    display: flex;
    align-items: center;

    .carousel__slider {
        // display: flex;
        // flex-grow: 1;
        // overflow: hidden;
        margin: auto;
        padding: 20px;
        width: 100%;
    }

    .slider__img {
        width: 20%;
        flex-shrink: 0;
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
        }
                
        .img__hover {
            @include flex--C-C;
            @include gradientBg;
            position: absolute;
            flex-direction: column;
            top: 100%;
            width: 100%;
            height: 100%;
            padding: 2rem;
            color: $cbWhite;
            font-size: $txt--lg;

            opacity: 0;
            transition: top .5s, opacity .5s ease-in;

            .hover__list {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;

                li {
                    text-align: center;
                    width: 100%;
                    margin-bottom: $gutter;
                }

                .price {
                    font-size: .8em;
                }
            }

            .hover__btn {
                // margin-top: auto;
                display: flex;
                justify-content: space-between;
                width: 100%;
                font-weight: 600;
            }

            a {
                color: $cbWhite;
                margin: 0;
                padding: 0;
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

</style>