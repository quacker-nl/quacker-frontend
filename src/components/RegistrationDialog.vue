<template>
  <div>
    <md-dialog :md-active.sync="showRegistrationDialog">
      <div class="logo-container">
        <img class="logo" src="@/assets/logo.png" alt="logo" />
        <md-button
          @click="showRegistrationDialog = false"
          class="close-button md-dense md-raised md-primary"
          >Close</md-button
        >
      </div>

      <md-dialog-title>Create your account</md-dialog-title>

      <md-dialog-content>
        <md-field>
          <label>Username</label>
          <md-input v-model="registration.username"></md-input>
        </md-field>
        <md-field>
          <label>Email</label>
          <md-input v-model="registration.email"></md-input>
        </md-field>
        <md-field>
          <label>Password</label>
          <md-input type="password" v-model="registration.password"></md-input>
        </md-field>
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
            <md-field>
              <label for="month">Month</label>
              <md-select
                v-model="registration.birthdate.month"
                name="month"
                id="month"
              >
                <md-option value="1">january</md-option>
                <md-option value="2">february</md-option>
                <md-option value="3">march</md-option>
                <md-option value="4">april</md-option>
                <md-option value="5">may</md-option>
                <md-option value="6">june</md-option>
                <md-option value="7">july</md-option>
                <md-option value="8">august</md-option>
                <md-option value="9">september</md-option>
                <md-option value="10">october</md-option>
                <md-option value="11">november</md-option>
                <md-option value="12">december</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item">
            <md-field>
              <label for="day">Day</label>
              <md-select
                v-model="registration.birthdate.day"
                name="day"
                id="day"
              >
                <md-option v-for="day in days" :value="day" :key="day">{{
                  day
                }}</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item">
            <md-field>
              <label for="year">Year</label>
              <md-select
                v-model="registration.birthdate.year"
                name="year"
                id="year"
              >
                <md-option v-for="year in years" :value="year" :key="year">{{
                  year
                }}</md-option>
              </md-select>
            </md-field>
          </div>
        </div>
        <md-button
          @click="handleRegistration"
          class="signup-button md-raised md-primary"
          >Sign up</md-button
        >
      </md-dialog-content>

      <md-dialog-actions></md-dialog-actions>
    </md-dialog>

    <a id="signup" @click="showRegistrationDialog = true"
      >Sign up for Quacker</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      showRegistrationDialog: false,
      registration: {
        username: null,
        email: null,
        password: null,
        birthdate: {
          month: null,
          day: null,
          year: null,
        },
      },
    };
  },
  methods: {
    handleRegistration() {
      this.$store.dispatch('auth/register', this.registration).then(() => {
        this.showRegistrationDialog = false;
      });
    },
    daysInMonth(month, year) {
      if (month == null) {
        return 31;
      } else if (year == null) {
        return new Date(2021, month, 0).getDate();
      } else {
        return new Date(year, month, 0).getDate();
      }
    },
  },
  computed: {
    days() {
      return Array.from(
        {
          length: this.daysInMonth(
            this.registration.birthdate.month,
            this.registration.birthdate.year
          ),
        },
        (value, index) => 1 + index
      );
    },
    years() {
      const year = new Date().getFullYear();
      return Array.from(
        { length: year - 1900 },
        (value, index) => 1901 + index
      ).sort(function(a, b) {
        return b - a;
      });
    },
  },
};
</script>

<style scoped src="@/styles/registration.css"></style>
