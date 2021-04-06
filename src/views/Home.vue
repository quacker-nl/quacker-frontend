<template>
  <div class="home">
    <div class="row">
      <div class="col-3 nav-col"><Navbar /></div>
      <div class="col-5 main-col"></div>
      <div class="col-4 side-col"></div>
    </div>
  </div>
</template>

<script>
import QuackService from '@/services/quack.service.js';
import moment from 'moment';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  data() {
    return {
      quacks: [],
    };
  },
  components: {
    Navbar,
  },
  methods: {},
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
