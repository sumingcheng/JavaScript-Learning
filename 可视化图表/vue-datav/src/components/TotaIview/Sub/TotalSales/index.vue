<template>
  <div class="today-users">
    <CommonCard title="累计交易量" count="10000">
      <template v-slot:chart>
        <div id="total-user-chart"></div>
      </template>
      <template v-slot:total>
        <span>昨日订单,</span>
        <span class="emphasis">5000</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
  import common from "../CommonCard/common";
  export default {
    mixins: [common],
    mounted() {
      const chartDom = document.getElementById("total-user-chart");
      const chart = this.$echarts.init(chartDom);
      const option = {
        xAxis: {
          type:'category',
          data:['1','2','3','4','5','6']
        },
        yAxis: {},
        tooltip:{

        },
        series: [{
          type: 'bar',
          // lineStyle: {
          //   opacity: 0
          // },
          data: [500, 100, 220, 330, 55, 356],
          // itemStyle: {
          //   opacity: 0
          // },
          // smooth: true,
          // areaStyle: {
          //   color: 'orange'
          // }
        }],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      };
      chart.setOption(option);
    }
  };
</script>

<style>
  #total-user-chart {
    width: 100%;
    height: 100%;
  }
</style>