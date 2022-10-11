<template>
  <div class="hello">
    <h1
      class="display-6"
      style="color: #626262; text-align: center; margin: 0.5cm"
    >
      Add new drug
    </h1>
  </div>
  <!-- การ์ดยา -->

  <form  @submit="AddDrug()">
    <!-- name -->
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" v-model="drugs.name" />
    </div>

    <!-- Short desc -->
    <div class="mb-3">
      <label for="Short" class="form-label">Short description</label>
      <input type="text" class="form-control" id="shortDesc" v-model="drugs.shortDesc" />
    </div>
    <!-- Desc -->
    <div class="mb-3">
      <label for="Description" class="form-label">Description</label>
      <textarea
        class="form-control"
        id="description"
        rows="3"
        v-model="drugs.description"
      ></textarea>
    </div>

    <!-- How to take -->
    <div class="mb-3">
      <label for="Howto" class="form-label">How to take</label>
      <textarea
        class="form-control"
        id="howToTake"
        rows="3"
        v-model="drugs.howToTake"
      ></textarea>
    </div>

    <!--! IMAGE -->
    <!-- <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupFile01">Upload</label>
      <input type="file" class="form-control" id="inputGroupFile01" />
    </div> -->

    <div class="container" style="text-align: center">
    <button type="submit" class="btn btn-primary">Add</button>
 
  </div>
  </form>
 
 
</template>



<script>
import EventService from "@/service/EventService.js";
import { watchEffect } from "@vue/runtime-core";
// import * as yup from 'yup'
// import ROUTE_PATH from '@/constants/router.js'

export default {
  name: "DrugDetail",
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      drugs: [
        {
          name: "",
        },
        {
          description: "",
        },
        {
          shortDesc: "",
        },
        {
          howToTake: "",
        },
      ],
      totalEvents: 0,
    };
  },
  created() {
    watchEffect(() => {
      EventService.getEventLists(6, 1)
        .then((response) => {
          console.log(response);
          this.drugs = response.data;
          this.totalEvents = response.headers["x-total-count"];
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  methods: {
    AddDrug(){
      EventService.addEvent(this.drugs); 
      console.log(this.drugs);
      alert("Add")

      EventService.getEventLists(6, 1)
        .then((response) => {
          console.log(response);
          this.drugs = response.data;
          this.totalEvents = response.headers["x-total-count"];
        })
        .catch((error) => {
          console.log(error);
        });
        
      this.$router.push("/MoreDetail/" + (parseInt(this.totalEvents)+1));
     
    }
  }
};
</script>


  