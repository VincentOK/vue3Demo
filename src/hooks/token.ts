import {computed,ref} from "vue";
import { useStore } from 'vuex';
export function getToken(){
    const store = useStore();
    const token = computed(()=>{
        return store.state.special.token
    })
    const refToken = ref(token);
    console.log("refToken",refToken.value)
    return {
        refToken
    }
}