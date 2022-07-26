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

    .button:hover {
      background-color: #b64734;
    }

    .button1 {
       text-align: center;
      background-color: rgb(75, 219, 82);
      border: none;
      color: rgb(243, 243, 243);
      padding: 10px 10px;
      width:10%;
      cursor: pointer;
      border-radius: 8px;
       
    }

    .button1:hover {
      background-color: #84c467;
    }


    /* ปุ่มลงรูป */
    .btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 15px;
}

    
  </style>
 
