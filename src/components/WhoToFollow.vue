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
            <h3
              @click="
                $router.push({
                  name: 'Profile',
                  params: { username: user.username },
                })
              "
              class="display-name"
            >
              {{ user.username }}
            </h3>
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

    <div class="trends-container">
      <div class="follow-header">
        <h2>Trends</h2>
      </div>

      <div class="follow-body">
        <div v-for="trend in trends" :key="trend.id" class="user-row">
          <div class="username-container">
            <h3 class="display-name">
              {{ trend }}
            </h3>
          </div>
        </div>
      </div>
      <div class="follow-footer"></div>
    </div>
  </div>
</template>

<script>
import FollowService from '../services/follow.service';
import QuackService from '../services/quack.service';

export default {
  name: 'Navbar',
  data() {
    return {
      users: [],
      trends: [],
    };
  },
  methods: {
    follow(userId) {
      FollowService.follow(userId).then((x) => {
        FollowService.getUnfollowedUsers().then((response) => {
          this.users = response.data;
        });
      });
    },
  },
  computed: {},
  mounted() {
    FollowService.getUnfollowedUsers().then((response) => {
      this.users = response.data;
    });
    QuackService.getTrends().then((response) => {
      this.trends = response.data;
    });
  },
};
</script>

<style lang="css" scoped src="@/styles/whotofollow.css"></style>
