<template>

  <div class="hello">
    <h1 class="display-6" style=" color: #626262; text-align:center; margin: 0.5cm;" >Drug List</h1>
  </div>
  <div class="container" style="text-align:right; ">
     <button class="button1"  style=" margin-bottom: 0.5cm;">Add new drug</button>
    
  </div>
 
 <!-- การ์ดยา -->
<div class="druglist">

  <div class="row">
  <div class="column">
    <div class="card">
       <div class="drugid" v-for="drug in drugs" :key="drug">

          <h2>Name: {{ drug.name }}</h2>

         

        </div> 
      <button class="button">Detail</button>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button class="button">Detail</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button class="button">Detail</button>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
      <button class="button">Detail</button>
    </div>
  </div>
</div>
</div>



  




<!-- 
  
  <div v-for="drug in drugs" :key="drug">

                      <h2>Name: {{ drug.name }}</h2>

                     <h1>Description: {{ drug.description }}</h1>

                     <h1>Short Description: {{ drug.shortDesc }}</h1>

                     <h1>How to Take: {{ drug.howToTake }}</h1>
</div> -->

  
</template>

//------------------//

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

//-----------------------//
<style scoped>

/* การ์ด */
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  padding: 2cm;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* ปุ่ม */
.button {
  background-color: rgb(45, 106, 219);
  border: none;
  color: rgb(243, 243, 243);
  padding: 10px 10px;
  width:25%;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  margin:  2px;
  cursor: pointer;
  border-radius: 8px;
}

.button:hover {
  background-color: #517cd8;
}

.button1{
  
  background-color: rgb(93, 184, 93);
      border: none;
      color: rgb(243, 243, 243);
      padding: 10px 10px;
      width:10%;
      cursor: pointer;
      border-radius: 8px;
      
      }

.button1:hover {
      background-color: #aace93;
    }

</style>
