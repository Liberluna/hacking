<template>
  <div>
      <p>Liberlunaの、TryHack Site。</p>
      <button
        class="go-try-hack"
        @click="goTryHack"
      >Try hack!</button>
  </div>
</template>
<style scoped>
.go-try-hack {
  background-color: #d3d0ff;
}
</style>
<script>
export default {
  name: "welcome",
  methods: {
    goTryHack() {
      this.$router.push('/login')
    }
  }
}
</script>