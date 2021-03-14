<template>
  <div class="container">
    <h3>Имя:</h3>
    <input type="text" v-model="firstName">
    <h3>Логин:</h3>
    <input type="text" v-model="login">
    <h3>Почта:</h3>
    <input type="email" v-model="email">
    <h3>Пароль:</h3>
    <input type="password" v-model="password1">
    <h3>Подтвердите пароль:</h3>
    <input type="password" v-model="password2">
    <h3>Возраст:</h3>
    <input type="number" v-model="age">
    <button @click="regist">Регистрация</button>
    <h3 v-if="errorRegistActive">{{ errorRegistText }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: '',
        login: '',
        email: '',
        password: '',
        age: 0
      },
      firstName: '',
      login: '',
      email: '',
      password1: '',
      password2: '',
      age: 0,
      errorRegistActive: false,
      errorRegistText: ''
    }
  },
  methods: {

    check(){
      this.errorRegistText = ''
      if (!this.validateEmail(this.email)){
        this.errorRegistActive = true
        this.errorRegistText += 'Неправильная почта'
      }
      if (this.password1 != this.password2){
        this.errorRegistActive = true
        this.errorRegistText += 'Пароли не совпадают'
      }
      if (this.age < 0 || this.age>=100) {
        this.errorRegistActive = true
        this.errorRegistText += 'Несуществующий возраст'
      }
      if (this.password1 == this.password2 && this.validateEmail(this.email) && this.age >= 0){
        this.validate();
    }},
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase())
    },
    validate() {
      this.user.firstName = this.firstName
      this.user.login = this.login
      this.user.email = this.email
      this.user.password = this.password1
      this.user.age = this.age
      this.setCookie('login', this.user.login)
      this.setCookie('password', this.user.password)
    },
    regist() {
      this.check()
    },

     setCookie(key,value) {
  var d = new Date();
  d.setTime(d.getTime() + (30*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = key + "=" + value + ";" + expires + ";path=/";
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

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container{
  display: flex;
  flex-direction: column;
  width: 10%;
  margin: 0 auto;
  margin-bottom: 100px;
}
.container h3{
  margin: 0;
}
.container input{
  margin-bottom: 20px;
}
.container button{
  padding: 12px 20px;
}
</style>