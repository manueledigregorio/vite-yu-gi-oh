
<script>
export default {
  name:'CharterCard',
  props:{
    cardObj:Object,
  }
}
</script>

<template>
  <div class="collonne">
    <div class="sc-card">
      <img src="https://images.ygoprodeck.com/images/cards_small/34541863.jpg" alt="">
      <h4 >{{ cardObj.name }}</h4>
      <p> {{  cardObj.archetype  }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.collonne{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);

  .sc-card{
      width: 168px;
      height: 100%;
      text-align: center;
      background-color: #d48f38;
      margin-top: 15px;
      h4{
        padding-top: 20px;
        color: white;
      }
    }
}
    
</style>