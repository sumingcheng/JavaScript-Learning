<template>
  <div class="today-users">
    <CommonCard title='累计销售额' count='￥3000'>
      <template v-slot:chart>
        <div class="compare-wiapper">
          <div class="compare">
            <span>日同比</span>
            <span>8.99</span>
            <div class="descrease"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span>8.99</span>
            <div class="in"></div>
          </div>
        </div>
      </template>
      <template v-slot:total>
        <span>昨日销售额 </span>
        <span>￥2000</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
  import common from "../CommonCard/common";
  export default {
    mixins: [common],

  };
</script>

<style lang="scss">
  .compare-wiapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .compare {
    display: flex;
    height: 50%;
    font-size: 12px;
    line-height: 27px;
    color: #666;
  }

  .descrease {
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: green transparent transparent transparent;
    margin: 11px 0 0 5px;
  }

  .in {
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent red transparent;
    margin: 5px 0 0 5px;
  }
</style>