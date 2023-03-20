<template>
  <div>
    <h2>Login</h2>
    <div>
      <button
        class="login-from-github"
        @click="loginFromGithub"
      >
        <img 
          src="../assets/icons/github.svg"
          alt="GitHub"
          class="github-icon"
        />
        <b>LOGIN WITH GITHUB</b>
      </button>
      <button
        class="login-from-guest"
        @click="loginFromGuest"
      >
        <b>
          <span class="material-symbols-outlined guest-icon">admin_panel_settings</span>
          ゲストモードでログイン
        </b>
      </button>
    </div>
  </div>
</template>
<style scoped>
.login-from-guest{
  background-color: rgb(199, 199, 199);
}
.guest-icon{
  font-size: 1.3em;
  vertical-align: sub;
}
.login-from-github {
  background-color: #000;
  color:#fff
}
.github-icon{
  width:1.1em;
  vertical-align: sub;
  margin-right: 2px;
}
</style>
<script>
export default {
  name: "welcome",
  methods: {
    loginFromGithub() {
      
    }
  }
}
</script>