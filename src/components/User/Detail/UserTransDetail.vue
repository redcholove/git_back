<template>
    <div class="Div">
        
        <!-- search div -->
        <el-input v-model="input" class="Search_Bar" placeholder="Input..." prefix-icon="el-icon-search"></el-input>
        <el-button type="primary" class="Search_Button">Search</el-button>

        <!-- table -->
        <el-table
            :data="Tras_Table"
            style="width: 100%">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="Transaction ID:">
                        <span>{{ props.row.tras_id }}</span>
                    </el-form-item>
                    <el-form-item label="Buyer/Seller:">
                        <span>{{ props.row.buy_or_sale }}</span>
                    </el-form-item>
                    <el-form-item label="Time:">
                        <span>{{ props.row.confirm_time_billing_time }}</span>
                    </el-form-item>
                    <el-form-item label="Recurring/Installment:">
                        <span>{{ props.row.num_of_installments }}</span>
                    </el-form-item>
                    <el-form-item label="Total:">
                        <span>{{ props.row.total_price }}</span>
                    </el-form-item>
                    <el-form-item label="Status:">
                        <span>{{ props.row.status }}</span>
                    </el-form-item>
                    <el-form-item>
                         <el-button size="mini" type="primary" plain @click="Hello" icon="el-icon-more"></el-button>
                    </el-form-item>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
                label="Transaction ID"
                prop="tras_id">
                </el-table-column>
                <el-table-column
                label="Seller User ID"
                prop="seller_id">
                </el-table-column>
                <el-table-column
                label="Buyer User ID"
                prop="buyer_id">
                </el-table-column>
                <el-table-column
                label="Total Price"
                prop="total_price">
                </el-table-column>
            </el-table>
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
                </el-pagination>
        </div>

        <!-- detail dialog -->
        <el-dialog
            :visible.sync="centerDialogVisible"
            width="90%"
            center>
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
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">Yes</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'UserTransDetail',
        created() {
            for ( var i = 0; i <= 20; i++ ) {
                var temp_data = {
                    tras_id: parseInt(3000000*Math.random()),
                    seller_id: '30948',
                    buyer_id: '24009',
                    product_name: 'Mac Pro',
                    bill_offer_type: '',
                    insto_plus: '',
                    coupon_code: '',
                    currency: '',
                    total_price: parseInt(5000*Math.random()),
                    down_payment: '',
                    num_of_installments: 'Installment',
                    period: '',
                    confirm_time_billing_time: '2018-01-03 11:05:28',
                    status: 'Payment Fail',
                    user_data: '',
                    buy_or_sale: 'buyer',
                }
                this.Tras_Table.push(temp_data)
            }
        },
        data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                centerDialogVisible: false,
                input: '',
                Tras_Table: [
                ]
            }
        },
        methods: {
            Hello() {
                this.centerDialogVisible = true
            },
            handleSizeChange(val) {
                console.log(` ${val} per Page`);
            },
            handleCurrentChange(val) {
                console.log(`Now Page: ${val}`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .Div {
        background-color: white;
    }
    ul {
        list-style:none;
        li {
            font-size: 1.5em;
            margin-top: 2%;
        }
    }
    .Div {
        text-align: center;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 1%;
    }
    .demo-table-expand {
        font-size: 0;
    }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .Search_Bar {
      width: 20%;
      float: left;
  }
  .Search_Button {
      margin-left: 5%;
      width: 20%;
      float: left;
  }
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
              font-size: 1em;
              height: 40px;
            }
          }
        }
      }
    }
  }
</style>