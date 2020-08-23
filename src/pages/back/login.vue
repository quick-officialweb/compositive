<template>
  <div class="login-page">
   <el-card :body-style="{width:'300px',padding:'80px'}">
    <el-form :model="forms" :rules="rules" ref="forms" class="form">
      <el-form-item prop="user">
        <el-input v-model="forms.user" clearable placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="forms.password" clearable show-password placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item class="btn">
      <el-button type="primary" @click="login('forms')">登 录</el-button>
      </el-form-item>
    </el-form>
   </el-card>
  </div>
</template>

<script>
/**
* @author        全易
* @time          2020-08-23 14:11:38  星期天
* @description   
*/


export default {
  name: 'Back-Login',
  data () {
    return {
      forms: {
        user: 'admin',
        password: '1234'
      },
      rules: {
        user: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  created(){
    sessionStorage.removeItem("token");
  },
   methods: {
      login(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
            sessionStorage.setItem("token","123456");
            this.$router.push({
              path:'/back/home'
            });
          } else {
            return false;
          }
        });
      }
    }
}
</script>

<style lang="less" scoped>
.login-page{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff8f8;
  .form{
    .btn{
      margin-top: 50px;
      .el-button{
        width: 100%;
      }
    }
  }
}
</style>
