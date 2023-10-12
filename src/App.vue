
<script>
// qui lo importo 
import {store} from './data/store'
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue'
export default {
  name: 'App',

  components:{
    Header,
    Main

  },
  data() {
    return {
      // vado a richiamare store 
      store
    }
  }, 
  methods: {
    getApi(){
      axios.get(store.apiUrl)
        .then(res =>{
          console.log(store.charterList)
          store.charterList = res.data.data
        })

      .catch(err => {

        console.log(err);
      })  

    }
  },
  mounted() {
    this.getApi()
  },
  
}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
  @use './scss/main.scss';
</style>
