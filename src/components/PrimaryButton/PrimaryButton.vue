<template>
  <button :disabled=isDisabled class="primary-button">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped src="./PrimaryButton.scss"></style>
