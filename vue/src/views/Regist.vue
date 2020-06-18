<template>
  <div>
    <div class="login-container">
      <title>注册-Medusa</title>
    </div>

    <el-form ref="registerform" :model="registerform" label-width="80px" style="width:600px;margin: 20px auto;">
      <el-form-item label="昵称">
        <el-input v-model="registerform.name" />
      </el-form-item>

      <el-form-item label="用户名">
        <el-input v-model="registerform.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="registerform.userpass" class="myinput" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="registerform.userpassagain" class="myinput" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="registerform.useremail" class="myinput" type="text" placeholder="请输入邮箱" />
      </el-form-item>

      <el-form-item>
        <button class="ok_btn" @click="register">注册</button>
        <button class="cancel_btn" @click="backLogin">{{ backText }}</button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerform: {
        username: '',
        userpass: '',
        userpassagain: '',
        useremail: '',
        usershowname: ''
      },
      backText: '返回'

    }
  },
  methods: {
    backLogin() {
      this.$router.push('/')
    },
    register() {
      // var vm = this
      console.log(this.registerform)
      this.$reqs.post('/register', {
        username: this.registerform.username,
        password: this.registerform.password,
        showname: this.registerform.usershowname,
        email: this.registerform.useremail
      }).then(function(res) {
        if (res.data.status) {
          this.$message.error(res.data.errMsg)
        } else {
          this.$message.success('注册成功，请登录!')
          // const instance = Toast
          setTimeout(() => {
            // instance.close()
            this.$router.push('/login')
          }, 2000)
        }
      })
    }
  }
}
</script>
