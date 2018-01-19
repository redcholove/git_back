<template>
    <div id="div">
        <div class="DatePicker">
            <el-date-picker
                v-model="value7"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="To"
                start-placeholder="Start Date"
                end-placeholder="End Date"
                :picker-options="pickerOptions2">
                </el-date-picker>
        </div>
        <el-button type="primary" plain class="SearchButton">Search</el-button>
    </div>
</template>

<script>
    export default {
        name: 'UserAnalysisDetail',
        created() {
        },
        data() {
            return {
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                        }
          }]
        },
        value6: '',
        value7: ''
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    #div {
        text-align: center;
        background-color: white;
    }
    .DatePicker {
        float: left;
        margin-left: 10%;
    }
    .SearchButton {
        float: left;
        margin-left: 5%;
    }
</style>