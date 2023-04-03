<template>
  <div class="home-input">
    <h1>Home</h1>
    <LinkAction v-if="isAuthenticated" label="Go to Dashboard" path="/dashboard" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LinkAction from '../LinkAction/LinkAction.vue';

export default {
  name: 'HomeInput',
  components: {
    LinkAction,
  },
  computed: {
    ...mapState('authentication', {
      isAuthenticated: (state) => state.authState.isAuthenticated,
    }),
  },
};
</script>
