<template>
  <div class="today-users">
    <CommonCard title="累计交易量" count="30000">
      <template v-slot:chart>
        <div id="total-order-chart"></div>
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
      const charDom = document.getElementById("total-order-chart");
      const chart = this.$echarts.init(charDom);
      const option = {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false,
          boundaryGap: false
        },
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        series: [{
          type: 'line',
          lineStyle: {
            opacity: 0
          },
          data: [500, 100, 220, 330, 55, 356, 54],
          itemStyle: {
            opacity: 0
          },
          smooth: true,
          areaStyle: {
            color: 'orange'
          }
        }],
      };
      chart.setOption(option);
    }
  };
</script>

<style>
  .emphasis {
    font-weight: bold;
  }
</style>

<style>
  #total-order-chart {
    width: 100%;
    height: 100%;
  }
</style>