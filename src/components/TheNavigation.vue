<template>
  <div class="nav">
    <ul>
      <li>
        <router-link :to="{ 
          path: '/' }">home</router-link>
      </li>

      <template v-if="authenticated">
        <li>
          <router-link :to="{
           path: '/dashboard' }">dashboard</router-link>
        </li>
        <li>{{user.name}}</li>
        <li @click.prevent="signOut">SignOut</li>
      </template>
      <template v-else>
        <li>
          <router-link :to="{
           path: '/signin' }">Singn in</router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      test: null,
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut'
    }),
    signOut () {
      this.signOutAction().then(()=>{
        this.$router.replace({
          name:'Home'
        })
      })
    }
  }
};
</script>
