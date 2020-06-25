/* eslint-disable no-console */
import axios from "axios";
// import { Message, MessageBox } from "element-ui";
import store from "@/store";
import { getToken, setToken } from "@/utils/auth";
import { Dialog, Toast } from "vant";

function errorsToString(obj) {
  let s = "";
  function traverse(obj) {
    for (var a in obj) {
      if (typeof obj[a] == "object") {
        traverse(obj[a]); //递归遍历
      } else {
        s += obj[a] + "\n";
      }
    }
  }
  traverse(obj);
  return s;
}

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 15000, // request timeout
  validateStatus: function(status) {
    return status >= 200 && status < 300; // default
  }
});

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers["Authorization"] = getToken();
    }
    // 添加时间戳，防止缓存
    if (config.method === "get") {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
      };
    }
    return config;
  },
  error => {
    if (error.message.includes("timeout")) {
      Toast.error("请求超时，请重试！");
    }
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    // console.log(response.headers);
    // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。你可以根据你的业务需求自己编写更新 token 的逻辑
    const token = response.headers.authorization;
    if (token) {
      console.log("new token: ", token);
      // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
      setToken(token);
    }

    const res = response.data;
    if (res.code < 0) {
      //   Message({
      //     message: res.msg,
      //     type: "error",
      //     duration: 5 * 1000
      //   });
      return Promise.reject("error");
    } else {
      return response.data;
      // return response;
    }
  },
  error => {
    console.log("err: " + error); // for debug

    // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。你可以根据你的业务需求自己编写更新 token 的逻辑
    const token = error.response.headers.authorization;
    if (token) {
      console.log("new token: ", token);
      // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
      setToken(token);
    }

    switch (error.response.status) {
      // 如果响应中的 http code 为 401，那么则此用户可能 token 失效了之类的，我会触发 logout 方法，清除本地的数据并将用户重定向至登录页面
      case 401:
        Dialog.alert({
          title: "会话失效",
          message: "你已被登出，请重新登录"
        }).then(() => {
          store.dispatch("FedLogOut").then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
        });
        break;
      case 500:
        // Message({
        //   message: error.response.data.message,
        //   type: "error",
        //   duration: 5 * 1000
        // });
        break;
      default:
        // var msg = error.response.data.message
        //   ? error.response.data.message
        //   : error.response.data.msg;
        // Message({
        //   message: msg,
        //   type: "error",
        //   duration: 5 * 1000
        // });
        var msg;
        console.log(error.response.data);
        if (
          error.response.data.error ||
          error.response.data.errors ||
          error.response.data.message
        ) {
          msg =
            error.response.data.error ||
            errorsToString(error.response.data.errors) ||
            error.response.data.message;
        } else {
          msg = "未知错误";
        }
        Dialog.alert({
          title: "错误",
          message: msg
        })
          .then(() => {
            // on confirm
          })
          .catch(() => {
            // on cancel
          });
    }

    return Promise.reject(error);
  }
);

export default service;
