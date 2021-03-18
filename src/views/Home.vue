<template>
  <div class="home">
    <h1>🦆Welcome to Quacker🦆</h1>
    <div class="whats-happening">
      <h2>What's happening?</h2>
      <div class="quack">
        <textarea id="submit-quack-area" v-model="quackMessage" />
        <button @click="addQuack" class="submit-button">Quack</button>
      </div>
    </div>
    <div class="quacks-timeline">
      <h2>Timeline</h2>
      <div class="quack" v-for="quack in quacks" :key="quack.id">
        <p class="quack-message">{{ quack.message }}</p>
        <p class="quack-date">{{ quack.createdOn | formatDate }}</p>
      </div>
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
      quackMessage: '',
    };
  },
  methods: {
    addQuack() {
      let quack = {
        message: this.quackMessage,
      };
      QuackService.addQuack(quack).then((response) => {
        console.log(response.data);
        this.quacks.push(response.data);
        this.quacks.sort(function(a, b) {
          return new Date(b.createdOn) - new Date(a.createdOn);
        });
      });
    },
  },
  mounted() {
    QuackService.getQuacks().then((response) => {
      this.quacks = response.data;
      this.quacks.sort(function(a, b) {
        return new Date(b.createdOn) - new Date(a.createdOn);
      });
    });
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

<style scoped src="@/styles/home.css"></style>
