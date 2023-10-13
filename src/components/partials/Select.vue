<script>

import {store} from '../../data/store';
export default {
  name: 'Select',

  data() {
    return {
      store
    }
  },
}
</script>

<template>
<div  class="container">
  <select  v-model="store.status" @change="$emit('statusChange')" class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option  
        
      v-for="(items, index) in store.statusList" 
      :key="index" 
      :value="items.archetype_name"> {{ items.archetype_name }}

    </option>
   
</select>
</div>

  
</template>

<style lang="scss" scoped>

</style>