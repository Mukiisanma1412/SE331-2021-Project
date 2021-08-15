<template>
  <p>Doctor's comment on {{people.name}}'s vaccination' </p>
  <form class="review-form" @submit.prevent="onSubmit">
            <h3>Doctor review</h3>
            <p><label for="name">Name:</label>
            <input id="name" v-model="name"></p>
            <p><label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea></p>
            
            <input class="button" type="submit" value="Submit">
        </form>
        
</template>

<script>

export default {
  props: ['people'],
  
}
</script>
