<template>
  <div class="nav-bar">
    <router-link :to="path">{{ label }} </router-link>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
};
</script>
