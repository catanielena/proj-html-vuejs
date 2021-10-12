<template>
    <div class="carousel">
        <div class="carousel__prev">
            <button class="btn arrow" @click="prev()" >
                <i class="fas fa-chevron-left"></i>
            </button>
        </div>
        <div class="carousel__slider">
            <div class="slider__img" v-for="prod in selection.slice(min, max)" :key="`${prod.id}`">
                <img :src="require(`../assets/img/${prod.id}-400x520.jpg`)" :alt="prod.id">
            </div>
        </div>
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
                this.min = 0;
                this.max = 5;
            } else {
                this.min--;
                this.max--;
            }
        }        
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

        img {
            width: 100%;
        }
    }

    .arrow {
        color: $cbWhite;
        background-color: $grey-300;
        padding: $gutter--md $gutter;
    }
}
</style>