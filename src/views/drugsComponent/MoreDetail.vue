<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-dark" @click="back()">Back</button>
      </div>
      <div class="col">
        <center>
          <h1>
            {{ drug.name }}
          </h1>
        </center>
      </div>
      <div class="col"> <a class="btn btn-sm btn-danger" @click="deleteEvent(drug.id)" v-if="currentUser"> Delete</a></div>
    </div>
  </div>

  <!-- การ์ดยา -->
  <div class="card">
    <div class="card-body">
      <center>
      <img
        style="width: 32rem"
        src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80"
        class="img-thumbnail"
        alt="..."
      /></center>

      <div style="text-align: left">
        <button
          type="button"
          class="btn btn-outline-primary"
          @click="greet"
          v-if="!isLoading"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-volume-up-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"
            />
            <path
              d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"
            />
            <path
              d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
            /></svg
          > Play voice
        </button>

        <transition name="fade" v-if="isLoading">
          <pulse-loader></pulse-loader>
        </transition>
        <!-- <button class="button1" v-if>Edit</button> -->
      </div>

      <span><h3>Shot Description:</h3>  </span>
      <p>{{ drug.shortDesc }}</p>
      <hr>
      <h3>Description:</h3>
      <p>{{ drug.description }}</p>
      <hr>
      <h3>How to take:</h3>
      <p>{{ drug.howToTake }}</p>
      <a class="btn btn-sm btn-danger" @click="gotoEditForm(drug.id)" v-if="currentUser"> Edit </a>
      <!-- <button class="button">Delete</button> -->
    </div>
  </div>
</template>



<script>
import EventService from "@/service/EventService.js";
import PulseLoader from "vue-spinner/src/SyncLoader.vue";

// import { watchEffect } from '@vue/runtime-core'
// import * as yup from 'yup'
// import ROUTE_PATH from '@/constants/router.js'

export default {
  props: ["id"],
  computed:{
    currentUser() {
      return localStorage.getItem('user')
    },
  },
  data() {
    return {
      drug: null,
      isLoading: true,
      name: "Hello world",
      selectedVoice: 1,
      synth: window.speechSynthesis,
      voiceList: [],
      greetingSpeech: new window.SpeechSynthesisUtterance(),
    };
  },
  components: {
    PulseLoader,
  },
  created() {
    // watchEffect(() => {
    EventService.getEvent(this.id)
      .then((response) => {
        console.log(response);
        this.drug = response.data;
        // this.totalEvents = response.headers['x-total-count']
      })
      .catch((error) => {
        console.log(error);
      });
    // })
  },

  mounted() {
    // wait for voices to load
    // I can't get FF to work without calling this first
    // Chrome works on the onvoiceschanged function
    this.voiceList = this.synth.getVoices();
    if (this.voiceList.length) {
      this.isLoading = false;
    }
    this.synth.onvoiceschanged = () => {
      this.voiceList = this.synth.getVoices();
      // give a bit of delay to show loading screen
      // just for the sake of it, I suppose. Not the best reason
      setTimeout(() => {
        this.isLoading = false;
      }, 800);
    };
    this.listenForSpeechEvents();
  },
  methods: {
    back() {
      this.$router.push({ path: "/" });
    },
    /**
     * React to speech events
     */
    listenForSpeechEvents() {
      this.greetingSpeech.onstart = () => {
        this.isLoading = true;
      };
      this.greetingSpeech.onend = () => {
        this.isLoading = false;
      };
    },
    /**
     * Shout at the user
     */
    greet() {
      // it should be 'craic', but it doesn't sound right
      this.greetingSpeech.text = `${this.drug.shortDesc}.`;
      this.greetingSpeech.voice = this.voiceList[this.selectedVoice];
      this.synth.speak(this.greetingSpeech);
    },
    deleteEvent(id){
      console.log(id);
      EventService.deleteEvent(id);
      this.$router.go("/");
    },
    gotoEditForm(id){
      this.$router.push({ path: `/${id}/edit` })
    }
  },
};
</script>

<!-- 
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
.row {
  margin: 0 -5px;
}

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
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 10px;
  background-color: #f5f3f3;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* ปุ่ม */
.button {
  text-align: center;
  background-color: rgb(219, 75, 75);
  border: none;
  color: rgb(243, 243, 243);
  padding: 10px 10px;
  width: 10%;
  cursor: pointer;
  border-radius: 8px;
}

.button1 {
  float: right;
  border-color: #2196f3;
  color: dodgerblue;
  padding: 10px 10px;
  width: 10%;
  cursor: pointer;
  border-radius: 8px;
}

.button2 {
  text-align: center;
  background-color: rgb(133, 201, 77);
  border: none;
  color: rgb(243, 243, 243);
  padding: 10px 10px;
  width: 10%;
  cursor: pointer;
  border-radius: 8px;
}
.button3 {
  text-align: center;
  background-color: rgb(103, 104, 103);
  border: #2a2e2d;
  color: rgb(243, 243, 243);
  padding: 10px 10px;
  width: 7%;
  cursor: pointer;
  border-radius: 8px;
  margin-left: cm;
}

.button:hover {
  background-color: #b64734;
}

.button2:hover {
  background-color: #aace93;
}

.button3:hover {
  background-color: #5c5c5c;
}

/* ตัวหนังสือ */
</style>
  -->
