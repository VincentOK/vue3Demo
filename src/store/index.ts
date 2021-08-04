import {App} from "vue"
import { createStore } from 'vuex'
import special from './modules/special'
const store = createStore({
  modules: {
    special,
  }
})
export function setupStore(app: App<Element>) {
  app.use(store);
}
export default store