<template>
  <div>
    <link href='https://fonts.googleapis.com/css?family=Montserrat|Cardo' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <Navigation/>
    <div class="heading">
        <!-- <h1><span>Hidden Tricycle</span><br>Seattle, WA</h1> -->
        <img src="../assets/paperCover.png" alt="HT banner" width="400">
        <span></span>
    </div>


    <div class = "shop">
      <h1>Featured Products</h1>

      <div v-for="product in products" v-bind:key="product" class = "card">
        <div
          @mouseover="product.hover = true"
          @mouseleave="product.hover = false"
        >
          <div v-if="product.hover==false">
            <img v-bind:src="product.front" @click ="teeSpringRedirect(product)">
          </div>
          <div v-else>
            <img v-bind:src="product.back" @click ="teeSpringRedirect(product)">
          </div>
        </div>
        <div class = "name"> {{product.name}} </div>
        <div class = "price"> {{product.price}} </div>
      </div>
    </div>
    

    <Links/>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue"
import Links from "../components/Links.vue"
export default {
  name: 'Store',
  components: {
    Navigation,
    Links,
  },
  data() {
    return {

      products: [
        {
          name: "3 Little Men",
          price: "$29.99",
          type: "Sweatshirt",
          link: "https://the-hidden-tricycle-store.creator-spring.com/listing/3-little-men?product=212",
          front: require("../assets/800.jpg" ),
          back: require("../assets/801.jpg" ),
          hover: false
        },
        {
          name: "Hidden Tricycle & Logo",
          price: "$35.99",
          type: "Sweatshirt",
          link: "https://the-hidden-tricycle-store.creator-spring.com/listing/hidden-tricycle-logo?product=1027",
          front: require("../assets/802.jpg" ),
          back: require("../assets/803.jpg" ),
          hover: false
        },
        {
          name: "I Do What I Do",
          price: "$38.99",
          type: "Sweatshirt",
          link: "https://the-hidden-tricycle-store.creator-spring.com/listing/wear-i-do-what-i-do?product=212",
          front: require("../assets/804.jpg" ),
          back: require("../assets/805.jpg" ),
          hover: false
        },
        {
          name: "SECRETS",
          price: "$22.99",
          type: "t-shirt",
          link: "https://the-hidden-tricycle-store.creator-spring.com/listing/secrets-comfort?product=369",
          front: require("../assets/806.jpg" ),
          back: require("../assets/807.jpg" ),
          hover: false
        },
        {
          name: "I Do What I Do",
          price: "$25.99",
          type: "Tank Top",
          link: "https://the-hidden-tricycle-store.creator-spring.com/listing/wear-i-do-what-i-do?product=14",
          front: require("../assets/808.jpg" ),
          back: require("../assets/809.jpg" ),
          hover: false
        },
        {
          name: "Hidden Tricycle & Logo",
          price: "$22.99",
          type: "Womens - T",
          link: "https://the-hidden-tricycle-store.creator-spring.com/listing/hidden-tricycle-logo?product=370",
          front: require("../assets/810.jpg" ),
          back: require("../assets/811.jpg" ),
          hover: false
        },
        {
          name: "Nice Tri",
          price: "$11.99",
          type: "Mask",
          link: "https://the-hidden-tricycle-store.creator-spring.com/listing/nice-tri?product=972",
          front: require("../assets/812.jpg" ),
          back: require("../assets/813.jpg" ),
          hover: false
        },
        {
          name: "Randy",
          price: "$19.99",
          type: "i-phone case",
          link: "https://the-hidden-tricycle-store.creator-spring.com/listing/randy-august-2020?product=633&variation=102593&size=4138",
          front: require("../assets/814.jpg" ),
          back: require("../assets/815.jpg" ),
          hover: false
        },
        {
          name: "Nice Tri",
          price: "$6.99",
          type: "sticker",
          link: "https://the-hidden-tricycle-store.creator-spring.com/listing/nice-tri?product=794",
          front: require("../assets/816.jpg" ),
          back: require("../assets/817.jpg" ),
          hover: false
        },
        
      ]

    };
  },
  methods: {
    teeSpringRedirect(product){
      window.open(product.link, "_blank")
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading {
  position: relative;
  background: url(../assets/headerv3.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  text-align: center;
  width: 100vw;
  height: 25vh;
  color: #fff;
  margin-bottom: 50px;
}

.shop{
  width: 60vw;
  margin: auto;
  height: 150vh;
  
}
.shop h1 {
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
  font-size: 32pt;
  color: rgb(58, 56, 56);
}
.card{
  width: 18vw;
  height: 44vh;
  margin-bottom: 50px;
  margin: 2vh;
  float: left;
  border-style:solid;
  box-shadow: 0px 0px 2px rgb(209, 202, 202);
  border-color: rgba(196, 185, 185, 0.712);
  border-width: 1px;
  border-radius: 5px;
  overflow-y: hidden;
}
.card img{
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  height: 36.5vh;
}
.name{
  font-family: "Montserrat", sans-serif;
  font-weight: 440;
  font-size: 14pt;
  color: rgb(58, 56, 56);
  height: 3vh;
  
}
.price{
  font-family: "Montserrat", sans-serif;
  font-size: 12pt;
  color: rgb(170, 165, 165);
  height: 3vh;
  margin-bottom: 4px;
}
</style>
