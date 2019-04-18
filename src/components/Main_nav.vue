<template>
  <!-- 左侧导航 -->
  <div  class="m-nav">
    <el-menu router default-active="2"  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu v-for="(item, key) in nav" :key="item.id" :index="key + ''">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for="item in item.children" :key="item.id" :index="item.router">{{item.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style lang="scss">
  .m-nav {
    overflow-y: auto;
    width: 200px;
    border-right: 1px solid #eee;
    // background-color: #fcfcfc;
    .el-menu-item, .el-submenu__title {
    	height: 35px;
    	line-height: 35px;
    }
  }
   .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 200px;
  }
</style>

<script>
	export default {
		data() {
	      return {
	      	 isCollapse: true,
	      	 nav: []
	      }
	    },
	    methods: {
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
	        },
		    handleClose(key, keyPath) {
		        console.log(key, keyPath);
		    }
	    },
	    mounted() {
	    	this.$http.get('/static/json/nav.json')
	    	.then((res) => {
	    		this.nav = res.data;
	    	});
	    },
	    components: {
        
	    }
	}
</script>