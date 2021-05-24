<template>
  <div>
    <div class="title-container">
      <h2>Home</h2>
    </div>
    <hr />
    <div class="quack-container">
      <div class="picture-col">
        <img
          class="profile-picture"
          src="https://pv-c.nl/wp-content/uploads/2011/08/person-placeholder.jpg"
          alt="profile picture"
        />
      </div>
      <div class="quack-col">
        <md-field class="quack-textarea">
          <label>What's happening?</label>
          <md-textarea v-model="quackMessage" md-autogrow></md-textarea>
        </md-field>
        <md-button
          @click="postQuack"
          class="quack-button md-dense md-raised md-primary"
          >Quack</md-button
        >
      </div>
    </div>
    <hr />
    <div class="break"></div>
    <hr />
    <div class="quacks">
      <div class="empty" v-if="quacks.length == 0">
        <h2>Welcome to Quacker</h2>
        <p>
          This is the best place to see what’s happening in your world. Find
          some people and topics to follow now.
        </p>
      </div>
    </div>
    <div class="quack-row" v-for="quack in quacks" :key="quack.id">
      <div class="quack-picture-col">
        <img
          class="profile-picture"
          src="https://pv-c.nl/wp-content/uploads/2011/08/person-placeholder.jpg"
          alt="profile picture"
        />
        <h3
          @click="
            $router.push({
              name: 'Profile',
              params: { username: quack.username },
            })
          "
        >
          {{ quack.username }}
        </h3>
        <p>{{ quack.createdOn | formatDate }}</p>
      </div>
      <div class="quack-col">
        <p class="quack-message">{{ quack.message }}</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import QuackService from '../services/quack.service';
import TimelineService from '../services/timeline.service';
import moment from 'moment';

export default {
  data() {
    return {
      quacks: [],
      quackMessage: null,
    };
  },
  methods: {
    postQuack() {
      let quack = {
        message: this.quackMessage,
      };
      QuackService.postQuack(quack).then((response) => {
        this.quacks.push(response.data);
        this.quacks.sort(function(a, b) {
          return new Date(b.createdOn) - new Date(a.createdOn);
        });
        this.quackMessage = null;
      });
    },
  },
  mounted() {
    TimelineService.getTimeline().then((response) => {
      this.quacks = response.data;
      this.quacks.sort(function(a, b) {
        return new Date(b.createdOn) - new Date(a.createdOn);
      });
    });
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

<style lang="css" scoped src="@/styles/quacks.css"></style>
