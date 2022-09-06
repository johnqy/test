import Vue from 'vue'
import App from './03.引用元素和组件/app.vue'
// import {sum} from './02.异步组件的使用/utils/math';
// console.log(sum(1,2));

// 通过import函数导入的模块。打包会进行分包
// import("./02.异步组件的使用/utils/math").then((res)=>{
//   console.log(res.sum(20,30));
// })


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')