<template>
    <div @click="a1Click">
About组件 
<button @click="a1Click">{{a1}}</button>
    </div>
</template>
<script>
export default {
    name:'about',
    data() {
        return {
          a1:0
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      a1Click(){
        this.a1++
      }
    }
};
</script>

<style scoped lang="less">

</style>
