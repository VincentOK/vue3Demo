<template>
    <div>
        <h1>About</h1>
        <HelloWord />
        <TestMenu :fooName="'aaaa'" @parentsFn="getChildren" @childrensFn="getParents"/>
      </div>
</template>
<script lang="ts" setup>
import TestMenu from "@/components/TestMenu.vue";
import { defineComponent } from 'vue';
import HelloWord from '../components/HelloWord';

const getChildren = (data: number) =>{
    console.log("子组件传过来的值",data)
}
const getParents = (data: number) =>{
    console.log("======子组件传过来的值",data)
}
</script>
<style scoped lang="scss">

</style>
