<template>
  <div class="nav-bar">
    <nav>
      <span v-for="link in filteredLinks" :key="link.path">
        <router-link :to="link.path" @click.native="handleClick(link)" exact
          >{{ link.label + "" }} |
        </router-link>
      </span>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

import navLinksList from './navBar.config';

const ALLOWED_LINKS = {
  isNotAuthenticated: ['Login', 'Home'],
  isAuthenticated: ['Home', 'Dashboard', 'Logout'],
};

export default {
  name: 'Nav-Bar',
  computed: {
    ...mapGetters('authentication', ['isAuthenticated']),
    ...mapState('authentication', {
      isAuthenticated: (state) => state.authState.isAuthenticated,
    }),
    filteredLinks() {
      const filteredLinks = navLinksList.filter((link) => {
        const isAllowed = ALLOWED_LINKS[
          this.isAuthenticated ? 'isAuthenticated' : 'isNotAuthenticated'
        ].includes(link.label);
        return isAllowed;
      });
      return filteredLinks;
    },
  },
  methods: {
    ...mapActions('authentication', ['logout']),

    async handleClick(link) {
      if (link.label === 'Logout') {
        const response = await this.logout();

        if (response === 200) {
          this.handleSuccessResponse();
        }
      }
    },
    handleSuccessResponse() {
      const path = '/home';
      if (this.$route.path !== path) {
        this.$router.push({ name: 'home' });
      }
    },
  },
};
</script>
