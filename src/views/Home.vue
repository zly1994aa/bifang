<template>
	<div class="home">
		<div class="topHeader">
			<span style="color:#fff;font-size:28px;line-height:75px;">毕方管理平台</span>
		</div>
		<div style="display: flex;min-height: 925px;">
			<el-menu default-active="/business" class="el-menu-vertical-demo"  :router="true" @open="handleOpen" @close="handleClose" background-color="#545c64"
			 text-color="#fff" active-text-color="#ffd04b">
				<el-menu-item index="/business">
					<i class="el-icon-menu"></i>
					<span slot="title">持仓交易</span>
				</el-menu-item>
			</el-menu>
			<div class="rightContainer">
				<router-view></router-view>
			</div>	
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: 'Home',
		components: {
		}
	}
</script>
<style scoped>
	.home{
		width: 100%;
		
	}
	.el-menu{
		width:200px;
	}
	.rightContainer {
		flex: 1;
		min-height: 925px;
		background: #F5FAFE;
		overflow: auto;
		border:1px solid #ddd;
		padding:9px 20px;
	}
	.topHeader{
		width:100%;
		height:75px;
		background:rgb(64,74,80);
		padding-left:50px;
	}
</style>
