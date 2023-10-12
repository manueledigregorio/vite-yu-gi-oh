
<script>

import {store} from '../../data/store';
export default {
  name:'Result',
  data() {
    return {
      store
    }
  },

  computed: {

    getNumber(){
      return 'Found ' + store.charterList.length + ' cards'
    }

  },
}
</script>

<template>
  <div class="bar-card">
    <span>{{ getNumber }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .bar-card{
    background-color: #212529;
    width: 100%;
    height: 50px;

    span{

      color: white;
    }
  }
</style>