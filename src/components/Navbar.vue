<template>
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
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goTo(path) {
      this.$router.push(path).catch(() => {});
    },
  },
};
</script>

<style lang="css" scoped src="@/styles/navbar.css"></style>
