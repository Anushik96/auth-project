<template>
  <div class="main-content">
    <Form class="form-register" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
      <div class="form-register-with-email">
        <div class="form-white-background">

          <div class="form-title-row">
            <h1>Create an account</h1>
          </div>

          <div class="form-row">
            <label>
              <pre>{{meta}}</pre>
              <span>Name</span>
              <Field name="firstName"
                     type="text"
                     class="form-control"
                     v-model="registerForm.name"
                     :class="{ 'is-invalid': errors.firstName }"/>
              <div v-if="errors.hasOwnProperty('firstName')"
                   class="invalid-feedback">{{ errors.firstName }}</div>
            </label>
          </div>

          <div class="form-row">
            <label>
              <span>Email</span>
              <Field name="email"
                     type="text"
                     class="form-control"
                     v-model="registerForm.email"
                     :class="{ 'is-invalid': errors.email }"/>
              <div class="invalid-feedback">{{ errors.email }}</div>
            </label>
          </div>

          <div class="form-row">
            <label>
              <span>Password</span>
              <Field name="password"
                     type="password"
                     class="form-control"
                     v-model="registerForm.password"
                     :class="{ 'is-invalid': errors.password }"/>
              <div class="invalid-feedback">{{ errors.password }}</div>
            </label>
          </div>

          <div class="form-row">
            <label class="form-checkbox">
              <input type="checkbox" name="checkbox" checked>
              <span>I agree to the <a href="#">terms and conditions</a></span>
            </label>
          </div>

          <div class="form-row">
            <button type="submit">Register</button>
          </div>

        </div>
        <router-link class="form-log-in-with-existing" :to="{name: 'login'}">Already have an account? Login here
          &rarr;
        </router-link>

      </div>
    </Form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import {Form, Field} from 'vee-validate';
import * as Yup from 'yup';
import {Store, useStore} from "@/store";
import {ActionTypes} from "@/store/auth/action";
export default defineComponent({
  name: 'register',
  components: {
    Form,
    Field,
  },

  setup() {
    type RegisterForm = {
      name: string,
      email: string,
      password: string
    }
    const store: Store = useStore();

    const registerForm: RegisterForm = reactive({
      name: '',
      email: '',
      password: ''
    })

    const schema = Yup.object().shape({
      firstName: Yup.string()
          .required('First Name is required'),
      email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
      password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
    });

    const onSubmit = () => {
      return store.dispatch(ActionTypes.register, registerForm);
    }
    return {
      registerForm,
      schema,
      onSubmit
    }
  }
})
</script>

<style scoped>
</style>