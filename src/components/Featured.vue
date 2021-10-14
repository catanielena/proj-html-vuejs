<template>
    <div class="top-rated">
        <h5>Featured</h5>
        <ul class="category__list">
            <li v-for="(n,index) in 3" :key="`featured--${getProdByFeatured()[index].id}`">
                <SmallProdCard :prod="getProdByFeatured()[index]" :rev="false" :dark="dark"/>
            </li>
        </ul>
    </div>
    
</template>

<script>
import SmallProdCard from './SmallProdCard.vue';


export default {
    name: "Featured",
    props: {
        selection: Array,
        dark: Boolean
    },
    components: {
        SmallProdCard
    },
    methods: {
        getProdByFeatured() {
            return this.selection.filter((e) => e.featured == true);
        },
    }
}
</script>

<style scoped lang="scss">

</style>