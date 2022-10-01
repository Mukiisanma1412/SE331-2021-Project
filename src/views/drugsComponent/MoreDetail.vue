<template>
  <div class="hello">
    <h1
      class="display-6"
      style="color: #626262; text-align: center; margin: 0.5cm"
    >
      Drug Detail
    </h1>
  </div>
  <button class="button3" @click="back()">Back</button>



  <!-- การ์ดยา -->
  <div class="druglist">
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="container" style="text-align: right">
            <button class="button" @click="greet" v-if="!isLoading">Play voice</button>
            <transition name="fade" v-if="isLoading">
    <pulse-loader></pulse-loader>
  </transition>
            <!-- <button class="button1" v-if>Edit</button> -->
          </div>

          <h1>Name: {{ drug.name }}</h1>
          <h2>
            Shot Description:
            <h4>{{ drug.shortDesc }}</h4>
          </h2>
          <h2>
            Description:
            <h4>{{ drug.description }}</h4>
          </h2>
          <h2>
            How to take:
            <h4>{{ drug.howToTake }}</h4>
          </h2>
          
          <font-awesome-icon icon="fa-sharp fa-solid fa-volume"  />
          <!-- <button class="button">Delete</button> -->
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import EventService from "@/service/EventService.js";
import PulseLoader from 'vue-spinner/src/SyncLoader.vue'

// import { watchEffect } from '@vue/runtime-core'
// import * as yup from 'yup'
// import ROUTE_PATH from '@/constants/router.js'

export default {
  props: ["id"],
  data() {
    return {
      drug: null,
      isLoading: true,
      name: 'Hello world',
      selectedVoice: 1,
      synth: window.speechSynthesis,
      voiceList: [],
      greetingSpeech: new window.SpeechSynthesisUtterance()
    };
  },
  components: {
    PulseLoader
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
  
  mounted () {
    // wait for voices to load
    // I can't get FF to work without calling this first
    // Chrome works on the onvoiceschanged function
    this.voiceList = this.synth.getVoices()
    if (this.voiceList.length) {
      this.isLoading = false
    }
    this.synth.onvoiceschanged = () => {
      this.voiceList = this.synth.getVoices()
      // give a bit of delay to show loading screen
      // just for the sake of it, I suppose. Not the best reason
      setTimeout(() => {
        this.isLoading = false
      }, 800)
    }
    this.listenForSpeechEvents()
  },
  methods: {
    back() {
      this.$router.push({ path: '/' });
    },
    /**
     * React to speech events
     */
     listenForSpeechEvents () {
      this.greetingSpeech.onstart = () => {
        this.isLoading = true
      }
      this.greetingSpeech.onend = () => {
        this.isLoading = false
      }
    },
    /**
     * Shout at the user
     */
    greet () {
      // it should be 'craic', but it doesn't sound right
      this.greetingSpeech.text = `${this.drug.shortDesc}.`
      this.greetingSpeech.voice = this.voiceList[this.selectedVoice]
      this.synth.speak(this.greetingSpeech)
    }
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
 
