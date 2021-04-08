<template>
  <div class="home">
    <div class="row">
      <div class="col-3 nav-col">
        <Navbar v-if="!mobile" /><NavbarMobile v-else />
      </div>
      <div v-bind:class="{ 'col-9': mobile }" class="col-4 main-col">
        <Quacks />
      </div>
      <div v-if="!mobile" class="col-5 side-col"></div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NavbarMobile from '@/components/NavbarMobile.vue';
import Quacks from '@/components/Quacks.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    NavbarMobile,
    Quacks,
  },
  methods: {},
  computed: {
    mobile() {
      const stackedBreakpoints = ['sm', 'md'];
      return stackedBreakpoints.includes(this.$mq);
    },
  },
};
</script>

<style lang="css" scoped src="@/styles/home.css"></style>
