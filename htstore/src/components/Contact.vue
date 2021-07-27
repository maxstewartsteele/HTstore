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
    <div class = "email">
        Contact us at: hiddentricycleband@gmail.com
    </div>
    <Links/>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue"
import Links from "../components/Links.vue"
export default {
  name: 'Conatact',
  components: {
    Navigation,
    Links,
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
.email {
    font-family: "Montserrat", sans-serif;
    font-size: 18pt;
    color: rgb(58, 56, 56);
}


</style>