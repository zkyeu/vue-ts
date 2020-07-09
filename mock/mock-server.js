/*
 * @Author: your name
 * @Date: 2020-06-23 09:26:09
 * @LastEditTime: 2020-06-23 17:30:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/mock/mock-server.js
 */
/*jshint esversion: 6 */
const glob = require('glob');
const path = require('path');
const express = require('express');
const app = express();
const apiRouters = express.Router();
const appData = require('../config/url.ts');
const getApi = appData['get']; // get请求
const postApi = appData['post']; // post 请求
let entryJs = {};
let jsonData = {};
const resolve = dir => {
  return path.join(__dirname, '..', dir);
};
entryJs = glob.sync(resolve('mock/data/*.json')).reduce(function(prev, curr) {
  prev[curr.slice(7)] = curr;
  return prev;
}, {});

for (const i in entryJs) {
  const data = require(entryJs[i]);
  jsonData = Object.assign(jsonData, data);
}
for (const i in getApi) {
  app.get(getApi[i], (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    console.log('请求：' + getApi[i]);
    res.json(jsonData[i]);
  });
}

for (const j in postApi) {
  app.post(postApi[j], (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    console.log('请求：' + postApi[j]);
    res.json(jsonData[j]);
  });
}

app.use('/', apiRouters);

app.listen(3000, function() {
  console.log('Mock server start: http://localhost:3000');
});
