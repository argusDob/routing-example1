<template>
  <div class="input-text">
    <label :for="id" class="input-text__label">{{ label }}</label>
    <input
      :id="id"
      :type="this.type"
      class="input-text__field"
      :name="name"
      :autocomplete="autocomplete"
      v-model="value"
      @keyup="handleValue()"
    />
  </div>
</template>

<script>
export default {
  name: 'Input-Text',
  props: {
    autocomplete: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: '',
    };
  },
  computed: {
    id() {
      return `input-${Math.random().toString(36).substr(2, 9)}`;
    },
  },
  methods: {
    handleValue() {
      const valueData = {
        name: this.name,
        value: this.value,
      };
      this.$emit('change', valueData);
    },
  },
};
</script>

<style lang="scss" scoped src="./InputText.scss"></style>
