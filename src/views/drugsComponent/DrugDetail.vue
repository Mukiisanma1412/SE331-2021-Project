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
    <button type="button" class="btn btn-primary" v-if="GStore.currentUser">
      Add new drug
    </button>
  </div>

  <!-- การ์ดยา -->
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3" v-for="drug in drugs" :key="drug">
      <!-- Card  -->
      <div class="druglist">
        <div class="card" style="width: auto">
          <img
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">{{ drug.name }}</h4>
            <p class="card-text">
              {{ drug.shortDesc }}
            </p>
            <a
              href="#"
              class="btn btn-info btn-sm"
              @click="gotoMoreDetail(drug.id)"
              >Detail</a
            >
          </div>
        </div>
        <!-- Card end -->
      </div>
    </div>
  </div>
  <!-- Pagination-->

  <div class="row">
    <div class="col"></div>
    <div class="col-4" >
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </div>
    <div class="col"></div>
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
