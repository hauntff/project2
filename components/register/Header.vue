<template>
  <div class="container">
    <router-link to="/regist">
      <button>Регистрация</button>
    </router-link>
    <router-link to="/login">
      <button>Войти</button>
    </router-link>
    <router-link to="/game">
      <button>Игра</button>
    </router-link>
    <router-link to="/broker">
      <button>Ваш Банк</button>
    </router-link>

  </div>
</template>

<style scoped>
button{
  margin-bottom: 25px;
  padding: 12px 20px;
  border-radius: 10px;
  margin-top: 25px;
  margin-right: 35px;
}

</style>