<template>
  <el-container class="container">

    <el-aside class="aside" width="15vw">
      <el-menu router
        class="el-menu-vertical-demo">
        <el-menu-item v-for="(item,i) in NavMenu" :key="i" :index="i + ''" :route="item.route" class="nav_menu">
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    
    <el-container>      
      <el-header height="10vh">
        <img :src="LogoImg" class="Logo">
        <el-dropdown @command="handleCommand" class="Drop">
          <span class="el-dropdown-link">
            {{User}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="Logout">LogOut</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main style="background-color: white;">
        <router-view></router-view>
      </el-main>
    
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        LogoImg: require('../assets/image/Ins.to.png'),
        User: 'UserName',
        NavMenu: [
          {
            key: 1,
            title: 'User',
            route: '/home/user'
          },
          {
            key: 2,
            title: 'Transaction',
            route: '/home/transaction'
          },
          {
            key: 3,
            title: 'Else',
            route: '/home'
          },
        ],
      }
    },
    methods: {
      handleCommand(command) {
        this.$message( command );
        this.$router.push('/')
      },
      goUser() {
        this.$router.push({ name: 'User'})
      },
      goTrans() {
        this.$router.push({ name: 'Transaction'})
      },
      goElse() {
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    width: 100%;
    .el-aside {
      padding-top: 10vh;
      background-color: white;
      color: #333;
      border-right: 1px solid #d0d0d0;
      .nav_menu {
        font-size: 25px;
      }
    }
    .el-header{
      background-color: white;
      border-bottom: 1px solid #d0d0d0;
      color: #333;
      // text-align: center;
      line-height: 10vh;
      .Logo {
        height: 100%;
      }
      .Drop {
        float: right;
        color: #46A3FF;
        font-family: serif;
        font-weight: 600;
        font-size: 25px;
      }
    }
    .el-main {
      background-color: white;
      color: #333;
      // text-align: center;
      // line-height: 90vh;
    }
  }

  @media only screen and (max-width: 760px) {
    .container {
      height: 100vh;
      width: 100%;
      .el-aside {
        padding-top: 10vh;
        background-color: red;
        color: #333;
        border-right: 1px solid #d0d0d0;
        .nav_menu {
          font-size: 10px;
        }
      }
      .el-header{
        background-color: white;
        border-bottom: 1px solid #d0d0d0;
        color: #333;
        // text-align: center;
        line-height: 10vh;
        .Logo {
          height: 100%;
        }
        .Drop {
          float: right;
          color: #46A3FF;
          font-family: serif;
          font-weight: 600;
          font-size: 25px;
        }
      }
      .el-main {
        background-color: white;
        color: #333;
        // text-align: center;
        // line-height: 90vh;
      }
    }
  }
</style>
