<template>
  <div class="container">
    <div class="balance">
      <h3>Ваш Баланс: {{balance}}</h3>
      <h3>Ваши Биткоины: {{BalanceBTC}}</h3>
    </div>
    <div class="info">
      <div class="balanceInCurrency">

        <div>
          <div>
            <input type="number" v-model="count">
            <select name="select" v-model="value">
              <option value="valueUSD">USD</option>
              <option value="valueGBP">GBP</option>
              <option value="valueEUR">EUR</option>
            </select>
            <h3>{{time.toString()}}</h3>
          </div>

          <div class="Update" @click="Update" v-bind:class="{turn :refreshIcon}">
            <img alt="update" src="../../assets/update.png"/>
          </div>
        </div>
      </div>
      <div class="coc">
        <div v-for="(item,i) in info" :key="i">
          <CourceOfCurrency :info="item"/>
        </div>
      </div>

      <FillUpAPurse @sumToRefill="sumToRefill"/>
    </div>
    <p>{{errortxt}}</p>
    <div class="Buy">
      <button @click="Buy">КУПИТЬ</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import CourceOfCurrency from "@/components/Broker/CourceOfCurrency";
import FillUpAPurse from "@/components/Broker/FillUpAPurse";
export default {
  components: { CourceOfCurrency, FillUpAPurse},
  data(){
    return{
      info: [],
      balance: 0,
      time: 0,
      i:0,
      value: 0,
      BalanceBTC: 0,
      errortxt: '',
      errorActive: false,
      count: 0,
      refreshIcon: false
    }
  },
  created() {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.sortData(response)));
  },
  methods:
      {
        sumToRefill(Sum){
        this.balance=Sum;
        },
        Buy(){
          this.errortxt = '';
          if (this.checkWallet()){
            switch (this.value){
              case "valueUSD":
                this.BalanceBTC += 1 * this.count;
                this.balance -= this.info['USD'].rate_float * this.count;
                if (!this.checkWallet()){
                  this.balance += this.info['USD'].rate_float * this.count;
                  this.BalanceBTC -= 1 * this.count;
                }
                break;
              case "valueGBP":
                this.BalanceBTC += 1*this.count;
                this.balance -= this.info['GBP'].rate_float * this.count;
                if (!this.checkWallet()){
                  this.balance += this.info['GBP'].rate_float * this.count;
                  this.BalanceBTC -= 1 * this.count;
                }
                break
              case "valueEUR":
                this.BalanceBTC += 1*this.count;
                this.balance -= this.info['EUR'].rate_float * this.count;
                if (!this.checkWallet()){
                  this.balance += this.info['EUR'].rate_float * this.count;
                  this.BalanceBTC -= 1 * this.count;
                }
                break
            }
          }
        },
        checkWallet(){
          if (this.balance - this.info['USD'].rate_float < 0 || this.balance - this.info['GBP'].rate_float < 0 || this.balance - this.info['EUR'].rate_float < 0){
            this.errorActive = true;
            this.errortxt = "деняк нет(";
            return false
          }
          else
            return true
        },
        Update(){
          this.refreshIcon = true;
          setTimeout(()=>
          this.refreshIcon = false, 1000
          )
          axios
              .get('https://api.coindesk.com/v1/bpi/currentprice.json')
              .then(response => (this.sortData(response)));
        },
        sortData(data){
          this.info = data.data.bpi;
          this.time = new Date();
          this.time.setTime(this.time.getTime())
        },
        
      }
};
</script>

<style>
.info{
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 25px;

}
.Update{
  cursor: pointer;
}
.turn{
  position: absolute;
  position: relative;
  animation: spin 1s linear;
}
@keyframes spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
.coc{
  display: flex;
  flex-direction: column;
}
.container{
  margin-bottom: 80px;
}
button{
  margin-bottom: 25px;
  padding: 12px 20px;
  border-radius: 10px;
  margin-top: 25px;
}
</style>