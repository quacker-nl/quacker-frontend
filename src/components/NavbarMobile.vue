<template>
  <div class="navbar">
    <div style="position: fixed;">
      <div class="logo-container" @click="goTo('')">
        <img class="logo" src="@/assets/logo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <md-button
            class="nav-button md-dense md-raised md-primary"
            @click="goTo('')"
          >
            <span
              :class="{
                active: this.$route.name == 'Home',
              }"
              class="material-icons"
              >home</span
            >
          </md-button>
        </li>
        <li>
          <md-button
            @click="goTo('mentions')"
            class="nav-button md-dense md-raised md-primary"
          >
            <span
              :class="{
                active: this.$route.name == 'Mentions',
              }"
              class="material-icons"
              >notifications</span
            ></md-button
          >
        </li>
        <li>
          <md-button
            @click="goTo('profile')"
            class="nav-button md-dense md-raised md-primary"
          >
            <span
              :class="{
                active: this.$route.name == 'Profile',
              }"
              class="material-icons"
              >person</span
            ></md-button
          >
        </li>
      </ul>
    </div>
    <div class="profile" v-if="currentUser != null">
      <transition name="appear">
        <div class="profile-card" v-if="toggleProfileCard">
          <div class="profile-card-row">
            <img
              class="profile-picture"
              src="https://pv-c.nl/wp-content/uploads/2011/08/person-placeholder.jpg"
              alt="profile picture"
            />
          </div>
          <hr />
          <p class="logout" @click="logOut">
            Log out @{{ currentUser.username }}
          </p>
        </div>
      </transition>
      <maskBg
        v-if="toggleProfileCard"
        @click.native="toggleProfileCard = false"
      />
      <button
        @click="toggleProfileCard = !toggleProfileCard"
        class="nav-button account-button md-primary"
      >
        <div class="profile-container">
          <img
            class="profile-picture"
            src="https://pv-c.nl/wp-content/uploads/2011/08/person-placeholder.jpg"
            alt="profile picture"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import maskBg from './Mask';

export default {
  name: 'Navbar',
  data() {
    return {
      toggleProfileCard: false,
    };
  },
  components: {
    maskBg,
  },
  methods: {
    goTo(path) {
      this.$router.push(path).catch(() => {});
    },
    logOut() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/login');
      });
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style lang="css" scoped src="@/styles/navbarMobile.css"></style>
