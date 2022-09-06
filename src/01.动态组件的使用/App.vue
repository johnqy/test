<template>
  <div id="app">
    <button
      v-for="item in tabs"
      :key="item"
      :class="{active:currentTab===item}"
      @click="itemClick(item)"
    >
      {{ item }}
    </button>
    <keep-alive include="home,about">
      <component
        :is="currentTab"
        name="laowang"
        :age="18"
        @pageClick="pageClick"
      />
    </keep-alive>



  <!-- <template v-if="currentTab ==='home'">
    <Home></Home>
  </template>
  <template v-else-if="currentTab ==='about'">
    <About></About>
  </template>
  <template v-else>
    <Category></Category>
  </template> -->
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'
export default {
  name: 'App',
  components:{
    Home,
    About,
    Category

  },
  data() {
    return {
      tabs:["home","about","category"],
      currentTab:'home',
      laowang:'老王'
    }
     
  },
  methods:{
    itemClick(item){
      this.currentTab=item
    },
    pageClick(){
      console.log('内部发生了点击');
    }
    
  }
}
</script>

<style scoped>
  .active{
color: brown;
  }
</style>
