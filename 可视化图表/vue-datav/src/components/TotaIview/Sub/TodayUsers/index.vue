<template>
  <div class="today-users">
    <CommonCard
      title='累计销售额'
      count='￥3000'
    > <template v-slot:chart>
      chat
      </template>
      <template v-slot:total>
        total
      </template>
    </CommonCard>

  </div>
</template>

<script>
import common from "../CommonCard/common";
export default {
  mixins:[common],
 
};
</script>

<style>
</style>