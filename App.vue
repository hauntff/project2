<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="19%" />

    <Header/>

    <router-view/>
  </div>
</template>

<script>


import Header from "@/components/register/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>