import { defineComponent,computed } from 'vue';
import { useStore } from 'vuex';
import {PostUserRecord} from "../api/home"
export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();
    const value = computed(()=>{
      return store.state.special.title
    })
    const requstFn = async ()=>{
      console.log("发起网络请求")
      const data = await PostUserRecord()
      console.log(data[0].code)
    }
    return () => (
      <div>
        <h1>Home</h1>
        <button onClick={()=>{
            store.dispatch('special/actionSetTitle');
            // store.commit('special/setTitle',"这也是新标题");
        }}>{value.value}</button>
        <br />
        <br />
        <button onClick={requstFn}>网络请求</button>
      </div>
    );
  }
});
