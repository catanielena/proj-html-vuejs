<template>
  <div id="app">
    <Header :mainNav="mainNav"/>
    <Main :products="products" :categories="categories" :blog="blog"/>    
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
      data: [
        {
          name: 'Black Jacket',
          price: 125,
          salePrice: null,
          reviews: [],
          featured: true,
          bestSeller: true,
          newArrivals: true,
          id: 'black_leather_jacket',
          category: 'women',
          tag: ['Women', 'Jackets'],
          url: '#'
        },
        {
          name: 'Black Leader Jacket',
          price: 235,
          salePrice: 200,
          reviews: [
            {
              rate: 5,
              author: 'admin',
              date: new Date('11/10/21')
            },
            {
              rate: 5,
              author: 'flower',
              date: new Date('08/09/21')
            }
          ],
          featured: true,
          bestSeller: true,
          newArrivals: true,
          id: 'black_elegant_leather_jacket',
          category: 'men',
          tag: ['Men', 'Jackets'],
          url: '#'
        },
        {
          name: 'Hipster Black Top',
          price: 57,
          salePrice: null,
          reviews: [],
          featured: true,
          bestSeller: true,
          newArrivals: true,
          id: 'hipster_black_top',
          category: 'women',
          tag: ['Women', 'Top'],
          url: '#'
        },
        {
          name: 'Blue Leather Jacket',
          price: 80,
          salePrice: 60,
          reviews: [],
          featured: false,
          bestSeller: false,
          newArrivals: true,
          id: 'blue_leather_jacket',
          category: 'men',
          tag: ['Men', 'Jackets', 'Suits'],
          url: '#'
        },
        {
          name: 'Modern Leather Boots',
          price: 50,
          salePrice: 30,
          reviews: [],
          featured: true,
          id: 'brown_dress_shoes',
          bestSeller: false,
          newArrivals: false,
          category: 'accessories',
          tag: ['Accesories', 'Boots'],
          url: '#'
        },
        {
          name: 'Leather Gloves',
          price: 45,
          salePrice: null,
          reviews: [
            {
              rate: 5,
              author: 'BeardMan',
              date: new Date('10/10/21')
            },
            {
              rate: 5,
              author: 'SpaceX',
              date: new Date('21/09/21')
            },
            {
              rate: 5,
              author: 'Donuts',
              date: new Date('01/10/21')
            }
          ],
          featured: true,
          bestSeller: false,
          newArrivals: false,
          id: 'leather_gloves',
          category: 'accessories',
          tag: ['Accesories', 'Gloves'],
          url: '#'
        },
        {
          name: 'Spring Printed Dress',
          price: 47,
          salePrice: null,
          reviews: [
            {
              rate: 5,
              author: 'admin',
              date: new Date('09/10/21')
            }
          ],
          featured: false,
          bestSeller: true,
          newArrivals: true,
          id: 'spring_printed_dress',
          category: 'women',
          tag: ['Women', 'Dress'],
          url: '#'
        },
        {
          name: 'Black Leather Suit',
          price: 176,
          salePrice: null,
          reviews: [],
          featured: true,
          id: 'black_leather_suit',
          bestSeller: false,
          newArrivals: true,
          category: 'men',
          tag: ['Men', 'Jackets'],
          url: '#'
        }, 
        {
          name: 'Modern Black Leather Suit',
          price: 176,
          salePrice: null,
          reviews: [],
          featured: true,
          bestSeller: false,
          newArrivals: false,
          id: 'modern_black_leather_suit',
          category: 'men',
          tag: ['Men', 'Jackets'],
          url: '#'
        },     
        {
          name: 'Blue Jacket & Strippe Tee',
          price: 580,
          salePrice: null,
          reviews: [],
          featured: true,
          bestSeller: true,
          newArrivals: false,
          id: 'blue_jacket_and_white_stripe_tee',
          category: 'men',
          tag: ['Men', 'Jackets', 'Suits'],
          url: '#'
        },
        {
          name: 'Modern Love Tee',
          price: 25,
          salePrice: null,
          reviews: [],
          featured: false,
          bestSeller: true,
          newArrivals: true,
          id: 'modern_love_tee',
          category: 'women',
          tag: ['Women', 'Tee'],
          url: '#'
        }         
      ],
      products: [],
      categories: [
        {
          name: 'men',
          active: true
        },
        {
          name: 'women',
          active: false
        },
        {
          name: 'accessories',
          active: false
        }
      ],
      blog: [
        {
          title: 'Aenean lobortis sapien enim viverra',
          date: 'September 9th, 2015',
          comments: [],
          postPreview: 'Donec eris felix multos numerabis amicos tempora si fuerint nubila solus eris',
          url: "#",
          id: 12
        },
        {
          title: 'Nunc ferminint nulla eu justo sem id',
          date: 'September 9th, 2015',
          comments: [],
          postPreview: 'Donec eris felix multos numerabis amicos tempora si fuerint nubila solus eris',
          url: "#",
          id: 11
        },
        {
          title: 'Aenean lobortis sapien enim viverra',
          date: 'September 9th, 2015',
          comments: [],
          postPreview: 'Donec eris felix multos numerabis amicos tempora si fuerint nubila solus eris',
          url: "#",
          id: 10
        },
        {
          title: 'Cras ac nulla ac consecte sutrum',
          date: 'September 9th, 2015',
          comments: [],
          postPreview: 'Donec eris felix multos numerabis amicos tempora si fuerint nubila solus eris',
          url: "#",
          id: 9
        },
        {
          title: 'Fusce mattis nuns ut aliquam',
          date: 'September 9th, 2015',
          comments: [],
          postPreview: 'Donec eris felix multos numerabis amicos tempora si fuerint nubila solus eris',
          url: "#",
          id: 8
        }
      ]
    }
  },
  created() {
    this.products = this.data.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    let c = [];
    this.products.forEach(e => {
        if(c.includes(e.category) == false) {
            c.push(e.category)
        }
    });
  }
}
</script>

<style lang="scss">
@import './assets/style/common';

</style>
