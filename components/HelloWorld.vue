<template>
  <div>
    <p @click="toggleInfo">{{ name }}</p>
    <h4 @click="toggleFavorite">
    <span >favorite</span>
     </h4>

    <div v-if="showInfo">
      <p>{{ number }}</p>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["name", "number", "email"],
  data() {
    return {
      showInfo: false,
    };
  },
  methods: {
    toggleInfo() {
      this.showInfo = !this.showInfo;

    },
    toggleFavorite(){
      this.$emit()
    }
  },
};
</script>