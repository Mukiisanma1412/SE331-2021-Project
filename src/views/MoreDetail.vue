<template>
<div class="hello">
        <h1 class="display-6" style=" color: #626262; text-align:center; margin: 0.5cm;" >Drug Detail</h1>
</div>
      <div class="container" style="text-align:right; ">
        <button class="button2"  style=" margin-bottom: 0.5cm;">Add new drug</button>
      </div>
     
     <!-- การ์ดยา -->
    <div class="druglist">
    
      <div class="row">

        <div class="column">
          <div class="card">
            <div class="container" style="text-align:right; ">
             <button class="button1" >Edit</button>
            </div>
           
              <h1>Name: </h1>
              <h2>Shot Description:<h4>hello</h4></h2>
              <h2>Description:<h4>hello</h4></h2>
              <h2>How to take:<h4>hello</h4></h2>
  
            <button class="button" >Delete</button>
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


  <style scoped>

    
    /* การ์ด */
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, Helvetica, sans-serif;
    }
    
    /* Float four columns side by side */
    /* .column {
      float: left;
      width: 25%;
      padding: 0 10px;
    } */
    
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
        width: 35cm;
        height:auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 30px;
        margin: 10px;
        background-color: #f5f3f3;
    }
    
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    /* ปุ่ม */
    .button {
       text-align: center;
      background-color: rgb(219, 75, 75);
      border: none;
      color: rgb(243, 243, 243);
      padding: 10px 10px;
      width:10%;
      cursor: pointer;
      border-radius: 8px;
      
    }

    .button1 {
    float: right;   
    border-color: #2196F3;
    color: dodgerblue;
      padding: 10px 10px;
      width:10%;
      cursor: pointer;
      border-radius: 8px;
    }

    .button2 {
        text-align: center;
      background-color: rgb(133, 201, 77);
      border: none;
      color: rgb(243, 243, 243);
      padding: 10px 10px;
      width:10%;
      cursor: pointer;
      border-radius: 8px;
      
    }

    .button:hover {
      background-color: #b64734;
    }

    .button2:hover {
      background-color: #aace93;
    }

    /* ตัวหนังสือ */
    
  </style>
 
