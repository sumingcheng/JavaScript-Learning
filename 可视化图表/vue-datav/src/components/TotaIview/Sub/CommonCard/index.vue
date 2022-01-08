<template>
  <div class="common-card">
    <div class="title">累计交易销售额</div>
    <div class="count">￥ 3,000,000</div>
    <div class="chart"></div>
    <div class="line"></div>
    <div class="total">昨日销售额度:￥ 3,000</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .title{
    font-size: 14px;
  }
  .count{
    height: 30px;
    font-size: 25px;
    line-height: 30px;
    color: #424242;
    margin-top: 5px;
  }
  .chart{
    height: 60px;
  }
  .line{
    border-top:1px solid #eee ;
    margin: 10px 0;
  }
  .total{
    display: flex;
    color: #333;
    font-size: 14px;
    height: 27px;
    line-height: 27px;
  }
</style>

