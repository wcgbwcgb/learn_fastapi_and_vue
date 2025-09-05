<template>
  <div id="app">
    <h1>Hello World! {{ userInfo.username.value }}</h1>

  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { userStore } from './store/User';
import { storeToRefs } from 'pinia';

const user = userStore()

user.$patch({
  username:"Hanson"
})

user.changeUsername("666")

console.log(user.username)
console.log(user.getUsername)

const userInfo = storeToRefs(user)

</script>

<style>
  body {
    background-color: #fff !important;
    color: #000 !important;
  }
</style>  