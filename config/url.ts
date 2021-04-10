/*
 * @Author: your name
 * @Date: 2020-06-23 09:22:35
 * @LastEditTime: 2021-03-17 22:58:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/config/url.ts
 */

const url = {
  get: {
    getlist: 'getlist',
    userinfo: '/commander/user/getuserinfo',
    getquestionsourceList: '/bcproduceowapi/bctaskapi/getquestionsourceList'
  },
  post: {
    postoptions: 'postoptions',
    imgHandle: 'http://localhost:7001/api/other/table'
  },
  file: {
    // ...
  },
  ws: {
    // ...
  }
};
export default url;
