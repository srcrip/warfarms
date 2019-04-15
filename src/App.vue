<template lang="pug">
.app
  //- Main navigation
  nav.navbar(role='navigation' aria-label='main navigation')
    .navbar-brand
      a.navbar-item(href='https://bulma.io')
        h1.title Warfarms
      a.navbar-burger.burger(role='button' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample')
        span(aria-hidden='true')
        span(aria-hidden='true')
        span(aria-hidden='true')
    #navbarBasicExample.navbar-menu
      .navbar-start
        router-link(to='/').navbar-item
          | Clanhome
        router-link(:to='{ name: "forest", props: {season: "Spring" } }').navbar-item
          | Forest
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link
            | More
          .navbar-dropdown
            a.navbar-item
              | About
            a.navbar-item
              | Jobs
            a.navbar-item
              | Contact
            hr.navbar-divider
            a.navbar-item
              | Report an issue
      .navbar-end
        .navbar-item
          .field.is-grouped.is-grouped-multiline
            .control
              .tags.has-addons
                span.tag.is-dark Hours
                span.tag.is-primary {{ hours }}
        .navbar-item
          .buttons
            a.button.is-primary
              //- Turns are 1 week
              strong End Turn
            a.button.is-light
              | Log in
  //- Resources
  Resources(v-bind='resources')
  //- Main container
  .container
    .columns
      .column.is-3
        aside.menu
          p.menu-label
            | General
          ul.menu-list
            li
              a Dashboard
            li
              a Customers
          p.menu-label
            | Administration
          ul.menu-list
            li
              a Team Settings
            li
              a.is-active Manage Your Team
              ul
                li
                  a Members
                li
                  a Plugins
                li
                  a Add a member
            li
              a Invitations
            li
              a Cloud Storage Environment Settings
            li
              a Authentication
          p.menu-label
            | Transactions
          ul.menu-list
            li
              a Payments
            li
              a Transfers
            li
              a Balance
      .column.is-9
        router-view
</template>

<script>
import Resources from  '@/components/Resources.vue'

export default {
  name: 'home',
  data: function() {
    return {
      resources: {
        men: 14,
        food: 19,
        seeds: 100,
        wood: 1800,
        metals: 2,
      },
      //- 168 hours in 7 days
      hours: 168
    }
  },
  components: {
    Resources
  },
  methods: {
    endTurn: function () {
      this.hours = 168
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
