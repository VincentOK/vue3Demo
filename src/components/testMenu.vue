<template>
    <div class="test_menu">
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
        const testFn = <T = any>():void=>{
            console.log("=====")
        }
        return{
            Value,
            testFn
        }
    }
})
</script>
<style lang="scss" scoped>
.test_menu{
    width: 100px;
    height: 100px;
}
</style>