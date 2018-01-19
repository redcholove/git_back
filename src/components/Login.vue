<template>
  <div class="background">
    <div class="LeftLogo">
    </div>
    
    <div class="RightLogo">
      <img class="LogoImg" :src="LogoImg">
      <input class="Input" placeholder="Account...">
      <input type="password" class="Input" placeholder="Password">
      <button class="Button" @click="Login">Login</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    created() {

    },
    data () {
      return {
        LeftFirstLine: 'BackStage Management',
        LogoImg: require('../assets/image/User.png'),
        Account: '',
        Password: '',
      }
    },
    methods: {
      Login() {
        var toServer = {
          account: this.Account,
          password: this.Password
        }
        console.log( toServer )
        this.$router.push('/Home')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .LeftLogo {
    float: left;
    height: 50vh;
    margin-top: 25vh;
    margin-left: 5vw;
    width: 58vw;
    background: url('../assets/image/Login.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .RightLogo {
    float: right;;
    height: 50vh;
    margin-top: 25vh;
    margin-right: 5vw;
    width: 32vw;
    background-color: white;
    text-align: center;
    border-radius: 20px;
    .LogoImg {
      width: 60%;
    }
    .Input {
      width: 60%;
      margin-top: 5%;
      height: 13%;
      border-radius: 20px;
      border: #D0D0D0 1px solid;
      padding-left: 20px;
      padding-right: 20px;
      font-size: 25px;
    }
    .Button {
      width: 68%;
      margin-top: 5%;
      height: 13%;
      background-color: #46A3FF;
      border-radius: 20px;
      color: white;
      border: #D0D0D0 0.5px solid;
      font-size: 25px;
    }
  }
  .background {
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: #46A3FF;
  }
  .LeftImg {
    height: 40%;
    width: 40%;
    background-color: red;
  }
</style>