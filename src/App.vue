<script setup lang="ts">
import Welcome from "./components/Welcome.vue"
import Select from "./components/Select.vue"
</script>

<template>
  <div class="main">
    <Welcome
      @onClick="goTryHack"
      :class="{none: (page!=='goTryHack')}"
    />
    <Select
      :class="{none: (page!=='select')}"
    />
  </div>
</template>
<script lang="ts">
export default {
  data(){
    return {
      page:"goTryHack"
    }
  },
  methods: {
    goTryHack(){
      this.page="select"
    }
  }
}
</script>
<style scoped>
.main{
  background-color: #fff;
  padding: 10px;
}
.none{
  display: none;
}
</style>
<style>
body{
  background-image: url("./assets/bg/1.jpg");
  background-size: cover;
}
</style>
