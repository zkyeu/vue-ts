/*
 * @Author: your name
 * @Date: 2020-06-23 17:46:54
 * @LastEditTime: 2020-11-03 11:40:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/api/api-axios.ts
 */
import Http from './pre-axios';
import url from '../../config/url';
import _ from 'lodash';
export const apis = _.mapValues(
  url,
  _.bind(_.mapValues, null, _, (v: string) => v + ``)
);
export default Http(apis);
