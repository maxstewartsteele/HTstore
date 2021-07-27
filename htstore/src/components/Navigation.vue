<template>
    <header class="main_h">
        <div class="row">
            <!-- <a class="logo" href>P/F</a> -->
            <img class = "logo" src="../assets/icon2.png" alt="icon2">
            <nav>
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/music">Music</router-link></li>
                    <li><router-link to="/store">Store</router-link></li>
                    <li><router-link to="/contact">Contact Us</router-link></li>
                </ul>
            </nav>
        </div> 
        

    </header>
</template>
<script>
import $ from 'jquery'


export default {
    name: 'Naviagtion',
    components: {
    
    },
    mounted(){
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $('.main_h').addClass('sticky');
            } else {
                $('.main_h').removeClass('sticky');
            }
        });
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_h {
  position: fixed;
  top: 0px;
  max-height: 8.5vh;
  z-index: 999;
  width: 100%;
  padding-top: 17px;
  background: none;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  opacity: .5; 
  /* top: -100px;  */
  padding-bottom: 6px;
  font-family: "Montserrat", sans-serif;
}

.open-nav {
  max-height: 400px !important;
}

.sticky {
  background-color: rgba(255, 255, 255, 0.93);
  opacity: 1;
  top: 0px;
  border-bottom: 1px solid gainsboro;
}

.logo {
  width: 5vh;
  font-size: 25px;
  color: #8f8f8f;
  text-transform: uppercase;
  float: left;
  display: block;
  margin-top: 0;
  line-height: 1;
  /* margin-bottom: 10px; */
}


nav {
  float: right;
  width: 60%;
}
nav ul {
  list-style: none;
  overflow: hidden;
  text-align: right;
  float: right;
}

nav ul li {
  display: inline-block;
  margin-left: 35px;
  line-height: 1.5;
}

nav ul a {
  color: #888888;
  text-transform: uppercase;
  font-size: 14px;
}


.row {
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  position: relative;
  padding: 0 2%;
}

* {
  box-sizing: border-box;
}
    
</style>