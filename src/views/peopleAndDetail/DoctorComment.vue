<template>
  <p>Doctor's comment on {{people.name}}'s vaccination' </p>
      <form class="review-form">
            <h3>Doctor review</h3>
      
            <p><label for="comment">Comment:</label>
            <textarea id="comment" v-model="comment"></textarea></p>
      
            <button type="button" class="btn btn-light" @click="submit">Light</button>
        </form>
        {{ Comments }}
</template>

<script>

export default {
  props: ['people', 'Comments'],
  data(){
    return{
     
    }
  },
  methods:{
    submit(){
      this.$emit('comment', this.comment);
    }
  } 
}
</script>
