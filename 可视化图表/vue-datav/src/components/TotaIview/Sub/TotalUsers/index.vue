<template>
  <div class="today-users">
    <CommonCard title="总计" count="12312">
      <template v-slot:chart>
        <div id="total-User-chart"></div>
      </template>
      <template v-slot:total>
        <span>进度,</span>
        <span class="emphasis">123</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
  import common from "../CommonCard/common";
  export default {
    mixins: [common],
    mounted() {
      const chartDom = document.getElementById("total-User-chart");
      const chart = this.$echarts.init(chartDom);
      const option = {
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'category',
          data: ['1', '2', '2', '3', '4', '5']
        },
        tooltip: {
        },
        series: [{
          type: 'bar',

          // lineStyle: {
          //   opacity: 0
          // },
          data: [20,30],
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
  #total-User-chart {
    width: 100%;
    height: 100%;
  }
</style>