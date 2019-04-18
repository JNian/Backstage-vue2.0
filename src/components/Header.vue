<template>
	<el-row class="g-hd">
      <el-col :span="12" class="m-item" @click="alert(1)">
          
      </el-col>
      <el-col :span="12" class="m-item">
          
      </el-col>
    </el-row>
</template>
<style lang="scss">
  .g-hd {
    height: 55px;
    border-bottom: 1px solid #eee;
    background-color: #409EFF;
    .m-item {
      height: 55px;
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