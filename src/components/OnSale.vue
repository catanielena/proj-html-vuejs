<template>
    <div class="top-rated">
        <h5>On sale</h5>
        <ul class="category__list">
            <li v-for="(n,index) in 3" :key="`sale--${getProdBySale()[index].id}`">
                <SmallProdCard :prod="getProdBySale()[index]" :rev="false" :dark="false"/>
            </li>
        </ul>
    </div>
    
</template>

<script>
import SmallProdCard from './SmallProdCard.vue';


export default {
    name: "OnSale",
    props: {
        selection: Array,
        dark: Boolean
    },
    components: {
        SmallProdCard
    },
    methods: {
        getProdBySale() {
            return this.selection.filter((e) => e.salePrice !== null);
        },
    }
}
</script>

<style scoped lang="scss">

</style>