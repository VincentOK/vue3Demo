import { RouteRecordRaw } from 'vue-router';
const about: RouteRecordRaw[] = [
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
    },
];
export default about;
