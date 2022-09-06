<template>
  <div>
    app组件
    <home />
    <async-category />
    <suspense>
      <template #default>
        <async-category />
      </template>
      <template #fallback>
        <loading />
      </template>
    </suspense>
  </div>
</template>
 
<script>
import { defineAsyncComponent } from 'vue'
import Loding from './loading.vue'
import Home from './home.vue'
import Loading from './loading.vue'
// const AsyncCategory = defineAsyncComponent(()=>import('./about.vue'))
const AsyncCategory = defineAsyncComponent({
  loader: () => import("./about.vue"),
  lodingComponent: Loding,
  // errorComponent: errorComponent,
  delay: 200,
  // err :错误信息 
  // retry:重新加载
  // attempts:几率尝试的次数
  /* */
  // onError:function(err,retry,fail,attempts){
  // }

})

export default {
  components: { Home, AsyncCategory, Loading },
  data () {
    return {

    };
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
};
</script>

<style scoped lang="less">
</style>
