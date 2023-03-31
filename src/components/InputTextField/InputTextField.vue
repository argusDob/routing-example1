<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="input-text">
    // eslint-disable-next-line vuejs-accessibility/label-has-for
    <label :for="id" class="input-text__label">{{ label }}</label>
    <input
      :id="id"
      :type="fieldType"
      class="input-text__field"
      :placeholder="placeholder"
      :name="name"
      :autocomplete="autocomplete"
      :required="required"
      v-model="valueData"
      @keyup="handleValue()"
    />
  </div>
</template>

<script>
export default {
  props: {
    autocomplete: {
      type: Boolean,
    },

    label: {
      type: String,
      required: true,
    },
    maxlength: {
      type: Number,
    },
    minlength: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      valueData: '',
      validationReport: {},
      isPasswordVisible: true,
      fieldType: this.type,
    };
  },
  computed: {
    id() {
      return `input-${Math.random().toString(36).substr(2, 9)}`;
    },
    isInputValid() {
      return this.isValid;
    },
  },
};
</script>

<style lang="scss" scoped src="./InputText.scss"></style>
