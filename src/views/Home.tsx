import { defineComponent,computed,onMounted,watchEffect,ref,watch } from 'vue';
import { useStore } from 'vuex';
import {RouterLink} from 'vue-router';
import {PostUserRecord} from "../api/home"
import {ToastLoading} from "../plugin/loadingMesssage"
import "../style/home.scss"
export default defineComponent({
  name: 'App',
  setup(props,_) {
    const store = useStore();
    const value = computed(()=>{
      return store.state.special.title
    })
    const requstFn = async ()=>{
      console.log("====发起网络请求====")
      const data = await PostUserRecord()
      console.log(data[0].code)
    }
    onMounted(()=>{
      ToastLoading("loading....")
    })
    return () => (
      <div class="home">
        <h1>Home</h1>
        <RouterLink class="about" to="/about">About</RouterLink>
        <br />
        <br />
        <button onClick={()=>{
            store.dispatch('special/actionSetTitle');
            // store.commit('special/setTitle',"这也是新标题");
        }}>{value.value}</button>
        <br />
        <van-button type="primary">主要按钮</van-button>
        <br />
        <button class="btn_req" onClick={requstFn}>网络请求</button>
      </div>
    );
  }
});
