<template>
  <p>Doctor's comment on {{people.name}}'s vaccination' </p>
      <form class="review-form">
            <h3>Doctor review</h3>
            <input id="name" v-model="name">
            <p><label for="comment">Comment:</label>
            <textarea id="comment" v-model="comment"></textarea></p>
      
            <button type="button" class="btn btn-light" @click="submit">Light</button>
        </form>

        <!-- {{ Comments}} -->

        <ul>
          <li v-for="Acomment in Comments" v-bind:key="Acomment.name">{{Acomment.name}} : {{Acomment.comment}} </li>
        </ul>

</template>

<script>

export default {
  props: ['people', 'Comments'],
  data(){
    return{
      name: '',
      comment: ''
    }
  },
  methods:{
    submit(){
      let newComment ={
        name : this.name,
        comment : this.comment
      }
      this.$emit('comment', newComment);
    }
  } 
}
</script>
