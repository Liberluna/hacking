<template>
  <div>
    <h2>Select Stage</h2>
    <div class="stage-map">
      <ul v-for="question in questions.questions">
        <li>
          {{ question }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.stage-map{
  overflow-y: scroll;
  width:100%;
  height: 100%;
}
</style>
<script lang="ts">
import questions from "../question/questions.json";
console.log(questions)
export default {
  name: "select",
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>