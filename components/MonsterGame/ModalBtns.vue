<template>
  <div class="modal" v-if="Active">
    <div class="ModalBG">
      <div class="ModalContent">
        <div class="X">
          <div class="ModalBtns">
            <button @click="X">X</button>
          </div>
        </div>
        <div class="txtWrapper"><h2>ИГРА ОКОНЧЕНА!!</h2></div>
        <div class="modalBtns">
          <div class="ModalBtns">
            <button @click="Restart">Заново</button>
          </div>
          <div class="ModalBtns">
            <button @click="Cancel">Отмена</button>
          </div>
        </div>


      </div>
    </div>
  </div>



</template>

<script>
export default {
  props:{
    Active:{
      type: Boolean,
      require: true
    },
    ModalText:{
      type:String,
      require: true
    }
  },
      methods:{

        Restart(){
          this.$emit('Restart')
        },
        Cancel()
        {
          this.$emit('Cancel')
        },
        X(){
          this.$emit('X')
        },
  }

}
</script>

<style>
#app {
}
.ModalBtns button{
  border: 2px solid black;
  border-radius: 15px;
  background-color: #FF4C00;
  color: black;
  padding: 20px;
}
.ModalBG{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: rgba(169, 169, 169, 0.297);
}
.ModalContent{
  width: 25%;
  margin: 250px auto;
  background: #00AE68;
  border-radius: 15px;
  padding: 15px 15px;
  text-align: center;
  position: relative;
}
.modalBtns{
  display: flex;
  justify-content: space-around;
}
.X {
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
}
</style>