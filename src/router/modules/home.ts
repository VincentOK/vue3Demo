import { RouteRecordRaw } from 'vue-router';
const home: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    }
];
export default home;
