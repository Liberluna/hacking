<script setup lang="ts">

</script>

<template>
  <div class="main">
    <h1>LemoNet</h1>
    <router-view />
  </div>
</template>
<script lang="ts">
export default {
  data(){},
  methods: {}
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
