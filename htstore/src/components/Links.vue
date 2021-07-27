<template>
  <div id = "app">
    <link href='https://fonts.googleapis.com/css?family=Montserrat|Cardo' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class = "icons">
        <a href="https://www.youtube.com/channel/UCZ6J5rDot3y47Lt9ymyB8uA" target="_blank" class="fa fa-youtube"></a>
        <a href="https://open.spotify.com/artist/3mC2X8wZn00cPQH5rnjI3W" target="_blank" class="fa fa-spotify"></a>
        <a href="#" class="fa fa-soundcloud"></a>
        <a href="https://music.apple.com/ca/artist/hidden-tricycle/1504143742" target="_blank" class="fa fa-apple"></a>
        <a href="https://twitter.com/HTricycle" target="_blank" class="fa fa-twitter"></a>
        <a href="https://www.instagram.com/hiddentricycle/" target="_blank" class="fa fa-instagram"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links',
  components: {
    },
}
</script>

<style scoped>
.icons{
    margin-top:40px;
}
.fa {
  padding: 20px;
  font-size: 45px;
  width: 80px;
  text-align: center;
  text-decoration: none;
  color: rgb(58, 56, 56);
  background: white;
}
.fa:hover {
  opacity: 0.7;
}
</style>