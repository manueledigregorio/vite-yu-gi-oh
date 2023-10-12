
<script>

import {store} from '../data/store';
import CharterCard from './partials/CharterCard.vue'

export default {
  name: 'Main',
  components:{
    CharterCard
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    console.log(store.charterList);
  },
}
</script>

<template>
  <main>
    <div class="container ">
    <div class=" container-my">
      
        <CharterCard  v-for="item in store.charterList" 
          :key="item.id"
          :cardObj="item"/>
        

    </div>
  </div>
  </main>
  
  
</template>


<style lang="scss" scoped>
  main{
    background-color: #d48f38;
    padding: 100px;

    .container-my{
      display: flex;
      flex-wrap: wrap;
      background-color: white;
      margin-top: 40px;
      padding-bottom: 20px;
    }
  }
</style>