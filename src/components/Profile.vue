<template>
  <div>
    <div class="title-container">
      <span @click="goTo('home')" class="material-icons back-arrow">west</span>
      <h2>{{ currentUser.username }}</h2>
    </div>
    <hr />
    <div class="profile-container">
      <img
        class="profile-picture"
        src="https://pv-c.nl/wp-content/uploads/2011/08/person-placeholder.jpg"
        alt="profile picture"
      />
      <h2 class="name">{{ currentUser.username }}</h2>
      <p class="username">@{{ currentUser.username }}</p>
      <p>
        Former pro Overwatch player. Former full time streamer. Lets grow dude.
        Now farmer in the summer and gamer in the winter. http://dafranaim.com
        my aim course
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import FollowService from '../services/follow.service';

export default {
  data() {
    return {};
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  filters: {
    formatDate: function(date) {
      if (date) {
        return moment(String(date)).fromNow();
      }
    },
  },
};
</script>

<style lang="css" scoped src="@/styles/profile.css"></style>
