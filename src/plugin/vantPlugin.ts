import { App } from 'vue';
import {
    Button,
    RadioGroup, 
    Radio
} from 'vant';

export function setupVant(app: App<Element>){
    app.use(Button);
    app.use(RadioGroup);
    app.use(Radio);
}