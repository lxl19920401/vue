import axios from 'axios';
//import { Message } from 'element-ui';

//axios.defaults.timeout = 5000;
axios.defaults.baseURL ='';


//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
  	if(error.response){
  		switch(error.response.status){
  			//case 401: window.location.href = error.response.data.data.redirectUrl
  		}
  	}
    return Promise.reject(error)
  }
)

const Plugin = {
	install(vue,option){
		vue.prototype.$getInterfaceData = function(url,type,data,hearers){
			var configHeaders = {
				"Accept":"application/json",
				"Content-Type":"application/json;charset=UTF-8"
			};
//			let token ="";
//			if(window.location.href.indexOf('token=')>=0){
//					//localSaveToken 截取token
//					token = tool.localSaveToken();
//					localStorage.setItem('token',token);
//			}else{
//					localStorage.setItem('token',token);
//			};
//			token = localStorage.getItem('token');
//			let urlHref = window.location.href;
//			configHeaders = Object.assign({
//				'token':token,
//				'urlHref':urlHref
//			},configHeaders);
			let Public = {//公共参数
				//'srAppid':''
			};
			let httpDefaultOpts = { //http默认配置
		     method:type,
		     url: url,
		     //headers: configHeaders,
		     timeout: 10000,
		     params:Object.assign(Public, data),
		     data:data,
		     transformRequest:function(data){
		     	//这里可以在发送请求之前对数据做处理，比如form-data格式化等
		     		data = JSON.stringify(data);
		     		return data;
		     },
		     transformResponse:function(data){
		     		data = JSON.parse(data);
		     		return data;
		     }
  		}
			if(type=='GET'){
		   	delete httpDefaultOpts.data
		  }else{
		   	delete httpDefaultOpts.params
		  }
		  let promise = new Promise(function(resolve, reject) {
			   axios(httpDefaultOpts).then(
			    (res) => {
			     	resolve(res)
			    }
			   ).catch(
				    (response) => {
				     reject(response)
				    }
				   )  
			  })
			  return promise
		}
	}
}
export default Plugin;