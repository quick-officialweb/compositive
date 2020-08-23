<template>
  <div class="home-page">
     <div>
  {{ count }}
   <el-button @click="setCount">加</el-button>
 </div>
  </div>
</template>

<script>
/**
* @author        全易
* @time          2020-08-23 14:12:21  星期天
* @description   
*/
import { state, mutations } from "@/store";

export default {
  name: 'Front-Home',
  data () {
    return {
      
    }
  },
  computed: {
  count() {
     return state.count;
   },
 },
  methods: {
  setCount() {
    mutations.SET_COUNT(100);
  },
 }
}
</script>

<style lang="less" scoped>

</style>
