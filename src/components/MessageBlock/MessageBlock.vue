<template>
    <div v-if="message.length" class="message-block" :class="additionalClasses" aria-live="polite">
        <span>{{ message }}</span>
    </div>
  </template>

<script>

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    additionalClasses() {
      const classes = [];
      if (this.type === 'warning') { classes.push('message-block__warning'); }
      if (this.type === 'success') { classes.push('message-block__success'); }
      return classes;
    },
  },
};
</script>

<style lang="scss" scoped src="./MessageBlock.scss"></style>
