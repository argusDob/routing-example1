<template>
  <div class="login-form-view">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm/LoginForm.vue';

export default {
  name: 'Login-View',
  components: {
    LoginForm,
  },
};
</script>
