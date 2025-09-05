<template>
    <p>新闻ID：{{ query.id }}</p>
    <p>新闻标题：{{ query.title }}</p>
    <p>新闻内容：{{ query.content }}</p>
</template>
<script setup lang="ts">
import { toRef } from 'vue';
import { useRoute } from 'vue-router';
let route = useRoute()
console.log(route.query)
let query = toRef(route, 'query')
</script>
<style scoped>
</style>