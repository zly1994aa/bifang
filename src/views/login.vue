<template>
	<div class="loginT">
		<div class="h99">
			<div class="wNav">
				<!-- <div class="wLogo loginIma"></div>			 -->
			</div>
		</div>
		<div id="banner">
			<div class="">
				
				<div class="fl loginImage">	
					
				</div>
				<div class="fl add_margin-left m-l-120">
					<!--登录start-->
					<div class="login">
						<div class="f-z22 c-333 t-a-c">登<span></span>录</div>
						<div class="p-t-32">
							<img src="../assets/images/denglu_yonghuming_icon2.png" alt="" />
							<input type="text" placeholder="用户名" class="users" name="text" v-model="username"> 
							
						</div>
						<div class="p-t-20">
							<img src="../assets/images/denglu_mima_icon2.png" alt="" />
							<input type="password" placeholder="密码" class="passwords" v-model="password">
						</div>		
						<!-- <div class="remember">
							<input type="checkbox" style="display: none;" value="" />
				    		<div ng-class="{true:'u-check-cur',false:'u-check'}[checking]" style="top:50%;margin-top: -0.5em;" ng-click="rememberCheck()"></div>
				    		<p class="remuser">记住用户名</p>
				    		<p class="forgive" ng-click="forgive()">忘记密码</p>
				    		
						</div> -->
						<div data-loading-text="登录中..." id="loginBtn" class="submits" @click="login()" >登<span></span>录</div>
						<!-- <p ng-click="register()" style="text-align: right; padding-top: 5px; cursor: pointer;color: #254ea0; font-size: 12px;">立即注册</p> -->
					</div>
					<!--end-->
				</div>
				
			</div>	
			<div class="clear"></div>
			
		</div>
		<div class="footer">
			京ICP备17023522号-2
		</div>
	</div>
</template>

<script>
	import {post,userInfo} from '../utils/getInter.js';
	import md5 from 'js-md5';	
	export default{
		data(){
			return{
				username:"",
				password:"",
			}
		},
		methods:{
				
			login(){
				if(this.username!==""&&this.password!==""){
					var options={
						service_code: 'WINMET_APP_LOGIN_SYSTEM',
						params:{
							service_code: 'WINMET_APP_LOGIN_SYSTEM',
							username:'15811419878',
							password:md5('fund_manager15811419878'),
							token: null,
							user_id: null,
							isLoading:true, 
						},
						// isLoading:true,
					}
					post(options).then(res=>{
						if(res.status=='Y'){
							var datas=res.results;
							var userDate={
								token:datas.token,
								user_id:datas.user_id,
								username:datas.username,
								organization_name:datas.organization_name,
								profile_info_red:datas.profile_info.red_folder_count,
								phone_num:datas.phone_num,
								name:datas.name,
								institutions:datas.institutions,
								department:datas.department,
								jods:datas.jods
							};
							userInfo().setObject(userDate);
							this.$router.push('/business')
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	.p-t-20 {
		padding-top: 20px
	}
	.p-t-32 {
		padding-top: 32px
	}
	.t-a-c {
		text-align: center
	}
	
	.f-z22 {
		font-size: 22px
	}
	
	.m-l-120 {
		margin-left: 120px
	}
	* {
		margin:0;
		padding:0;
	}
	body {
		font-family: "Microsoft YaHei","微软雅黑", verdana, sans-serif;
		overflow:auto;
	    color:#000;
	    background:#fff;
	    /*font-size: 12px;*/
	    /*line-height:166.6%;*/
	    /*text-align: center;*/
		background-color: #F3F7FD;
	}
	ol, ul , p{
	    margin:0;
	}
	li {
		list-style:none;
	}
	a:focus {
	    outline: none;
	}
	a,a:hover,a:active,a:focus{
	    text-decoration: none;
	    color:#fff;
	}
	.display-block {
		display: block!important;
	}
	.display-none {
		display: none!important;
	}
	
	.alls{
		width: 100%;
		height: 100%;
		background-color:#0593FA;
	}
	.loginT .login{
		width:360px;
		height: 380px;
		background-color: #fff;
		/*position: absolute;*/
		/*top: 85px;*/
		right:0px;
		/*margin-top:-190px;*/
		padding:30px 37px;
		right: 0;
		/*width: 440px;*/
		padding:36px 48px 42px;
		background-color: #D3DCEC;
	}
	.login>input{
		width: 310px;
	}
	.users{
		border:2px solid #dedede;
		padding-left: 48px;
		width: calc(100% - 48px);
		border:1px solid #b8c6e0;
		background-color: #fff;
		height: 41px;
	}
	.passwords{
		border:2px solid #dedede;
		padding-left: 48px;
		width: calc(100% - 48px);
		border:1px solid #b8c6e0;
		background-color: #fff;
		height: 41px;
	}
	.remember{
		margin-top:20px;
	}
	.u-check {
	    position: absolute;
	    width: 20px;
	    height: 20px;
	    top: .7em;
	    background: url(../assets/images/dl_gouxuan.png) no-repeat;
	    background-size: 90%;
	    cursor: pointer;
	}
	.u-check-cur {
		position: absolute;
	    width: 20px;
	    height: 20px;
	    top: .7em;
	    background: url(../assets/images/dl_gouxuan_pressed.png) no-repeat;
	    background-size: 90%;
	    cursor: pointer;
	}
	
	.remuser{
		color: #4c4c4c;
		font-size: 14px;
		display: inline-block;
		margin: 0;
		text-indent: 2em;
	}
	.forgive{
		font-size: 14px;
		color:#DE1818;
		float: right;
		padding-top: 2px;
		cursor: pointer;
		color: #254ea0;
		font-size: 12px;
	}
	.submits{
		width: 290px;
		height:40px;
		line-height: 40px;
		text-align: center;
		margin-top:35px;
		background: url(../assets/images/denglu_btn.png) ;
		cursor: pointer;
		font-size: 18px;
		color: #fff;
		width: 100%;
	}
	.loginT .submits span,.loginT .t-a-c span{
		width: 8px;
	    height: 2px;
	    display: inline-block;
	}
	.p-t-32 img,.p-t-20 img{
		position: absolute;
	    top: 44px;
	    left: 15px;
	    top: 33px;
	    left: 1px;
	}
	.p-t-20 img{
		top:32px;
		top:21px;
	}
	
	.h99 {
		height: 99px
	}
	.wNav {
		width: 70%;
		height: 100%;
		margin: 0 auto
	}
	/*修改密码*/
	.forgiveT .forgivebg{
		width:360px;
		background-color: #fff;
		right:0px;
		padding:30px 37px;
		right: 0;
		width: 440px;
		padding:36px 48px 42px;
		background-color: #D3DCEC;
		height: 480px;
	}
	.reset{
		padding-left:15px;
	}
	.gets{
		font-size: 14px;
		color:#1288DB;
		position: absolute;
	    top: 34px;
	    right: 20px;
	    border-left: 2px solid #dedede;
	    padding-left: 20px;
	    cursor: pointer;
	}
	.mb-5{
		margin-bottom: -5%;
	}
	 
	.loginImage{
		/*width: 884px;*/
		width: 50%;
		height: 702px;
		/*background-image: url(../../../images/dl_bg_pic.png);*/
		background: url(../assets/images/dl_bg_pic.png) no-repeat;
		background-size: 100% auto;
	}
	.loginT .footer,.forgiveT .footer,.register .footer{
		margin: 0 auto;
	    height: 52px;
	    line-height: 52px;
	    background: #23282d;
	    font-size: 12px;
	    color: #7f8183;
	    text-align: center;
	    padding: 0;
	    /*width: 1920px;*/
	   width: 100%;
	}
	@media screen and (max-width: 970px) {
		.add_margin-left {
		    margin-left: 20px;
		}
	}
	#banner {
		width: 100%;
		height: 550px;
		background-size: auto 100%;
		/*width: 1920px;*/
		height: 817px;
		background-color: #214a9f;
		padding-top: 115px;
		margin: 0 auto
	}
	.fl {
		float: left
	}
	
</style>
