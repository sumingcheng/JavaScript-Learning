<template>
  <div class="total-view">
    <TodayUsers></TodayUsers>
    <TotalOrders></TotalOrders>
    <TotalSales></TotalSales>
    <TotalUsers></TotalUsers>
  </div>

</template>

<script>
  import TodayUsers from './Sub/TodayUsers'
  import TotalOrders from './Sub/TotalOrders'
  import TotalSales from './Sub/TotalSales'
  import TotalUsers from './Sub/TotalUsers'


  export default {
    components: {
      TodayUsers,
      TotalOrders,
      TotalSales,
      TotalUsers,
    }
  }
</script>

<style>

</style>