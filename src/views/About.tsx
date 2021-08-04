import { defineComponent } from 'vue';
import HelloWord from '../components/HelloWord';
import TestMenu from "../components/testMenu.vue";
import Logo from '../assets/logo.png';
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
        <h1>About</h1>
        <img src={Logo}/>
        <HelloWord/>
        <TestMenu/>
      </div>
    );
  }
});
