<template>
  <div class="hello">
    <h1
      class="display-6"
      style="color: #626262; text-align: center; margin: 0.5cm"
    >
      Edit
    </h1>
  </div>
  <!-- การ์ดยา -->
  <h4>
    Edit {{ this.drugFormerName }}
  </h4>
  <div class="card">
    <div class="card-body">
      <form @submit="sendEdittedDrug()">
        <!-- name -->
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="drug.name"
          />
        </div>

        <!-- Short desc -->
        <div class="mb-3">
          <label for="Short" class="form-label">Short description</label>
          <!-- <input
            type="text"
            class="form-control"
            id="shortDesc"
            v-model="EditedDrugs.shortDesc"
          /> -->
          <textarea
              v-model="drug.shortDesc"
              name="shortDesc"
              type="text"
              rows="3"
              class="form-control"
            />
        </div>
        <!-- Desc -->
        <div class="mb-3">
          <label for="Description" class="form-label">Description</label>
          <textarea
            class="form-control"
            id="description"
            rows="5"
            v-model="drug.description"
          ></textarea>
        </div>

        <!-- How to take -->
        <div class="mb-3">
          <label for="Howto" class="form-label">How to take</label>
          <textarea
            class="form-control"
            id="howToTake"
            rows="3"
            v-model="drug.howToTake"
          ></textarea>
        </div>

        <!--! IMAGE -->
        <!-- <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">Upload</label>
        <input type="file" class="form-control" id="inputGroupFile01" />
      </div> -->

        <div class="container" style="text-align: center">
          <button type="submit" class="btn btn-primary">Save change</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
  
  
  <script>
import EventService from "@/service/EventService.js";
import { watchEffect } from "@vue/runtime-core";

// import * as yup from 'yup'
// import ROUTE_PATH from '@/constants/router.js'

export default {
  name: "EditForm",
  components:{

  },
  props: ["id"],
  data() {
    return {
      drugFormerName: null,
      drug: [],
    };
  },
  created() {
    watchEffect(() => {
      EventService.getEvent(this.id)
        .then((response) => {
          this.drug = response.data;
           this.drugFormerName = response.data.name ?? "untitle drug"
          console.log(this.drug);
        })
        .catch((error) => {
          console.log(error);
        });
    },
   
    );
    
  },
  methods: {
    sendEdittedDrug() {
      let updatedDrug = {
        "name" : this.drug.name,
        "shortDesc" : this.drug.shortDesc,
        "description" : this.drug.description,
        "howToTake" : this.drug.howToTake
      }
      EventService.updateEvent(this.drug.id, updatedDrug);
      alert("Updated")
      this.$router.push("/MoreDetail/" + this.drug.id)
    },
  },
};
</script>
  
  
    