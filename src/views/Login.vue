<template>
  <div class="login">
    <div class="login-main">
      <div class="login-header">
        <img class="logo" src="@/assets/logo.png" alt="logo" />
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
        <md-button class="login-button md-raised md-primary">Log in</md-button>
      </div>

      <div class="login-footer">
        <RegistrationDialog />
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationDialog from '@/components/RegistrationDialog.vue';

export default {
  data() {
    return {};
  },
  components: {
    RegistrationDialog,
  },
};
</script>

<style scoped src="@/styles/login.css"></style>
