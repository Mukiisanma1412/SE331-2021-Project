<template>
<div class="hello">
        <h1 class="display-6" style=" color: #626262; text-align:center; margin: 0.5cm;" >Add new drug</h1>
</div>   
     <!-- การ์ดยา -->
    <div class="Adddrug">
    
      <div class="row">
        <div class="column">
          <div class="card">
            <form>
              <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" v-model="name" />
              </div>
              <div class="mb-3">
                  <label for="Short" class="form-label">Short description</label>
                  <input type="text" class="form-control" id="name" v-model="name" />
              </div>
              <div class="mb-3">
                <label for="Description" class="form-label">Description</label>
                <textarea class="form-control" id="comment" rows="3" v-model="comment" ></textarea>
              </div>
              <div class="mb-3">
                <label for="Howto" class="form-label">How to take</label>
                <textarea class="form-control" id="comment" rows="3" v-model="comment" ></textarea>
              </div>
            <button class="btn"><i class="fa fa-download"></i> Upload image</button>
            </form>
           <br>
          <div class="container" style="text-align: center;">
            <button class="button1" >Add</button>
             <button class="button" style="margin:20px">Cancle</button>
            
          </div>
            
          </div>
        </div>
    
      </div>
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


  