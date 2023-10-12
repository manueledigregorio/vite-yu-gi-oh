
<script>

import {store} from '../data/store';
import CharterCard from './partials/CharterCard.vue';
import Result from './partials/Result.vue';


export default {
  name: 'Main',

  components:{
    CharterCard,
    Result
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
      
      <Result />
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
      padding-bottom: 20px;
    }
  }
</style>