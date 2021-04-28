<template>
  <div class="whotofollow">
    <div class="follow-container">
      <div class="follow-header">
        <h2>Who to follow</h2>
      </div>

      <div class="follow-body">
        <div v-for="user in users" :key="user.userId" class="user-row">
          <img
            class="profile-picture"
            src="https://pv-c.nl/wp-content/uploads/2011/08/person-placeholder.jpg"
            alt="profile picture"
          />
          <div class="username-container">
            <h3 class="display-name">{{ user.username }}</h3>
            <p class="username">@{{ user.username }}</p>
          </div>
          <md-button
            @click="follow(user.userId)"
            class="follow-button md-dense md-raised md-primary"
            >Follow</md-button
          >
        </div>
      </div>
      <div class="follow-footer"></div>
    </div>
  </div>
</template>

<script>
import AccountService from '../services/account.service';
import FollowService from '../services/follow.service';

export default {
  name: 'Navbar',
  data() {
    return {
      users: [],
    };
  },
  methods: {
    follow(userId) {
      FollowService.follow(userId);
    },
  },
  computed: {},
  mounted() {
    AccountService.getAccounts().then((response) => {
      this.users = response.data;
    });
  },
};
</script>

<style lang="css" scoped src="@/styles/whotofollow.css"></style>
