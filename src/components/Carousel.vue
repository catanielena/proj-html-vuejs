<template>
    <div class="carousel">
        <div class="carousel__prev">
            <button class="btn arrow" @click="prev()" >
                <i class="fas fa-chevron-left"></i>
            </button>
        </div>
        <carousel class="carousel__slider" v-bind:autoplay="true" v-bind:loop="true">
            <slide class="slider__img" v-for="prod in selection.slice(min, max)" :key="`${prod.id}`">
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
            </slide>
        </carousel>
        <div class="carousel__next"> 
            <button class="btn arrow" @click="next()">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Carousel",
    props: {
        selection: Array
    },
    data() {
        return {           
            min: 0,
            max: 5
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

<style lang="scss" scoped>
@import '../assets/style/common';

.carousel {
    display: flex;
    align-items: center;

    .carousel__slider {
        display: flex;
        flex-grow: 1;
        overflow: hidden;
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

    .arrow {
        color: $cbWhite;
        background-color: $grey-300;
        padding: $gutter--md $gutter;
    }
}

</style>