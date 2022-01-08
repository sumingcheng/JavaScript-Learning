<template>
  <div class="total-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <TodayUsers></TodayUsers>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalOrders></TotalOrders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalSales></TotalSales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalUsers></TotalUsers>
        </el-card>
      </el-col>
    </el-row>
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
.total-view{
  margin: 1%;
}
</style>