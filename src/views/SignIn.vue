<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6  ofsset-md-3 jumbotron">
        <div class="card card-log">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="submit">
              <div class="form-group">
                <label class="col-form-label" for="email">Email: </label>
                <input type="text" name="email" id="email" v-model="form.email"/>
              </div>
              <div class="form-group">
                <label class="col-form-label" for="password">Password: </label>
                <input type="password" name="password" id="password" v-model="form.password" />
              </div>
              <button class="btn btn-long btn-success" type="submit">Sagnin</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'SignIn',
  components: {},
  data (){
    return {
      form:{
        email:'',
        password:''
      }
    }
  },
  methods: {
    async submit() {
      let response = axios.post('http://127.0.0.1:8000/api/auth/signin', this.form);
      console.log(response);
    },
  },
};
</script>