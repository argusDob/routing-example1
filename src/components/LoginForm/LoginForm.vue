<template>
  <div class="login-form">
    <div class="login-form__container">
        <MessageBlock :message="messageBlock.message" :type="messageBlock.type"/>
      <form @submit.prevent="submit">
        <div v-for="(field, index) in fields" :key="index">
          <InputText v-bind="field" @change="handleChange" />
        </div>
        <div class="login-form__submit-button">
          <SubmitButton text="Submit" :isDisabled="isSubmitting" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import InputText from '../InputText/InputText.vue';
import MessageBlock from '../MessageBlock/MessageBlock.vue';
import SubmitButton from '../PrimaryButton/PrimaryButton.vue';

import getFormConfig from './login.form.config';

export default {
  components: {
    InputText,
    MessageBlock,
    SubmitButton,
  },
  props: {},
  data() {
    return {
      fields: getFormConfig(),
      formValues: [],
      isSubmitting: false,
      username: '',
      password: '',
      messageBlock: {
        message: '',
        type: '',
      },
    };
  },

  methods: {
    ...mapActions('authentication', ['login']),

    handleChange(valueData) {
      const fieldMap = {
        username: 'username',
        password: 'password',
      };

      const fieldName = fieldMap[valueData.name];
      if (fieldName) {
        this[fieldName] = valueData.value;
      }
    },
    async handleLogin() {
      try {
        await this.login({ username: this.username, password: this.password });
        this.isSubmitting = false;
        this.$router.push(this.$route.query.redirect || '/dashboard');
      } catch (error) {
        const myError = JSON.parse(error.message);
        this.messageBlock.message = myError.message;
        this.messageBlock.type = 'warning';
        this.isSubmitting = false;
      }
    },
    async submit() {
      this.isSubmitting = true;

      if (!this.username || !this.password) {
        this.messageBlock.message = 'Fields Cannot be empty';
        this.messageBlock.type = 'warning';
        this.isSubmitting = false;
        return;
      }

      this.handleLogin(this.username, this.password);
    },
  },
};
</script>

<style lang="scss" scoped src="./LoginForm.scss"></style>
