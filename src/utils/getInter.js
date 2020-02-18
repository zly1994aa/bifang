import axios from 'axios'
import {
	Message,
	Loading
} from 'element-ui'
import router from '@/router'
import md5 from 'js-md5';
import store from '@/store/index'
// create an axios instance
const service = axios.create({
	baseURL: '/api', // api的base_url
	timeout: 300000, // request timeout
	// headers:{
	// 	post:{
	// 		'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
	// 	}
	// }
})
// request interceptor
// 添加请求拦截器
service.interceptors.request.use(config => {
	// Do something before request is sent
	config.headers['Cache-Control'] = 'no-cache' // ie清缓存，否则无法正常刷新
	config.headers['Pragma'] = 'no-cache' // HTTP/1.1版本，ie清缓存，否则无法正常刷新
	console.log(config)
	if (config.method == "post") {
		config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
		config.transformRequest = [function(data) {
			// Do whatever you want to transform the data
			let ret = ''
			for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
			}
			return ret.substring(0, ret.length - 1)
		}]
	}
	// if (config.showLoading) {
	//   showFullScreenLoading()
	// }
	if (config.method == 'get') {
		if (config.data.isLoading) {
			// 如果配置了isLoading: false，则不显示loading
			showFullScreenLoading()
		}
	} else if (config.method == 'post') {
		if (config.data.isLoading !== false) {
			// 如果配置了isLoading: false，则不显示loading
			showFullScreenLoading()
		}
	}

	return config
}, error => {
	// Do something with request error
	Promise.reject(error)
})

// respone interceptor
// 添加响应拦截器
service.interceptors.response.use(
	response => {
		setTimeout(() => {
			tryHideFullScreenLoading()
		}, 500)
		var res = response.data;
		if (response.config.method == 'get') {
			var num1=res.indexOf("(");
			var num2=res.length-1;
			 res=JSON.parse(res.slice(num1+1,num2));
		}
		if(res.error_code=='401'){
			router.push('/');
		}
		// 以下请根据后端返回具体格式修改!!!!!
		if (res.status == "Y") {
			return res
		} else {
			Message({
				message: res.error_msg,
				type: 'error',
				duration: 5 * 1000
			})
			return Promise.reject(res)
		}
	},
	error => {
		// 错误处理
		tryHideFullScreenLoading()
		Message({
			message: error.message,
			type: 'error',
			duration: 5 * 1000
		})
		return Promise.reject(error)
	}
)

// 加载封装
let loading

function startLoading() {
	loading = Loading.service({
		lock: true,
		text: '加载中',
		background: 'rgba(0, 0, 0, 0.7)'
	})
}
// 关闭加载
function endLoading() {
	loading.close()
}
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
	if (needLoadingRequestCount === 0) {
		startLoading()
	}
	needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
	if (needLoadingRequestCount <= 0) return
	needLoadingRequestCount--
	if (needLoadingRequestCount === 0) {
		endLoading()
	}
}
//接口数据合并处理
var interAdd = {
	extend_params: function(param) {
		var userInfoData = userInfo().getObject();
		var params = {
			service_code: param.service_code,
			mac: "",
			device_type: 'PC_WEB',
			version: '1.0',
			token: userInfo().getObject('token'),
			user_id: userInfo().getObject('user_id'),
		};
		var results = Object.assign(params, userInfoData, param);
		return results;
	}
}
//获取设置用户cookies
export function userInfo() {
	var defaultParams = {
		eid: '0',
		language: 'zh_CN'
	};
	var cookies_name = 'userInfo';
	var saveUserInfo = function(userInfoData) {
		var data = Object.assign(defaultParams, $cookies.get(cookies_name), userInfoData);

		var expireDate = new Date();
		expireDate.setDate(expireDate.getDate() + 1);
		$cookies.set(cookies_name, data, {
			'path': '/',
			'expires': expireDate
		});
		console.log(store);
		store.commit('serUser_info', data);
	}
	return {
		getObject: function(key) {
			var userInfoData = Object.assign(defaultParams, $cookies.get(cookies_name));

			return key ? userInfoData[key] : userInfoData;
		},
		setObject: function(key, value) {
			var userInfoData = $cookies.get(cookies_name) || {};
			if (key && value == undefined) {
				//alert(JSON.stringify(key));
				userInfoData = key;
			} else {
				userInfoData[key] = value;
			}
			saveUserInfo(userInfoData);
		},
		resetObject: function(userInfoData) {
			saveUserInfo(userInfoData, true);
		},
		logout: function() {
			$cookies.remove(cookies_name, {
				'path': '/'
			});
			$cookies.remove('userSearch', {
				'path': '/'
			}); //退出清空存的企业	
			$cookies.remove('newsNumber', {
				'path': '/'
			}); //退出清空1或0
			$cookies.remove('currentNumber', {
				'path': '/'
			}); //清空存的页数
			$cookies.remove('colCompanyDatails', {
				'path': '/'
			});
			$cookies.remove('collection', {
				'path': '/'
			});
			$cookies.remove('userSearch', {
				'path': '/'
			});
			$cookies.remove('loginUrl', {
				'path': '/'
			});
			$cookies.remove('overplusArr', {
				'path': '/'
			});
			$cookies.remove('companyInfos', {
				'path': '/'
			});

			// $rootScope.$_userInfo = defaultParams;


		},
		remUrl: function(saveUrl) {
			if (saveUrl) {
				var expireDate = new Date();
				expireDate.setDate(expireDate.getDate() + 1);
				this.$cookies.set('loginUrl', $location.absUrl(), {
					'path': '/',
					'expires': expireDate
				});
			}
		},
		clear: function() {
			this.$cookies.remove(cookies_name, {
				'path': '/',
				'domain': '.moxueyuan.com'
			});
			this.$cookies.remove(cookies_name, {
				'path': '/',
				'domain': ENV.cookiesDomain
			});
			this.$cookies.remove("QyWechatOAuth", {
				'path': '/',
				'domain': ENV.cookiesDomain
			});
			$rootScope.$_userInfo = defaultParams;
		},
		checkMobile: function(number) {
			var partten = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i;
			return partten.test(number);
		},
		checkLogin: function() {
			var userInfoData = this.$cookies.get(cookies_name) || {};
			if (!userInfoData.user_id || !userInfoData.token) {
				return false;
			}
			return true;
		},
		// refreshPage: function($scope, callback){
		//     //分享出去的页面，未登录用户登录后返回刷新数据
		//     $scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
		//         if (fromState.name == 'login' && userInfo.checkLogin()){
		//             if (callback){
		//                 callback(event, toState, toParams, fromState, fromParams);
		//             }else{
		//                 $state.reload();
		//             }
		//         }
		//     });
		// }
	}
}
export function fetch(options) {
	return new Promise((resolve, reject) => {
		var startTime = new Date().getTime();
		var params = '&jsonpcallback=JSON_CALLBACK&unique_identific=' + md5(options.params.service_code + 'chinamobo' +
			startTime / 1000) + '&time_stamp=' + startTime / 1000;
		options.params = interAdd.extend_params(options.params);
		for (var key in options.params) {
			params += "&" + key + "=" + options.params[key];
		}

		var data = options.data || [];
		var url = options.module + params;
		service({
				method: 'get',
				url: url,
				data:{
					isLoading:options.params.isLoading
				}
			})
			.then(response => {
				resolve(response);
			})
			.catch(err => {
				reject(err)
			})
	})
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(options) {
	return new Promise((resolve, reject) => {
		var startTime = new Date().getTime();
		options.params.unique_identific = md5(options.params.service_code + 'chinamobo' + startTime / 1000);
		options.params.time_stamp = startTime / 1000;
		var params = interAdd.extend_params(options.params);
		var url = "/api";
		service({
				method: 'post',
				data: params,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
			})
			.then(response => {
				resolve(response);
			})
			.catch(err => {
				reject(err)
			})
	})
}

export default service
