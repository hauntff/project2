<template>
  <div>
    <div>
      <span><h2>{{info.code}}:{{info.rate}}</h2> </span>
    </div>
  </div>

</template>
<script>
export default {
  props:{
    info:{
      type: [Object, Array],
      required: true
    }
  }
};
</script>
<style>
h2{
  margin-top: 0;
  margin-bottom: 15px;
}
</style>