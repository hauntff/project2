<template>
  <div class="container">
    <h3>Логин:</h3>
    <input type="text" v-model="login">
    <h3>Пароль:</h3>
    <input type="password" v-model="password"><br>
    <button @click="regist">Войти</button>
    <h3 v-if="errorRegistActive">{{ errorRegistText }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      errorRegistActive: false,
      errorRegistText: ''
    }
  },
  methods: {
    regist(){
      if (this.getCookie('login') != this.login){
        this.errorRegistActive = true
        this.errorRegistText += 'Wrong login'
      }
      if (this.getCookie('password') != this.password){
        this.errorRegistActive = true
        this.errorRegistText += 'uncoincidence password'
      }
      if (this.getCookie('login') == this.login && this.getCookie('password') == this.password){
        this.$router.push({path: '/broker'})
      }
    },
    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  }
}
</script>