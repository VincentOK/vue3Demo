// 导入模块
import { RouteRecordRaw } from 'vue-router';
const modules = import.meta.globEager('./modules/*.ts')
let asyncRoutes: RouteRecordRaw[] = [];
Object.keys(modules).forEach(file => {
    asyncRoutes = asyncRoutes.concat(modules[file].default);
})
export default asyncRoutes
