<template>
  <div id="home">
    <!-- 头部 -->
    <v-header></v-header>
    <!-- 主体部分 -->
    <v-main></v-main>
    <!-- 底部 -->
    <el-row class="g-ft">
    </el-row>
  </div>
</template>
<style lang="scss">
  
  .g-ft {
    height: 45px;
    border-top: 1px solid #eee;
  }
  
  
</style>
<script>
  import Header from './Header.vue';
  import Main from './Main.vue';
  export default {
    data() {
      return {
      }
    },
    mounted() {
      console.log('父组件的mounted方法')
    },
    components: {
      'v-header': Header,
      'v-main': Main
    }
  }
</script>