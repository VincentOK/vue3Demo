<template>
    <div>
        <button @click="testFn">{{Value}}</button>
        <HelloWord/>
    </div>
</template>
<script lang="ts">
import HelloWord from '../components/HelloWord';
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:"TestMenu",
    components:{HelloWord},
    setup(props,_){
        const Value = ref<string>("按钮")
        const testFn = ():void=>{
            console.log("=====")
        }
        return{
            Value,
            testFn
        }
    }
})
</script>