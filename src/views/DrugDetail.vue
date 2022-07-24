<template>
  <div class="hello">
    <h1 class="display-6">Medicine List</h1>
  
  </div>

  
  <div v-for="drug in drugs" :key="drug">

                      <h2>Name: {{ drug.name }}</h2>

                     <h1>Description: {{ drug.description }}</h1>

                     <h1>Short Description: {{ drug.shortDesc }}</h1>

                     <h1>How to Take: {{ drug.howToTake }}</h1>
</div>

 
   
 
  

  
</template>

<script>

import EventService from "@/service/EventService.js";
import { watchEffect } from '@vue/runtime-core'
// import * as yup from 'yup'
// import ROUTE_PATH from '@/constants/router.js'

export default {
  name: 'DrugDetail',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  data (){
    return {
      drugs: [{
        name: ''
      }, {
        description: ''
      }, {
        shortDesc: ''
      }, {
        howToTake: ''
      }],
      totalEvents: 0,
    }},
  created() {
      watchEffect(() => {
        EventService.getEventLists(6, 1)
          .then((response) => {
            console.log(response)
            this.drugs = response.data
            this.totalEvents = response.headers['x-total-count']
          })
          .catch((error) => {
            console.log(error)
          })
      })
  },
};
</script>


