<template>
    <div class="box">
        <chart ref="chart" :options="optionData"></chart>
        <div class="inner">
            111
        </div>
    </div>
</template>

<script>
    export default {
        name:'index',
        data(){
            return {
                optionData:{
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    }]
                }
            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>
    .box{
        color:red;
        .inner{
            color:blue;
        }
    }
</style>