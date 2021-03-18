<template>
  <div class="login">
    <div class="login-main">
      <div class="login-header">
        <img class="logo" src="../assets/logo.png" alt="logo" />
        <h1>Log in to Quacker</h1>
      </div>
      <div class="login-body">
        <md-field>
          <label>Email or username</label>
          <md-input></md-input>
        </md-field>
        <md-field>
          <label>Password</label>
          <md-input type="password"></md-input>
        </md-field>
        <md-button class="md-raised md-primary">Log in</md-button>
      </div>
      <div class="login-footer">
        <a id="signup">Sign up for Quacker</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped src="@/styles/login.scss"></style>
