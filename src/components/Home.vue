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
        <v-content v-if="renderContent === '0'"></v-content>
        <v-contenta v-else></v-contenta>
    </el-row>
    <!-- 底部 -->
    <el-row class="g-ft">
       <div  v-if="renderContent === '0'">0</div>
        <div  v-else-if="renderContent === '1'">1</div>
        <div  v-else>0</div>
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
  import Header from './pub/Header.vue';
  import Nav from './pub/Main_nav.vue';
  import Content from './pub/Main_content.vue';
  import Content1 from './pub/Main_content1.vue';
  export default {
    data() {
      return {
          navHeight: 0,
          renderContent: '0'
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


        this.$http.get('http://localhost:3000/check_name', {
          params: {
            username: '1234'
          }
        })
        .then((data) => {
          console.log(data);
        });
    },
    beforeRouteUpdate(route, oldRoute, next) {
      this.renderContent = route.params.id;
      next();
    },
    components: {
      'v-header': Header,
      'v-nav': Nav,
      'v-content': Content,
      'v-contenta': Content1,
    }
  }
</script>