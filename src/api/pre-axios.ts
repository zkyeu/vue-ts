/*
 * @Author: your name
 * @Date: 2020-06-23 17:35:38
 * @LastEditTime: 2020-06-24 10:12:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/api/pre-axios.ts
 */ 
import axios from 'axios';
import qs from 'qs';
import Url from '../../config/host';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = Url;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use((config) => {
  if (config.method === 'post' && config.headers['content-type'] !== 'multipart/form-data') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 响应拦截（配置请求回来的信息）
axios.interceptors.response.use((res) => {
  const data = res.data;
  return data;
}, (error) => {
  const status = error && error.response && error.response.status;
  console.log(status);
  return Promise.reject(error);
});

// 查找请求类型及地址
const factory = (obj: {[key: string]: any}): { [key: string]: (...argv: object[]) => Promise<any> } => {
  const output: {[key: string]: any} = {};
  Object.keys(obj).forEach((methodKey) => {
    Object.keys(obj[methodKey]).forEach((apiKey) => {
      const api = obj[methodKey][apiKey];
      output[apiKey] = (data: object, args: object) => {
        switch (methodKey) {
          case 'get':
            return axios.get(`${api}`, {params: data});
          case 'post':
            return axios.post(`${api}`, data, args);
          case 'file':
            return axios.post(`${api}`, data, {headers: {'content-type': 'multipart/form-data', ...args }});
          default:
            return null;
        }
      };
    });
  });
  return output;
};
export default factory;
