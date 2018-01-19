<template>
    <div>
        <!-- profile -->
        <div class="profile_card">
                <div class="top_div">
                    <img v-bind:src="user_default_img" class="profile_img">
                    <div class="header">
                        <p>User ID:  {{user_profile_data.userid}}</p>
                    </div>
                    <el-button type="danger" plain @click="UserRemove">Remove</el-button>
                </div>
                <ul>
                    <li>Region: 
                        <font>
                            {{user_profile_data.region}}
                        </font>
                    </li>
                    <li>FirstName: 
                        <font>
                            {{user_profile_data.firstname}} 
                        </font>
                        <el-button size="mini" type="primary" icon="el-icon-edit" plain class="edit_button" @click="Edit"></el-button>
                    </li>
                    <!-- if region = taiwan -->
                    <li>MiddleName: 
                        <font>
                            {{user_profile_data.lastname}}
                        </font>
                        <el-button size="mini" type="primary" icon="el-icon-edit" plain class="edit_button" @click="Edit"></el-button>
                    </li>
                    <li>LastName: 
                        <font>
                            {{user_profile_data.lastname}} 
                        </font>
                        <el-button size="mini" type="primary" icon="el-icon-edit" plain class="edit_button" @click="Edit"></el-button>
                    </li>
                    <li>Nick Name: 
                        <font>
                            {{user_profile_data.nickname}}  
                        </font>
                        <el-button size="mini" type="primary" icon="el-icon-edit" plain class="edit_button" @click="Edit"></el-button>
                    </li>
                    <li>Phone Number: 
                        <font>
                            {{user_profile_data.phone}}  
                        </font>
                        <el-button size="mini" type="primary" icon="el-icon-edit" plain class="edit_button" @click="Edit"></el-button>
                    </li>
                    <li>Email: 
                        <font> 
                            {{user_profile_data.email}}  
                        </font>
                        <el-button size="mini" type="primary" icon="el-icon-edit" plain class="edit_button" @click="Edit"></el-button>
                    </li>
                    <li>E-mail verified: 
                        <el-tag type="success">{{user_profile_data.email_ver}}</el-tag>
                    </li>
                    <li>Address: 
                        <font>
                            {{user_profile_data.address}}
                        </font>
                    </li>
                    <li>Has payment method: 
                        <el-tag type="success">{{user_profile_data.paybool}}</el-tag>
                    </li>
                    <li>First transaction time: 
                        <font>
                            {{user_profile_data.temp}}
                        </font>
                    </li>
                    <li>Last transaction time: 
                        <font>
                            {{user_profile_data.first_tras}}
                        </font>
                    </li>
                    <li>Linked bank account: 
                        <font>
                            {{user_profile_data.bank_account}}
                        </font>
                    </li>
                    <li>Bank account verified: 
                        <el-tag type="danger" @click="B_v_access">{{user_profile_data.bank_ver}}</el-tag>
                        <el-button size="mini" type="primary" icon="el-icon-edit" plain class="edit_button" @click="B_v_access"></el-button>
                    </li>
                    <li>Transaction Detail: {{user_profile_data.trans}}
                        <el-button size="mini" type="primary" icon="el-icon-document" plain class="edit_button" @click="OpenDetail"></el-button>
                    </li>
                    <li>User analysis Detail: {{user_profile_data.analysis}}
                        <el-button size="mini" type="primary" icon="el-icon-document" plain class="edit_button" @click="OpenAnalysis"></el-button>
                    </li>
                    <li>SignUp Time: {{user_profile_data.signup_time}}</li>
                </ul>
        </div>
        <router-view class="detail_card"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'UserProfileWrapper',
        created() {
            console.log('get the id: ', this.$route.params.id)
        },
        data() {
            return {
                id: this.$route.params.cateName,
                user_default_img: require('../../assets/image/UserProfile.png'),
                user_profile_data: {
                    firstname: 'El',
                    userid: this.$route.params.id,
                    lastname: 'Barto',
                    nickname: 'Nokia',//editable
                    phone: '+886 988 888 888',//editable
                    email: 'user@email.com',//editable
                    signup_time: '2017-12-30',
                    address: '',
                    trans: '',
                    temp: '',
                    bank_account: 'Hello World!',
                    email_ver: 'Success',
                    bank_ver: 'Unsuccessful',
                    region: 'TW',
                    first_tras: '2017-12-30',
                    last_tras: '2017-12-30',
                    paybool: 'Yes',
                    analysis: ''
                }
            }
        },
        methods: {
            B_v_access() {
                this.$confirm('確定要手動通過驗證嗎', '提示', {
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel',
                type: 'warning'
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: 'Verify Success!'
                });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Cancel Success!'
                });          
                });
            },
            Edit() {
                this.$prompt('Title', '', {
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'Cancel',
                    }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: 'Input: ' + value
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Cancel Edit'
                    });       
                });
            },
            OpenDetail() {
                this.$router.push({ name: 'UserTransDetail'})
            },
            OpenAnalysis() {
                this.$router.push( {name: 'UserAnalysisDetail' } )
            },
            UserRemove() {
                this.$confirm('確定刪除使用者嗎？', 'title', {
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    ::-webkit-scrollbar {display:none}
    .search_div {
            height: 5vh;
        }
    
    .profile_card {
        background-color: white;
        overflow-y: scroll;
        overflow-x: hidden;
        float: left;
        height: 80vh;
        width: 30vw;
        border: 1px solid #d0d0d0;
        border-radius: 20px;
        padding: 1%;
        .top_div {
            height: 10%;
            width: 100%;
            .profile_img {
                height: 60%;
                border-radius: 200px;
                border: 2px solid #46A3FF;
                padding: 2%;
                float: left;
            }
            .header {
                float: left;
                height: 100%;
                width: 60%;
                p {
                    margin-left: 1vw;
                    font-size: 1.5em;
                    font-weight: 800;
                    color: #46A3FF;
                }
            }
            .remove {
                float: left;
                height: 100%;
                width: 10%;
            }
        }
        ul {
            margin-top: 1vh;
            list-style-type: none;
            li {
                line-height: 5vh;
                font-size: 1em;
                color: #ADADAD;
                .edit_button {
                    margin-left: 2%;
                }
                font {
                    margin-left: 5%;
                    font-size: 1.4em;
                    color: black;
                }
            }
        }
    }
    
    
    .detail_card {
        margin-left: 2vw;
        float: left;
        height: 80vh;
        width: 44vw;
        border: 1px solid #d0d0d0;
        border-radius: 20px;
        padding: 1%;
    }
</style>