<template>
  <el-scrollbar style="height:100%;">
  		<div id="app">
  			<keep-alive>
  				<router-view />
  			</keep-alive>
  		</div>
  		<el-backtop target=".el-scrollbar__wrap"></el-backtop>
  </el-scrollbar>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
 width:100%;
   min-height:1000px;
   margin:0 auto;
 min-width:1200px; 
   color:rgba(43,55,84,1);
   font-size:14px;
}
html{
	height:100%;
	min-height:100%;
	 font: 14px/1.5 'Microsoft YaHei',arial,tahoma,\5b8b\4f53,sans-serif;
}
body{
	width:100%;
	height:100%;
	/* width:calc(100vw - 25px); */
	min-height:100%;
	margin:0;
	padding:0;
}
ul,li{
	list-style: none;
}
ul,p{
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	padding-inline-start: 0;
}
div,ul,p,td,li{
	box-sizing: border-box;
	position: relative;
}

/* 解决自定义滚动条 x 轴显示问题 */
.el-scrollbar__wrap
{
  overflow-x: hidden !important;
}
.el-scrollbar__thumb{
	background:#9D9D9D !important;
}
.el-scrollbar__view{
	/* min-height:1000px; */
}
.cus{
	cursor: pointer;
}
</style>
