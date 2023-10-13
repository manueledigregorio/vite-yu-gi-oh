import {reactive} from 'vue';

export const store = reactive({

  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
  apiTot: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  apiArc: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  charterList: [],
  statusList:[],
  status: ''
})