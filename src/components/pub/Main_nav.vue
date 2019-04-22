<template>
  <!-- 左侧导航 -->
  <div  class="m-nav">
    <el-menu  :default-active="currentMenu" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect">
      <el-submenu v-for="(item, key) in nav" :key="item.id" :index="key + ''">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for="item in item.children" :key="item.id" :index="item.router">{{item.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style lang="scss">
  .m-nav {
    .el-menu {
        border: none;
    }
    overflow-y: auto;
    width: 210px;
    // border-right: 1px solid #eee;
        .el-menu-item, .el-submenu__title {
        	height: 35px;
        	line-height: 35px;
        }
        .is-opened {
            .el-submenu__title {
                background-color: #0096FF;
                color: #fff;
                i {
                    color: #fff;
                }
            }
        }
        .el-submenu__title i {
            color: #888;
        }
    }
   .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
    .m-nav::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }

</style>

<script>
	export default {
		data() {
	      return {
	      	 isCollapse: true,
	      	 nav: [],
           currentMenu: 'count'
	      }
	    },
	    methods: {
			  handleOpen(key, keyPath) {
		        console.log(key, keyPath);
	        },
		    handleClose(key, keyPath) {
		        console.log(key, keyPath);
		    },
        handleSelect(path, indexPath) {
          const currentMenu = path;
          this.$store.state.home.currentMenu = currentMenu;
        }
	    },
	    mounted() {
	    	this.$http.get('/static/json/a.json')
	    	.then((res) => {
	    		this.nav = res.data;
	    	});
	    },
      created() {
        let currentUrl = window.location.href;
        // this.
      },
	    components: {
        
	    }
	}
</script>