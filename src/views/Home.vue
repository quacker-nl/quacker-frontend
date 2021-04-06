<template>
  <div class="home">
    <div class="row">
      <div class="col-3 nav-col">
        <div class="navbar">
          <div class="logo-container" @click="goTo('')">
            <img class="logo" src="@/assets/logo.png" alt="logo" />
            <h1>Quacker</h1>
          </div>

          <ul>
            <li>
              <md-button
                @click="goTo('')"
                class="nav-button md-dense md-raised md-primar"
              >
                <h2
                  :class="{
                    active: this.$route.name == 'Home',
                  }"
                >
                  <span class="material-icons">home</span>Home
                </h2></md-button
              >
            </li>
            <li>
              <md-button
                @click="goTo('mentions')"
                class="nav-button md-dense md-raised md-primary"
              >
                <h2
                  :class="{
                    active: this.$route.name == 'Mentions',
                  }"
                >
                  <span class="material-icons">notifications</span>Mentions
                </h2></md-button
              >
            </li>
            <li>
              <md-button
                @click="goTo('profile')"
                class="nav-button md-dense md-raised md-primary"
                ><h2
                  :class="{
                    active: this.$route.name == 'Profile',
                  }"
                >
                  <span class="material-icons">person</span>Profile
                </h2></md-button
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-5 main-col"></div>
      <div class="col-4 side-col"></div>
    </div>
  </div>
</template>

<script>
import QuackService from '@/services/quack.service.js';
import moment from 'moment';

export default {
  name: 'Home',
  data() {
    return {
      quacks: [],
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path).catch(() => {});
    },
  },
  mounted() {},
  filters: {
    formatDate: function(date) {
      if (date) {
        return moment(String(date)).fromNow();
      }
    },
  },
};
</script>

<style lang="css" scoped src="@/styles/home.css"></style>
