<template>
    <div class="test_menu">
        <button class="btn" @click="testFn">{{Value}}</button>
        <span>{{fooName}}</span>
    </div>
</template>
<script lang="ts" setup>
// @ts-ignore
import {ref,defineProps,defineEmit} from 'vue';
const emit = defineEmit<{
  (e: 'parentsFn', id: number): void,
  (e: 'childrensFn', id: number): void
}>();
const props = defineProps<{
  fooName: {
    type: string,
    default: 'bbbbbb',
  }
}>();
const Value = ref<string>("按钮aaa");
const red_btn = ref<string>('red');
const testFn = <T = any>():void=>{
    console.log("=====")
    emit('parentsFn',111)
    emit('childrensFn',2222)
}
</script>
<style lang="scss" scoped>
.test_menu{
    width: 100px;
    height: 100px;
    color: "red";
    .btn{
        color: v-bind(red_btn);
    }
}

</style>