<template>
  <div class="healthBar">
    <div class="BG">
      <div class="hp">
        <div :style="{width: hp+'%'}" class="bar">{{hp}}</div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  props:{
    hp:{
      type: Number,
      required: true
    }
  }
};
</script>

<style>
#app {
}
.hp{
  border: black 2px solid;
  border-radius: 10px;
  width: 300px;
}
.bar{
  background: lime;
  height: 20px;
  text-align: center;
  border-radius: 10px;
}
</style>