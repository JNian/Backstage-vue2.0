<template>
	<el-row class="g-hd">
      <el-col :span="12" class="m-item" @click="alert(1)">
          <el-row class="">
            <img class="logo" src="https://fanyi.bdstatic.com/static/translation/img/header/logo_40c4f13.svg">
          </el-row>
      </el-col>
      <el-col :span="12" class="m-item">
          
      </el-col>
    </el-row>
</template>
<style lang="scss">
  .g-hd {
    height: 55px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    .m-item {
      height: 55px;
      padding-top: 10px;
      box-sizing: border-box;
    }
    .logo {
      width: 200px;
      height: 35px;
    }
  }
</style>

<script>
	export default {
		data() {
			return {
				name: 'Header'
			}
		},
    mounted() {
    }
	}
</script>