<template>
    <div class="Btns">
      <button>{{btnText}}</button>
    </div>


</template>

<script>
export default {
props:{
  btnText:{
    type:String,
    require: true
  }
}
};
</script>

<style>
#app {
}
.Btns button{
  margin-bottom: 10px;
  padding: 12px 20px;
  border-radius: 10px;
}
</style>