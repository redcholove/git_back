<template>
  <div id="tans_detail">
    <h1>TransID</h1>
    <el-button type="warning" plain>Refund</el-button>
    <el-button type="danger" plain>Cancel</el-button>
    <div class="img"></div>
    <!-- <img src="./../../assets/image/Order.jpg" class="img"> -->
    <p class="Title">Transaction Status</p>
    <el-tag type="success">Success</el-tag>
    <div class="group">
      <div class="single_group">
        <div class="header"></div>
        <div class="body">
          <ul>
            <li>Seller User ID:</li>
            <li>Buyer User ID:</li>
            <li>Bill/Offer Type:</li>
          </ul>
        </div>
      </div>
      <div class="single_group">
        <div class="header"></div>
        <div class="body">
          <ul>
            <li>Down payment:</li>
            <li>Number of installments:</li>
            <li>Period:</li>
          </ul>
        </div>
      </div>
      <div class="single_group">
        <div class="header"></div>
        <div class="body">
          <ul>
            <li>insto + :</li>
            <li>Coupon Code:</li>
            <li>Confirm time:</li>
            <li>Billing Time:</li>
          </ul>
        </div>
      </div>
    </div>
    <table id="customers">
      <tr>
        <th>Trasaction ID:</th>
        <th>Product Name:</th>
        <th>Total Price</th>
        <th>Currency</th>
      </tr>
      <tr>
        <td>30381908309</td>
        <td>Mac Pro</td>
        <td>3000</td>
        <td>TWD</td>
      </tr>
    </table>
  </div>
</template>

<script>
  // Transaction
  export default {
    name: 'TransactionDetail',
    created() {},
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
#customers {
    margin-top: 50px;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: white;
    color: #9D9D9D;
}
  #tans_detail {
    text-align: center;
    .img {
      margin: 0 auto;
      width: 20vw;
      background-size: auto;
      height: 20vw;
      background: url('https://blogs-images.forbes.com/brookecrothers/files/2017/01/macbook-pro-15-side-1200x900.jpg?width=960');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    p {
      font-size: 1em;
    }
    .Title {
      font-size: 1.5em;
      font-weight: 900;
    }
    .group {
      margin-top: 10px;
      height: 20vh;
      width: 100%;
      .single_group {
        border: 1px solid #d0d0d0;
        width: 27%;
        height: 100%;
        float: left;
        margin-left: 5%;
        .header {
          background-color: #F0F0F0;
          height: 20%;
          width: 100%;
        }
        .body {
          background-color: white;
          height: 80%;
          width: 100%;
          ul {
            list-style:none;
            float: left;
            li {
              text-align: left;
              width: 100%;
              height: 40px;
            }
          }
        }
      }
    }
  }
</style>
    