<template>
  <div>
    <h2 ref="title">
      哈哈
    </h2>
    <NavBar ref="navBar">
      1
    </NavBar>
    <button @click="btnClick">
      获取元素
    </button>
  </div>
</template>

<script>
import NavBar from './NaBar.vue'
export default {
  components:{NavBar},
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {
     
    },
    methods: {
       btnClick(){  
        console.log(this.$refs.title);
        console.log(this.$refs.navBar.message);
      }
    }
};
</script>

<style scoped lang="less">

</style>
