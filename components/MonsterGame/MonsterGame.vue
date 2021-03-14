<template>
  <div class="container">
    <div class="game">
      <div class="heroModel">
        <div class="HeroName">
          <h1>
            BenzoG
          </h1>
        </div>
        <HealthBarComponent
            :hp="Herohp"
        />
      </div>
      <div class="btns">
        <ButtonComponent
            btnText="Удар"
            @click.native="AttackH"
        />
        <ButtonComponent
            btnText="Лечение"
            @click.native="HealH"
        />
        <ButtonComponent
            btnText="Критическая атака"
            @click.native="CriticalAttackH"
        />
      </div>
      <div class="enemyModel">
        <div class="EnemyName">
          <h1>
            Drugs
          </h1>
        </div>
        <HealthBarComponent
            :hp="Enemyhp"
        />
      </div>
    </div>

      <ModalBtnsComponent
          :Active="Active"
          @Restart="Restart"
          @Cancel="Cancel"
          @X="X"
      />

    </div>

</template>

<script>
import HealthBarComponent from "@/components/MonsterGame/HealthBar";
import ButtonComponent from "@/components/MonsterGame/Button";
import ModalBtnsComponent from "@/components/MonsterGame/ModalBtns";
export default {
  components: {ButtonComponent, HealthBarComponent, ModalBtnsComponent},
data(){
  return{
    Herohp: 100,
    Enemyhp: 100,
    Active: false,
    enemyHP: false,
    heroHP: false
  }
},
  methods:{
    AttackH(){
     this.Enemyhp -= Math.floor(Math.random()* (20 - 10) + 10);
     this.RandAttackE();
     this.checkHP();
    },
    HealH(){
      this.Herohp += 20;
      this.RandAttackE();
      this.checkHP();
    },
    CriticalAttackH(){
      this.Enemyhp -= Math.floor(Math.random()* (30 - 20) + 20);
      this.RandAttackE();
      this.checkHP();
    },
    RandAttackE(){
      let rand = Math.floor(Math.random()* (20-10) + 5);
      if (rand <= 8)
      {
        this.attackE();
        this.RandAttackE();
      }
      else if(rand == 9)
      {
        this.critAttackE()
      }
      else if(rand == 10)
      {
        this.healE()
      }
    },
    checkHP(){
      if (this.Herohp >= 100) {
        this.Herohp = 100
      }
      if (this.Enemyhp >= 100) {
        this.Enemyhp = 100
      }
      if (this.Herohp <= 0) {
        this.Herohp = 0;
        this.ModalShow();
      }
      if (this.Enemyhp <= 0) {
        this.Enemyhp = 0
        this.ModalShow();
      }
      if(this.Herohp<=20)
      {
        this.heroHP=true;
      }
      if(this.Enemyhp<=20)
      {
        this.enemyHP=true;
      }
    },
    attackE(){
      this.Herohp -= Math.floor(Math.random()* (20 - 10) + 10)
      this.checkHP()
    },
    healE(){
      this.Enemyhp += 20
      this.checkHP()
    },
    critAttackE(){
      this.Herohp -= Math.floor(Math.random()* (25 - 10) + 10)
      this.checkHP()
    },
    ModalShow(){
      this.Active=true;
    },
    ModalClose(){
      this.Active=false;
    },
    Restart(){
      this.ModalClose();
      this.Herohp=100;
      this.Enemyhp=100;
      this.enemyHP=false;
      this.heroHP=false;
    },
    Cancel()
    {
      this.ModalClose();
    },
    X(){
      this.Cancel();
    },
  }
}
</script>

<style>

.game{
  display: flex;
  justify-content: space-around;
}
.btns{
  display: flex;
  flex-direction: column;
}


</style>