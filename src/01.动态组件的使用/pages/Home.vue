<template>
    <div @click="divClick">
      heme组件{{name}}--{{age}}
    </div>
</template>

<script>
export default {
   name:"home",
    data() {
        return {

        };
    },
    props:{
      name:{
        type:String,
        default:''
      },
      age:{
        type:Number,
        default:0
      }
    },
    emits:["pageClick"],
    created() {

    },
    mounted() {

    },
    methods: {
      divClick(){
        this.$emit("pageClick")
      }
    } 
};
</script>

<style scoped lang="less">

</style>
