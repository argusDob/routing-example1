<template>
  <div v-if="message.length" class="message-block" :class="additionalClasses" aria-live="polite">
    <span>{{ message }}</span>
  </div>
</template>

<script>
const MESSAGE_TYPE_CLASSES = {
  warning: 'message-block__warning',
  success: 'message-block__success',
};

export default {
  name: 'Message-Block',
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
      return MESSAGE_TYPE_CLASSES[this.type] ? [MESSAGE_TYPE_CLASSES[this.type]] : [];
    },
  },
};
</script>

<style lang="scss" scoped src="./MessageBlock.scss"></style>
