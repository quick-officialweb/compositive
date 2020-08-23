<template>
  <div class="back-menu">
    <div class="copyright">
      {{ data.title }}
    </div>
    <el-menu :default-active="active" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4" title="退出登录"><i class="fa fa-sign-out"></i></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
/**
* @author        全易
* @time          2020-08-23 17:31:46  星期天
* @description   
*/


export default {
  name: 'Back-Menu',
  data () {
    return {
      active:'1'
    }
  },
  props:{
    data:{
      type:Object,
    }
    
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
.back-menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  border-bottom: solid 1px #e6e6e6;
  background-color:#545c64;
  box-shadow: 0 2px 20px rgba(0,0,0,0.35);
  .copyright{
    color: #ffffff;
  }
  .el-menu{
    border-bottom: none;
    /deep/.el-menu-item,
    /deep/.el-submenu__title{
      height: 35px;
      line-height: 35px;
    }
  }
  
}
</style>
