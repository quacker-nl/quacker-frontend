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
          <md-input v-model="user.username"></md-input>
        </md-field>
        <md-field>
          <label>Password</label>
          <md-input v-model="user.password" type="password"></md-input>
        </md-field>
        <md-button
          @click="handleLogin"
          class="login-button md-raised md-primary"
          >Log in</md-button
        >
      </div>

      <div class="login-footer">
        <RegistrationDialog />
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationDialog from '@/components/RegistrationDialog.vue';
import User from '@/models/user';

export default {
  data() {
    return {
      user: new User(null, null),
    };
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('auth/login', this.user).then(() => {
        this.$router.push('/');
      });
    },
  },
  components: {
    RegistrationDialog,
  },
};
</script>

<style scoped src="@/styles/login.css"></style>
