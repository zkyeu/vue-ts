/*
 * @Author: your name
 * @Date: 2020-07-10 23:11:34
 * @LastEditTime: 2020-07-10 23:13:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/src/store/mutations.ts
 */

export const changename = (state: { name: string }, data: string) => {
  state.name = data;
};
