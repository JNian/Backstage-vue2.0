<template>
  <!-- 中间主体部分 -->
  <el-row class="g-main" :style="{'height': $store.state.home.height + 'px'}">
      <!-- 左侧导航 -->
      <v-nav></v-nav>
      <!-- 右侧内容部分 -->
      <v-content></v-content>
  </el-row>
</template>
<style lang="scss">
  .g-main {
    display: flex;
    .m-nav {
      width: 200px;
      border-right: 1px solid #eee;
    }
    .m-content {
      flex: 1;
      background-color: #eee;
    }
  }
</style>

<script>
  import Nav from './Main_nav.vue';
  import Content from './Main_content.vue';
	export default {
		  data() {
	      return {
	        navHeight: 0,
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
	    components: {
        'v-nav': Nav,
        'v-content': Content
	    }
	}
</script>