<template>
  <!-- 右侧内容部分 -->
  <div class="m-content">
   <!--  <div style="margin-bottom: 20px;">
	  <el-button
	    size="small"
	    @click="addTab(editableTabsValue)"
	  >
	    add tab
	  </el-button>
	</div> -->
	<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" :style="{'height': $store.state.home.height + 'px'}">
	  <el-tab-pane
	    v-for="(item, index) in editableTabs"
	    :key="item.name"
	    :label="item.title"
	    :name="item.name"
	  >
	    <!-- <c1></c1> -->
	    
	    <div><c2></c2>{{item.content}}</div>
	  </el-tab-pane>
	</el-tabs>
  </div>
</template>
<style lang="scss">
	.m-content {
	  // background-color: skyblue;
	  background-color: #fff;
	  .el-tabs__content {
	  	height: calc(100% - 56px);
	  	.el-tab-pane {
	  		height: 100%;
	  	}
	  }
	}
</style>

<script>
import c1 from './content/content1.vue'
import c2 from './content/content2.vue'
  export default {
    data() {
      return {
        editableTabsValue: '3',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }, {
          title: 'Tab 3',
          name: '3',
          content: 'Tab 3 content'
        }],
        tabIndex: 3,
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    },
    mounted() {
       
    },
    components: {
    	c1,
    	c2
    }
  }
</script>