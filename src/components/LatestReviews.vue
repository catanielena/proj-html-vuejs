<template>
    <div class="top-rated">
        <h5>Latest Reviews</h5>
        <ul class="category__list">
            <li v-for="(n,index) in 3" :key="`review--${index}`">
                <SmallProdCard :prod="getProdByReview()[index]" :rev="true" :dark="dark"/>
            </li>
        </ul>
    </div>
    
</template>

<script>
import SmallProdCard from './SmallProdCard.vue';


export default {
    name: "LatestReviews",
    props: {
        selection: Array,
        dark: Boolean
    },
    components: {
        SmallProdCard
    },
    methods: {
        getProdByReview() {
            let reviewsCol = [];
            this.selection.forEach((e) => {
                for(let i = 0; i< e.reviews.length; i++) {
                    reviewsCol.push({...e, reviews: [e.reviews[i]]})
                }
            });            
            return reviewsCol.sort((a,b) => a.reviews[0].date - b.reviews[0].date).reverse()
        }
    }
}
</script>

<style scoped lang="scss">

</style>