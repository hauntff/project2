<template>
  <div class="container">
    <div class="fillUp">
      <button @click="FillUP">Пополнить баланс</button>
    </div>
    <div class="modalFP" v-if="Active">
      <div class="modalBG">
        <div class="ModalContent">

          <div class="X">
            <div class="ModalBtns">
              <button @click="X">X</button>
            </div>
          </div>

          <div class="modaltxt">
            <div class="txtWrapper"><h2> Введите номер карты <br><input type="number"></h2></div>
            <div class="txtWrapper"><h2> Введите срок карты <br><input type="text"></h2></div>
            <div class="txtWrapper"><h2> Введите Имя клиента карты <br><input type="text"></h2></div>
            <div class="txtWrapper"><h2> Введите CVC карты <br><input type="number"><br></h2></div>
          </div>
          <div class="Parse">
            <h2>Введите сумму пополнения: <input v-model="balanceForFill" type="number"></h2>
          </div>
          <div class="ModalBtns">
            <button @click="CP">Подтвердить платеж</button>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return{
      Active: false,
      balanceForFill: 0
    }
  },
  methods:{
    FillUP(){
      this.ModalShow();
    },
    ModalShow(){
      this.Active=true;
    },
    ModalClose(){
      this.Active=false;
    },
    X(){
      this.ModalClose();
    },
    CP(){
      this.ModalClose();
      this.$emit('sumToRefill',this.balanceForFill)
    }
  }
}
</script>
<style>
.ModalBtns button{
  border: 2px solid black;
  border-radius: 15px;
  background-color: #FF4C00;
  color: black;
  padding: 20px;
}
.modalBG{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: rgba(169, 169, 169, 0.297);
}
.ModalContent{
  width: 55%;
  margin: 250px auto;
  background: #00AE68;
  border-radius: 15px;
  padding: 15px 15px;
  text-align: center;
  position: relative;
}
.modaltxt{
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
}
.X {
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
  margin-bottom: 155px;
}

</style>