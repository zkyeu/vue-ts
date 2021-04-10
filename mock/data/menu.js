/*
 * @Author: your name
 * @Date: 2020-11-04 09:21:50
 * @LastEditTime: 2021-03-16 18:53:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-ts/mock/data/menu.js
 */
module.exports = [
  {
    id: 1,
    children: [
      {
        id: 2,
        path: 'a1',
        label: '菜单1-1',
        parentId: 1
      },
      {
        id: 3,
        path: 'a2',
        label: '菜单1-3',
        parentId: 1
      },
      {
        id: 31,
        path: 'a3',
        label: '菜单1-3',
        parentId: 1
      }
    ],
    path: 'a',
    label: '菜单1',
    parentId: 0
  },
  {
    id: 4,
    path: 'b',
    label: '菜单2',
    parentId: 0
  },
  {
    id: 5,
    children: [
      {
        id: 6,
        path: 'c1',
        label: '菜单3-1',
        parentId: 1
      },
      {
        id: 7,
        path: 'c2',
        label: '菜单3-2',
        parentId: 1
      }
    ],
    path: 'c',
    label: '菜单3',
    parentId: 0
  }
];
