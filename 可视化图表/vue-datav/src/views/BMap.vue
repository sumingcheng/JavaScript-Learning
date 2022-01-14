<template>
  <div class="bmap">
    <v-chart :options="options"></v-chart>
  </div>
</template>

<script>
  import "echarts/extension/bmap/bmap"
  export default {
    data() {
      return {
        options: {}
      }
    },
    mounted() {
      this.options = {
        bmap: {
          key: 'Xo20QUK0DQzpZOzhGBlUi1GKd9Eys9dn',
          center: [116.404, 39.915],
          zoom: 6
        }
      }
    },
  }
</script>

<style>

</style>