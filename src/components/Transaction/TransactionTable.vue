<template>
  <div>
    <div class="search_div">
        <el-input v-model="search_input" v-on:keyup.enter.native="Search" class="search_input" placeholder="Search..."></el-input>
        <el-button type="primary" plain icon="el-icon-search" @click="Search">Search</el-button>
    </div>
    <el-table
      :data="Tras_Table"
      stripe
      border
      class="table">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item>
              <el-button type="primary" plain size="mini" @click="GoDetail(props.row.tras_id)">Detail</el-button>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="TransID"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.tras_id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="UserID"
        width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>TransID: {{ scope.row.tras_id }}</p>
          <p>SellerID: {{ scope.row.seller_id }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.seller_id }}</el-tag>
          </div>
        </el-popover>
      </template>
      </el-table-column>
      <el-table-column label="BuyllerID">
        <template slot-scope="scope">
          {{ scope.row.buyer_id }}
        </template>
      </el-table-column>
      <el-table-column label="Product Name">
        <template slot-scope="scope">
          {{ scope.row.product_name }}
        </template>
      </el-table-column>
      <el-table-column label="Total Price">
        <template slot-scope="scope">
          {{ scope.row.total_price }}
        </template>
      </el-table-column>
      <el-table-column label="Refund">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="warning" plain
            @click="handleEdit(scope.$index, scope.row)">Refund</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Cancel">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Cancel</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'Transaction',
    created() {
      for ( var i = 0; i <= 20; i++ ) {
        var temp_data = {
            tras_id: parseInt(3000000*Math.random()),
            seller_id: parseInt(2000*Math.random()),
            buyer_id: parseInt(2000*Math.random()),
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
        search_input: '',
        Tras_Table: [],
      }
    },
    methods: {
      GoDetail(tras_id) {
        console.log('hello')
        this.$router.push({
            name: 'TransactionDetail',
            params: {
                id: tras_id
            }
        })
      },
      Search() {

      },
      handleEdit(index, row) {
        console.log(index, row);
        this.$confirm('確定取消訂單嗎？', 'title', {
                    confirmButtonText: 'yes',
                    cancelButtonText: 'cancel',
                    type: 'warning'
                    }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Delete Success!'
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Cancel Request!'
                    });          
                    });
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('確定刪除訂單嗎？', 'title', {
                    confirmButtonText: 'yes',
                    cancelButtonText: 'cancel',
                    type: 'warning'
                    }).then(() => {
                    this.$message({
                        type: 'success',
                        message: 'Delete Success!'
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Cancel Request!'
                    });          
                    });
      },

    }
  }
</script>

<style lang="scss" scoped>
  .search_div {
      height: 5vh;
  }
    
  .search_input {
      width: 15vw;
  }

  .table {
        width: 100%; 
        height: 75vh;
        overflow-y: scroll;
    }
</style>
    