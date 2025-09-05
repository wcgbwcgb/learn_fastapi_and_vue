<template>
    姓名：<input v-model="salaryInfo.userName"/> <br/>
    薪水：<input type = "number" v-model="salaryInfo.salary"/>
    {{ salaryInfo }}

</template>

<script lang="ts">
    export default {
        name:"SalaryInfo"
    }
</script>

<script setup lang="ts">
import type {SalaryInfo} from "@/types/salaryInfo.ts"

defineProps<{salaryInfo:SalaryInfo}>()
</script>

<style>

</style>