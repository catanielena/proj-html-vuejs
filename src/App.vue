<template>
  <div id="app">
    <Header :mainNav="mainNav"/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      mainNav: [
        {
          title: "Home",
          active: true,
          categories: []
        },
        {
          title: "Shop",
          active: false,
          categories: []
        },
        {
          title: "Products",
          active: false,
          categories: []
        },
        {
          title: "News",
          active: false,
          categories: []
        },  
        {
          title: "Elements",
          active: false,
          categories: []
        }      
      ],
      tags: ['Black', 'boots', 'Brown', 'Casual', 'D&G', 'Fabric', 'flowers', 'Grey', 'hot', 'Hipster', 'lines', 'multi-purpose', 'New York', 'Outdoors', 'red', 'responsive', 'summer', 'sweater', 'Travel', 'Warm', 'White', 'winter'],
      recentPosts: [
        {
          title: 'Aenean loborotis sapien enim viverra',
          url: "#",
        },
        {
          title: 'Duis ac massa semper maximus',
          url: "#",
        },
        {
          title: 'Nunc ferminint nulla eu justo sem id',
          url: "#",
        },
        {
          title: 'Aliquam posuere magna eget nibh',
          url: "#",
        },
        {
          title: 'Cras ac nulla ac consecte sutrum',
          url: "#",
        },
        {
          title: 'Fusce mattis nuns ut aliquam',
          url: "#",
        },
      ],
      data: [
        {
          name: 'Black Jacket',
          price: 125,
          salePrice: null,
          reviews: [],
          featured: true,
          id: 'black_leather_jacket',
          category: 'women',
          tag: ['Women', 'Jackets']
        },
        {
          name: 'Black Leader Jacket',
          price: 235,
          salePrice: 200,
          reviews: [
            {
              rate: 5,
              author: 'admin',
              date: '11/10/21'
            },
            {
              rate: 5,
              author: 'flower',
              date: '08/09/21'
            }
          ],
          featured: true,
          id: 'black_elegant_leather_jacket',
          category: 'men',
          tag: ['Men', 'Jackets']
        },
        {
          name: 'Hipster Black Top',
          price: 57,
          salePrice: null,
          reviews: [],
          featured: true,
          id: 'hipster_black_top',
          category: 'women',
          tag: ['Women', 'Top']
        },
        {
          name: 'Blue Leather Jacket',
          price: 80,
          salePrice: 60,
          reviews: [],
          featured: false,
          id: 'blue_leather_jacket',
          category: 'men',
          tag: ['Men', 'Jackets', 'Suits']
        },
        {
          name: 'Modern Leather Boots',
          price: 50,
          salePrice: 30,
          reviews: [],
          featured: false,
          id: 'brown_dress_shoes',
          category: 'accesories',
          tag: ['Accesories', 'Boots']
        },
        {
          name: 'Leather Gloves',
          price: 45,
          salePrice: null,
          reviews: [
            {
              rate: 5,
              author: 'BeardMan',
              date: '10/10/21'
            },
            {
              rate: 5,
              author: 'SpaceX',
              date: '21/09/21'
            },
            {
              rate: 5,
              author: 'Donuts',
              date: '01/10/21'
            }
          ],
          featured: false,
          id: 'leather_gloves',
          category: 'accesories',
          tag: ['Accesories', 'Gloves']
        },
        {
          name: 'Spring Printed Dress',
          price: 47,
          salePrice: null,
          reviews: [
            {
              rate: 5,
              author: 'admin',
              date: '09/10/21'
            }
          ],
          featured: false,
          id: 'brown_dress_shoes',
          category: 'women',
          tag: ['Women', 'Dress']
        },
        {
          name: 'Black Leather Suit',
          price: 176,
          salePrice: null,
          reviews: [],
          featured: true,
          id: 'black_leather_suit',
          category: 'men',
          tag: ['Men', 'Jackets']
        }, 
        {
          name: 'Modern Black Leather Suit',
          price: 176,
          salePrice: null,
          reviews: [],
          featured: true,
          id: 'black_leather_suit',
          category: 'men',
          tag: ['Men', 'Jackets']
        },     
        {
          name: 'Blue Jacket & Strippe Tee',
          price: 580,
          salePrice: null,
          reviews: [],
          featured: true,
          id: 'black_leather_suit',
          category: 'men',
          tag: ['Men', 'Jackets', 'Suits']
        },
        {
          name: 'Modern Love Tee',
          price: 25,
          salePrice: null,
          reviews: [],
          featured: false,
          id: 'modern_love_tee',
          category: 'women',
          tag: ['Women', 'Tee']
        }         
      ],
      products: []
    }
  },
  created() {
    this.products = this.data.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
  }
}
</script>

<style lang="scss">
@import './assets/style/common';

</style>
