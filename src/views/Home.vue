<template>
    <div class="home">
        <h1>Home</h1>
        <RouterLink class="about" to="/about">About</RouterLink>
        <br />
        <br />
        <button @click="btnFn">{{value}}</button>
        <br />
        <van-button type="primary">主要按钮</van-button>
        <br />
        <button class="btn_req" @click="requstFn">网络请求</button>
    </div>
</template>
<script lang="ts" setup>
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { RouterLink } from 'vue-router';
import { PostUserRecord } from '../api/home';
import { ToastLoading } from '../plugin/loadingMesssage';
const store = useStore();
const value = computed(() => {
  return store.state.special.title;
});
const requstFn = async () => {
  console.log('====发起网络请求====');
  const data = await PostUserRecord();
  console.log(data[0].code);
};
const btnFn = ()=>{
    store.dispatch('special/actionSetTitle');
    // store.commit('special/setTitle',"这也是新标题");
}
ToastLoading('loading....');
</script>
<style scoped lang="scss">
.home{
    .about{
        font-size: 20px;
        font-weight: bold;
    }
    .btn_req{
        width: 80px;
        height: 30px;
    }
}
</style>
