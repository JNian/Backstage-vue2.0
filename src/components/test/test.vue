<template>
  <div id="home">
    <!-- 头部 -->
    <v-header></v-header>
     <!-- 中间主体部分 -->
    <el-row class="g-main" :style="{'height': $store.state.home.height + 'px'}">
        <!-- 左侧导航 -->
        <keep-alive>
          <v-nav></v-nav>
        </keep-alive> 
        <!-- 右侧内容部分 -->
        <v-content></v-content>
    </el-row>
    <!-- 底部 -->
    <el-row class="g-ft">
    </el-row>
  </div>
</template>
<style lang="scss">

  .g-main {
    display: flex;
    .m-nav {
    }
    .m-content {
      flex: 1;
    }
  }
  .g-ft {
    height: 45px;
    border-top: 1px solid #eee;
  }
  
  
</style>
<script>
  import Header from '../pub/Header.vue';
  import Nav from '../pub/Main_nav.vue';
  import Content from '../pub/Main_content.vue';
  export default {
    data() {
      return {
          navHeight: 0,
          content: 0

      }
    },
    mounted() {
        // 动态设置导航的高度
        let h = (document.documentElement.clientHeight) - 100;
        let that = this;
        that.$store.state.home.height = h
        // 监听浏览器视口的大小事件
        window.onresize = function(){
          h =  (document.documentElement.clientHeight) - 100;
          that.$store.state.home.height = h
        }


    },
    activated() {
        this.content = this.$route.params.id;
        console.log(this.content, 'id');
    },
    components: {
      'v-header': Header,
      'v-nav': Nav,
      'v-content': Content
    }
  }
</script>