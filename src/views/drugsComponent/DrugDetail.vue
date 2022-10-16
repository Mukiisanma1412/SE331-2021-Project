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
    <button
      type="button"
      class="btn btn-primary"
      v-if="currentUser"
      @click="goToAddDrug()"
    >
      + Add new drug
    </button>
  </div>

  <!-- การ์ดยา -->
  <div class="row drugcard">
    <div class="col-12 col-md-6 col-lg-3" v-for="drug in drugs" :key="drug">
      <!-- Card  -->
      <div class="druglist">
        <div class="card" style="width: auto">
          <img :src="imgSrc(drug.imgUrl)" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">{{ drug.name }}</h4>
            <p class="card-text">
              {{ drug.shortDesc }}
            </p>
            <div class="row">
              <div class="col-auto">
                <a
                  href="#"
                  class="btn btn-info btn-sm"
                  @click="gotoMoreDetail(drug.id)"
                  >Detail</a
                >
              </div>
              <div class="col-auto">
                <a
                  class="btn btn-sm btn-danger"
                  @click="deleteEvent(drug.id)"
                  v-if="currentUser"
                >
                  Delete</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Card end -->
      </div>
    </div>
  </div>
  <!-- Pagination-->
  <div class="d-flex justify-content-center">
    <div class="row" style="margin: 1rem">
      <div class="col-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <router-link
                class="page-link"
                :to="{ name: 'DrugDetail', query: { page: page - 1 } }"
                rel="prev"
                :class="{ disabled: page == 1 }"
              >
                <span aria-hidden="true">&laquo;</span></router-link
              >
            </li>
            <li class="page-item" v-for="page in totalPageRender" :key="page">
              <router-link
                class="page-link"
                :to="{ name: 'DrugDetail', query: { page: page } }"
                rel="page"
              >
                <span aria-hidden="true"> {{ page }} </span></router-link
              >
            </li>

            <li class="page-item">
              <router-link
                class="page-link"
                :to="{ name: 'DrugDetail', query: { page: page + 1 } }"
                rel="next"
                :class="{ disabled: !hasNextPage }"
              >
                <span aria-hidden="true">&raquo;</span></router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
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
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 4);
      return this.page < totalPages;
    },
    totalPageRender() {
      let total = Math.ceil(this.totalEvents / 4);
      return total;
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
        {
          imgUrl: "",
        },
      ],
      totalEvents: 0,
    };
  },
  created() {
    watchEffect(() => {
      EventService.getEventLists(4, this.page)
        .then((response) => {
          console.log(response);
          console.log(localStorage.user);
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
    goToAddDrug() {
      this.$router.push("/AddDrug");
    },
    deleteEvent(id) {
      console.log(id);
      EventService.deleteEvent(id);
      alert("Delete!");
      this.$router.go("/");
    },
    imgSrc(img){
      if (img == null || img == 'undefined'){
        return "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80"
      }
      else {
        return img;
      }
    }
  },
};
</script>
<style scoped>
.drugcard {
  margin-top: 1rem;
}
</style>
