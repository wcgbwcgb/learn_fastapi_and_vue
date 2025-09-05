<template>
    <ul>
        <li><RouterLink to="/news/1?id=1&title=新闻1&content=asdfkareg">新闻1</RouterLink></li>
        <li><RouterLink :to="{
            path:'/news/2',
            query:{
                id:2,
                title:"新闻2",
                content:"cwkl"
            }
        }">新闻2</RouterLink></li>
    </ul>
    <div>
        <RouterView class="news-content"/>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<style>
    .news-content{
        background-color: yellow;
        height: 90%;
    }
</style>