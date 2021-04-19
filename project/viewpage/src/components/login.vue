<template>
  <div class="login">
    <div class="card">
      <div class="name">
        <span>姓名：</span>
        <v-input v-model="name"></v-input>
      </div>
      <div class="name">
        <span>密码：</span>
        <v-input type="password" v-model="password"></v-input>
      </div>
      <div>
        <v-button @click.native="login">登录</v-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    }
  },
  methods: {
    login() {
      console.log("aa")
      this.$http
        .post('http://localhost:3000/api/register', JSON.stringify({ username: this.name, password: this.password }))
        .then(response => (this.info = response))
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background: url("../assets/img/login.jpeg");
  position: relative;
}
.card {
  position: absolute;
  width: 500px;
  height: 200px;
  background: #fff;
  padding: 20px;
  top: 100px;
  right: 100px;
}
.card > .name {
  .atui-input {
    display: inline-block;
  }
}
</style>