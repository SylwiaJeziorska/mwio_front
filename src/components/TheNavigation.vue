<template>
  <div class="nav">
    <ul>
      <li>
        <router-link 
        :to="{ 
          path: '/' }">
          home
        </router-link>
      </li>
      <li>
        <router-link 
        :to="{
           path: '/signin' }">
           Singn in
        </router-link>
      </li>
      <li>
        <router-link 
        :to="{
           path: '/dashboard' }">
           dashboard
        </router-link>
      </li>
      <li>
        <a href="#"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
