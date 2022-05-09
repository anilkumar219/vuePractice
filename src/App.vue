<template>
  <div id="app">
    <ul class="flex">
      <li class="mr-6">
        <router-link to="/" class="text-blue-500 hover:text-blue-800">Home</router-link>
      </li>
      <li class="mr-6">
        <router-link to="/tutorials" class="text-blue-500 hover:text-blue-800">Tutorials</router-link>
      </li>
      <li class="mr-6">
        <router-link to="/add" class="text-blue-500 hover:text-blue-800">Add</router-link>
      </li>
      <li class="mr-6">
        <router-link to="/todos" class="text-blue-500 hover:text-blue-800">Todos</router-link>
      </li>
    </ul>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',  
};
</script>

