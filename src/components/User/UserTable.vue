<template>
    <div class="div">
        <div class="search_div">
            <el-input v-model="search_input" v-on:keyup.enter.native="Search" class="search_input" placeholder="Search..."></el-input>
            <el-button type="primary" plain icon="el-icon-search" @click="Search">Search</el-button>
        </div>
        
        <div v-show="!error_show">
            <!-- table -->
            <el-table 
                v-show="table_show" 
                :data="UserTable" 
                class="table"
                stripe 
                highlight-current-row
                border
                >
                <el-table-column type="expand">
                    <div slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="phone:">
                                <span>{{ props.row.phone }}</span>
                            </el-form-item>
                            <el-form-item label="email:">
                                <span>{{ props.row.email }}</span>
                            </el-form-item>
                            <el-form-item label="firstname:">
                                <span>{{ props.row.firstname }}</span>
                            </el-form-item>
                            <el-form-item label="lastname:">
                                <span>{{ props.row.lastname }}</span>
                            </el-form-item>
                            <el-form-item label="nickname:">
                                <span>{{ props.row.nickname }}</span>
                            </el-form-item>
                            <el-form-item label="address:">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="sign up data:">
                                <span>{{ props.row.signup }}</span>
                            </el-form-item>
                            <el-form-item>
                                <el-button size="mini" type="primary" plain @click="ChooseUser( props.row.id )">Profile Page</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-table-column>
                <el-table-column label="User ID" prop="id">
                </el-table-column>
                <el-table-column label="Phone number" prop="phone">
                </el-table-column>
                <el-table-column label="Email" prop="email">
                </el-table-column>
                <el-table-column label="Sign up data" prop="signup">
                </el-table-column>
            </el-table>
            <!-- table -->
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000"
                class="page">
            </el-pagination>
        </div>

        <ErrorPage v-show="error_show" class="error_page"></ErrorPage>
    </div>
</template>

<script>
    import ErrorPage from './../Error/Error.vue'
    export default {
        name: 'UserWrapper',
        created() {
            for ( var i = 0; i < 100; i ++ ) {
                var temp = {
                    id: parseInt(300000*Math.random()),
                    phone: '+886 988 888 888',
                    email: 'user@email.com',
                    signup: '2017-12-30 ',
                    firstname: 'El',
                    lastname: 'Barto',
                    nickname: 'simpson',
                    address: '',
                }
                this.UserTable.push(temp)
            }
        },
        data() {
            return {
                search_input: '',
                UserTable: [],
                table_show: true,
                error_show: false
            }
        },
        components:{
            ErrorPage
        },
        methods: {
            Search() {
                if ( this.search_input.length == 0 ) {
                    return
                }

                var num = Math.floor(Math.random() * 2 + 1);
                if (num == 1) {
                    this.error_show = true
                    var toServer = {
                        data: this.search_input
                    }

                    this.$router.push({
                        name: 'UserProfileWrapper',
                        params: {
                            id: this.search_input
                        }
                    })
                } else {
                    //error status
                    this.error_show = true
                }
            },
            ChooseUser(id) {
                this.$router.push({
                    name: 'UserProfileWrapper',
                    params: {
                        id: id
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .div {
        
    }
    .table {
        width: 100%; 
        height: 75vh;
        overflow-y: scroll;
    }
    .search_div {
        height: 5vh;
    }
    
    .search_input {
        width: 15vw;
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
    
    .page {
        margin-top: 3vh;
    }

    .error_page {
        width: 100%;
        height: 100%;
    }
</style>