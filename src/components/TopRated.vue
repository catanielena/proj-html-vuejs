<template>
    <div class="top-rated">
        <h5>Top Rated</h5>
        <ul class="category__list">
            <li v-for="(n,index) in 3" :key="`featured--${getProdByRated()[index].id}`">
                <SmallProdCard :prod="getProdByRated()[index]" :rev="false" :dark="dark"/>
            </li>
        </ul>
    </div>
    
</template>

<script>
import SmallProdCard from './SmallProdCard.vue';


export default {
    name: "TopRated",
    props: {
        selection: Array,
        dark: Boolean
    },
    components: {
        SmallProdCard
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
            return this.selection.filter((e) => this.rateAverage(e) == 5 && e.reviews.length > 0).sort((a,b) => a.reviews.length - b.reviews.length).reverse();
        },
    }
}
</script>

<style scoped lang="scss">

</style>