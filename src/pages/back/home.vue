<template>
  <div class="home-page">
    <Back-Menu :data="corporation" />
     后台
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
  name: 'Back-Home',
  data () {
    return {
      corporation:{
        title:"什么什么公司"
      }
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
