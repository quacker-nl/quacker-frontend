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
          <md-textarea md-autogrow></md-textarea>
        </md-field>
        <md-button
          @click="showRegistrationDialog = false"
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
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      quacks: [],
    };
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
