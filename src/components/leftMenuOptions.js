// json太菜了，改为用js文件来存数值
// 左侧导航栏用
// 格式如下，没有的项最好不要出现在json里：
// [{
//   "icon": "",
//   "name": "",
//   "route": "",
//   "children": [{
//     "icon": "",
//     "name": "",
//     "route": "",
//   },{
//     "icon": "",
//     "name": "",
//     "route": "",
//   }]
// }]
export default [{
  "icon": "el-icon-s-home",
  "name": "首页",
  "route": "mainPage",
// },{
//   "icon": "el-icon-user-solid",
//   "name": "环境变量",
//   "route": "globallist",
},{
  "icon": "el-icon-user-solid",
  "name": "用户列表",
  "route": "userlist",
},{
  "icon": "el-icon-user-solid",
  "name": "游戏列表",
  "route": "gamelist",
}]
