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

    <div class = "releases">
      <h1>New Releases!</h1>
      <br>
      <sui-card-group :items-per-row="3">
        <sui-card v-for="newSong in newSongs" v-bind:key="newSong">
          <img @click="onSongClick(newSong)" v-bind:src="newSong.img" v-bind:alt ="newSong.alt"/>
          <sui-card-content>
            <sui-card-header>
              <a class = "link" :href="`${newSong['link']}`" target="_blank">{{newSong["title"]}}</a>
            </sui-card-header>
            <sui-card-meta class = "type">{{newSong["type"]}}</sui-card-meta>
          </sui-card-content>
        </sui-card>
      </sui-card-group>
    </div>

    <div class = 'discog'>
      <h1>Full Discography</h1>
      <br>
      <sui-card-group :items-per-row="2">
        <sui-card class = "display">
          <img  v-bind:src="selectedSong.img " />
          <sui-card-content>
            <sui-card-header>
              <a class = "link" :href="`${selectedSong.link}`" target="_blank">{{selectedSong.title}}</a>
            </sui-card-header>
            <sui-card-meta class = "type">{{selectedSong.type}}</sui-card-meta>
          </sui-card-content>
        </sui-card>

        <sui-card class = "display2">
          <div class = "songlisting" 
            v-for="(song) in Songs" 
            v-bind:key="song">
            <div v-on:click="onSelectionChange(song)"> 
              <img v-bind:src="song.img" v-bind:alt ="song.alt"/>
              <!-- <br> -->
              <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{song.title}} ({{song.release}})&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            </div>
            <!-- <iframe src="https://open.spotify.com/embed/album/7tMmnC3IRW80LFSKkYz7hH?theme=0" width="100%" height="80" frameBorder="0" ></iframe> -->
          </div>
        </sui-card>
      </sui-card-group>
    </div>
    <Links/>
  </div>
</template>


<script>
import Navigation from "../components/Navigation.vue"
import Links from "../components/Links.vue"
export default {
  name: 'Music',
  components: {
    Navigation,
    Links,
  },
  data() {
    return{
      Songs: [
        {
          title : "Fireside",
          img : require("../assets/fireside.png"),
          alt: "Fireside cover",
          link : "https://open.spotify.com/album/7tMmnC3IRW80LFSKkYz7hH",
          type : "Single",
          release: "2021"
        }, 
        {
          title : "Marijuana",
          img : require("../assets/marijuana.png"),
          alt: "Marijuana cover",
          link : "https://open.spotify.com/album/4Tg7CQv9iM9iKGxiCpjV5s",
          type : "Single",
          release: "2021"
        }, 
        {
          title : "SECRETS",
          img : require("../assets/secrets.png"),
          alt : "Secrets cover",
          link : "https://open.spotify.com/album/57H4YTFN2OOp0OPIkKT7u0",
          type : "Album",
          release: "2020"
        },
        {
          title : "COLOR",
          img : require("../assets/color.png"),
          alt : "Color cover",
          link : "https://open.spotify.com/album/656WL8nDYZuGaaSLz0ai8e",
          type : "Single",
          release: "2020"
        },
        {
          title : "Laws of Nature",
          img : require("../assets/lawON.jpg"),
          alt : "Laws of Nature cover",
          link : "https://open.spotify.com/album/06N0u9wtqphGEklQwx91cg",
          type : "Single",
          release: "2020"
        },
        {
          title : "Randy",
          img : require("../assets/randy.jpg"),
          alt : "Secrets cover",
          link : "https://open.spotify.com/album/2vjZwa70gvHvdO5kgkBhIM",
          type : "EP",
          release: "2020"
        },
        {
          title : "After Several Misses",
          img : require("../assets/ASM.jpg"),
          alt : "After Sevral Misses cover",
          link : "https://open.spotify.com/album/0N0eaUEnats9MlSm0PrSCB",
          type : "Album",
          release: "2019"
        },
      ],

      selectedSong: {
        title : "Fireside",
        img : require("../assets/fireside.png"),
        alt: "Fireside cover",
        link : "https://open.spotify.com/artist/3mC2X8wZn00cPQH5rnjI3W",
        type : "Single"
      },

    }
  },
  computed: {
    newSongs(){ return this.Songs.slice(0,3)}
  },
  methods: {
    onSelectionChange(song){
      this.selectedSong.title = song.title;
      this.selectedSong.img = song.img;
      this.selectedSong.alt = song.alt;
      this.selectedSong.link = song.link;
      this.selectedSong.type = song.type;
      //console.log("ehehehehee");
    },
    onSongClick(song){
      window.open(song.link, '_blank');
    }
  }
  
}
</script>


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
.releases {
  width: 60%;
  margin: auto;
  margin-bottom: 70px;
}
.releases h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 32pt;
  color: rgb(58, 56, 56);
}
.releases img{
  height: 38vh;
  width: auto;
  cursor: pointer;
}
.link {
  color: rgb(58, 56, 56);
  font-family: "Montserrat", sans-serif;
}
.link:hover {
  color: rgba(82, 124, 204, 0.795);
}
.type {
  font-family: "Montserrat", sans-serif;
}
.discog {
  width: 60%;
  margin: auto;
  height: 100%;
  /* max-height: 500px; */
}
.discog h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 32pt;
  color: rgb(58, 56, 56);
}
.display{
  overflow-y: hidden;
  width: 100%;
  height: 68vh; 
}
.display img {
  height: 58.5vh;
  width: auto;
}
.display2{
  overflow-y: auto;
  width: 100%;
  height: 68vh;
  
}
.songlisting {
  margin: 5px;
  border: 1px solid rgb(230, 225, 225);
  border-radius: 4px;
  float: left;
  width: 97%;
  margin-bottom: 5px;
  
}
.songlisting img {
  float:left;
  height: 10vh;
  width: auto;
  cursor: pointer;
}
.songlisting h1{
  font-family: "Montserrat", sans-serif;
  font-size: 1.3em;
  margin-top: 3vh;
  margin-left: 0px;
  margin-bottom: 0px;
  float: left;
  cursor: pointer;
}
.songlisting:hover{
  border: 1px solid #777;
}


</style>
