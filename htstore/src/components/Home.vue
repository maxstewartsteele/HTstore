<template>
  <div id = "app">
    <link href='https://fonts.googleapis.com/css?family=Montserrat|Cardo' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <Navigation/>
    <div class="heading">
        <!-- <h1><span>Hidden Tricycle</span><br>Seattle, WA</h1> -->
        <img class = "fitimg" src="../assets/paperCover.png" alt="HT banner">
      </div>
    
    <div class = "contact">
        <div v-if="formComplete===false" class = "missingfield">
            <sui-message>
                <sui-message-header color="red">Error</sui-message-header>
                    <p>
                        Please fill out all required fields.
                    </p>
            </sui-message>
        </div>
        <div class = "formcard">
            <div class = "email">
                Sign up for our email list
            </div>
            <sui-form>
                <sui-form-field required>
                    <label class = "formlabel">Email</label>
                    <input v-model="userEmail" placeholder="Email" />
                </sui-form-field>
                <sui-form-field>
                    <label class = "formlabel">First Name</label>
                    <input v-model="userFirst" placeholder="First Name" />
                </sui-form-field>
                <sui-form-field>
                    <label class = "formlabel">Last Name</label>
                    <input v-model="userLast" placeholder="Last Name" />
                </sui-form-field>
                <sui-form-field>
                    <label class = "formlabel">City</label>
                    <input placeholder="City/State" />
                </sui-form-field>
                <sui-form-field required>
                    <sui-checkbox v-model ="userCheck" class = "formlabel" label="I agree to recieve emails" />
                </sui-form-field>
                <br>
                <sui-button class = "formlabel" type="submit" @click ="onFormSubmission()">Submit</sui-button>
            </sui-form>
        </div>
        <Links/>
    </div>
  </div>
</template>



<script>
// import $ from 'jquery'
import Navigation from "../components/Navigation.vue"
import Links from "../components/Links.vue"


export default {
    name: 'Home',
    components: {
        Navigation,
        Links,
    },
    mounted(){
    },
    data() {
        return { 
            formComplete: true,
            userEmail: "",
            userFirst: "",
            userLast: "",
            userCheck: false,           
            

        }
    },
    methods: {
        onFormSubmission(){
            if(this.userEmail === "" || this.userCheck == false){
                this.formComplete = false;
            } else {
                this.formComplete = true;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  color: #8f8f8f;
  background: white;
  font-family: "Cardo", serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}

h1 {
  font-size: 30px;
  line-height: 1.8;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
}

p {
  margin-bottom: 20px;
  font-size: 17px;
  line-height: 2;
}

.content {
  padding: 50px 2% 250px;
}

.heading {
  position: relative;
  background: url(../assets/headerv3.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  text-align: center;
  color: #fff;
  padding-top: 110px;
  min-height: 100vh;
  width: 100vw;
}

.contact{
    margin-top: 150px;
}

.formcard {
    font-family: "Montserrat", sans-serif;
    margin: auto;
    width: 60%;
}
.formlabel {
    font-family: "Montserrat", sans-serif;
    float: left;
}
.email {
    font-size: 1.75em;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    float: left;
    margin-bottom: 30px
}
.missingfield {
    width: 60%;
    margin: auto;
    margin-top: 0px;
    margin-bottom: 30px;
    text-align: left;
}    
.buttonleft{
    float: left;
}
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
.fitimg {
    width: 80vw;
}
</style>
