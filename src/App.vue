
<script>
// qui lo importo 
import {store} from './data/store'
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue'
import Select from './components/partials/Select.vue';
export default {
  name: 'App',

  components:{
    Header,
    Main,
    Select

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

    },

    getApiTot(){
      axios.get(store.apiTot,{
        params:{
          archetype: store.status

        }

      })
        .then(res =>{
          console.log(store.charterList)
          store.charterList = res.data.data

        })

      .catch(err => {

        console.log(err);
      })  

    },

    getApiArc(){
      axios.get(store.apiArc)
      .then(resut =>{
        store.statusList = resut.data;
        console.log(store.statusList);
      })
      .catch(err =>{

        console.log(err)
      })
      

    }
  },
  mounted() {
    this.getApi();
    this.getApiArc()
  },
  
}
</script>

<template>
  <Header />
  <Select @statusChange = 'getApiTot'/>
  <Main />
</template>

<style lang="scss">
  @use './scss/main.scss';
</style>
