<template>
  <div class="hello">
    <h1
      class="display-6"
      style="color: #626262; text-align: center; margin: 0.5cm"
    >
      Drug List
    </h1>
  </div>
  <div class="container" style="text-align: right">
    <button type="button" class="btn btn-primary" v-if="GStore.currentUser">Add new drug</button>
  </div>

  <!-- การ์ดยา -->
  <div class="row">
    <dic class="col-3" v-for="drug in drugs" :key="drug">
      <!-- Card  -->
      <div class="druglist">
        <div class="card" style="width: 18rem">
          <img src="@/assets/addimage.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ drug.name }}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-info btn-sm" @click="gotoMoreDetail(drug.id)">Detail</a>
            
          </div>
        </div>
        <!-- Card end -->
      </div>
    </dic>
  </div>
</template>

//------------------//

<script>
import EventService from "@/service/EventService.js";
import { watchEffect } from "@vue/runtime-core";

export default {
  inject: ["GStore"], //<--
  computed: {
    currentUser() {
      return localStorage.getItem("user");
    },
  },
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
    gotoMoreDetail(id) {
      console.log(id);
      this.$router.push("/MoreDetail/" + id);
    },
  },
};
</script>
