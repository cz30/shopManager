import { Button, Select ,Form,FormItem,Input,Message,Container,Header,Aside,Main,
    Menu,Submenu,MenuItemGroup,MenuItem} from 'element-ui';
import Vue from 'vue';
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
// 全局挂载属性
Vue.prototype.$message=Message