<template>
	<div>
		<div style="border-bottom: 2px solid #9D9D9D;line-height:30px;">
			<span style="font-weight:bold;font-size:18px;display: inline-block;margin-right:29px;">持仓机构：桐柏农村商业银行</span>
			<span>估值日期：2020-02-20</span>
		</div>
		<!-- <div>
			 <el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="买入" name="first"></el-tab-pane>
			    <el-tab-pane label="卖出" name="second"> </el-tab-pane>
			  </el-tabs>
		</div>
		<div v-show="isShow==0">
			<el-input placeholder="请输入债券简称或者证券简称" style="width:20%"></el-input>
			<el-row :gutter="20">
			  <el-col :span="4">债券简称：16国开05</el-col>
			  <el-col :span="4">剩余期限：6.51872Y</el-col>
			  <el-col :span="4">中债估值收益率：3.1426</el-col>
			</el-row>
			<div class="showContent">
				<div style="margin-bottom:20px;">
					<div class="l_s">
						<span style="display:inline-block;width:28%;min-width:120px;text-align: right;">买入张数：</span>
						<el-input style="width:72%;"></el-input>
					</div>
					<div class="r_s">
						<span style="display:inline-block;width:28%;min-width:120px;text-align: right;">卖出张数：</span>
						<el-input style="width:72%;"></el-input>
					</div>
				</div>
				<div style="margin-bottom:20px;">
					<div class="l_s">
						<span style="display:inline-block;width:28%;min-width:120px;text-align: right;">买入单位定价：</span>
						<el-input style="width:72%;"></el-input>
					</div>
					<div class="r_s">
						<span style="display:inline-block;width:28%;min-width:120px;text-align: right;">买入单位全价：</span>
						<span>98.9875</span>
					</div>
				</div>
				<div style="margin-bottom:20px;">
					<div class="l_s">
						<span style="display:inline-block;width:28%;min-width:120px;text-align: right;">买入全价（金额）：</span>
						<span>19777726666</span>
					</div>
					<div class="r_s">
						<span style="display:inline-block;width:28%;min-width:80px;text-align: right;">当前持仓：</span>
						<span>4000000</span>
					</div>
				</div>
				<div>
					<div class="l_s">
						<span style="display:inline-block;width:28%;min-width:80px;text-align: right;">交易时间：</span>
						<span>2020-02-14</span>
					</div>
				</div>
				<div style="margin-top:20px;text-align: center;">
					<el-button type="primary" plain>清空</el-button>
					<el-button type="primary" >提交</el-button>
				</div>
			</div> -->
			<div style="margin-top:20px;">
				<span style="font-size:16px;font-weight:600;">持仓情况表</span>
				<table class="table_list" width="100%" cellspacing="0" cellpadding="0">
					<thead>
						<tr>
							<td>证券代码</td>
							<td>证券名称</td>
							<td>剩余年限</td>
							<td>收盘价久期</td>
							<td>当前持仓数量（张）</td>
							<td>持仓单券全价成本</td>
							<td>中债估值收益率</td>
							<td>中债估值净价</td>
							<td>已付息</td>
							<td>持仓单券收益</td>
							<td>持仓利息收入</td>
							<td>下一付息日</td>
							<td>购入成本</td>
							<td>竞价亏损</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>160205</td>
							<td>16国开06</td>
							<td>10.08</td>
							<td>11.86</td>
							<td>4000.00</td>
							<td>39695.00</td>
							<td>3.9299</td>
							<td>98.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
						</tr>
						<tr>
							<td>160205</td>
							<td>16国开06</td>
							<td>10.08</td>
							<td>11.86</td>
							<td>4000.00</td>
							<td>39695.00</td>
							<td>3.9299</td>
							<td>98.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
						</tr>
						<tr>
							<td>160205</td>
							<td>16国开06</td>
							<td>10.08</td>
							<td>11.86</td>
							<td>4000.00</td>
							<td>39695.00</td>
							<td>3.9299</td>
							<td>98.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
						</tr>
						<tr>
							<td>160205</td>
							<td>16国开06</td>
							<td>10.08</td>
							<td>11.86</td>
							<td>4000.00</td>
							<td>39695.00</td>
							<td>3.9299</td>
							<td>98.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
							<td>3.9299</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div style="margin-top:20px;">
				<span style="font-size:16px;font-weight:600;">资产情况表</span>
				<table class="table_list" width="100%" cellspacing="0" cellpadding="0">
					<thead>
						<tr>
							<td>持仓总浮动盈亏</td>
							<td>卖出实现单收益</td>
							<td>回购收益</td>
							<td>可购资金</td>
							<td>成本计价资产收益</td>
							<td>总收益</td>
							<td>总资产净值</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>160205</td>
							<td>16国开06</td>
							<td>10.08</td>
							<td>20.99</td>
							<td>11.86</td>
							<td>4000.00</td>
							<td>39695.00</td>
						</tr>
					</tbody>
				</table>
				<table class="table_list" width="100%" cellspacing="0" cellpadding="0" style="margin-top:20px;">
					<thead>
						<tr>
							<td>成本计价资产</td>
							<td>杠杆比例</td>
							<td>持有期收益率</td>
							<td>年化收益率</td>
							<td>持仓债券加权平均久期</td>
							<td>组合久期</td>
							<td>运作时间（日）</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>160205</td>
							<td>16国开06</td>
							<td>10.08</td>
							<td>11.86</td>
							<td>4000.00</td>
							<td>39695.00</td>
							<td>39695.00</td>
						</tr>
					</tbody>
				</table>
			</div>	
		</div>
		<!-- <div v-show="isShow==1">
			44444
		</div> -->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				activeName:'first',
				isShow:0,
				
			}
		},
		methods:{
			handleClick(val){
				console.log(val);
				if(val.index=='0'){
					this.isShow=0;
				}else{
					this.isShow=1;
				}
			}
			
		}
	}
</script>

<style scoped>
	.el-row {
		margin-top:12px;
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	.showContent{
		width:60%;
		background: #fff;
		/* box-shadow: 0px 0px 15px 0px rgba(161, 179, 225, 0.34); */
		border-radius: 4px;
		padding:20px;
	}
	.l_s,.r_s{
		width:50%;
		display: inline-block;
	}
	.table_list{
		table-layout: fixed;
		border: 1px solid #D7DEE3;
	}
	.table_list thead td,.table_list tbody td{
		height: 50px;
		text-align: center;
		border-right:1px solid #D7DEE3;
		border-bottom:1px solid #D7DEE3;
		color:#666666;
	}
	.table_list thead td{
		color:#333;
		background:#EEF1F6;
		font-weight: 600;
	}
	.table_list tbody tr:nth-child(2n){
		background:#EEF1F6;
	}
	.table_list tbody tr:hover{
		background:#C0C4CC;
	}
	.table_list tbody tr:last-child td{
		border-bottom: none;
	}
	.table_list td:last-child{
		border-right:none;
	}
	.table_list thead td:first-child,.table_list tbody td:first-child{
		text-align: left;
		padding-left: 10px;
	}
</style>
