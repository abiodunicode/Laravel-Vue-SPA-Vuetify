<template>

<div id="app" class="pa-15">
  <v-card

class=" pa-5 mx-auto"
  elevation="6"
  outlined
  shaped
  width="500"
>
 <v-card-text class="mb-0 ">
      
      <p class="text-h6 text--primary text-center ">
       Welcome... Login to your account
      </p>
    
    </v-card-text>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

  <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>


    <v-text-field
      v-model="password"
      :counter="5"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>

  

    

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>

   <div class="text--primary mt-3">
      <p>   Don't have an account yet ?<router-link @click.native="Registration" to="/Registration"> Sign Up</router-link> | Go Home  </p>
      </div>

      {{email}}
  </v-card>
</div>

</template>

<script>
  export default {
    data: () => ({
      valid: true,
      password: '',
      email: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 5) || 'Name must be greater than 5 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
     
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
        alert(this.email);
        alert(this.password);
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
