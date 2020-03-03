# webpack-server

---

## 描述
>
  该框架使用webpack4搭建，组成的技术栈为:

    ReactJS全家桶(react + react-router-dom + react-redux + redux-saga);

    Jest + Enzyme;

    Webpack4 + webpack-dev-server;

    Mockjs.

---

## 启动服务
  1. 安装依赖

    `npm install`

  2. 启动项目

    `npm run dev`

  3. 打包

    `npm run build`

---

## 启动测试
  1. 普通模式

    `npm run test-cover`

  2. 监控模式

    `npm run test-watch`

---


## 结构

### `__mock__`: 存放Mock数据文件

### `__test__`: 存放jest配置文件

### `dist`: 项目打包目录

### `src`: 存放代码根目录

+ `components`: 存放组件

+ `layout`: 存放页面布局

+ `models`: 存放reducer

+ `pages`: 存放页面

+ `utils`: 存放公共方法

+ `app.js`: React项目的主文件

+ `router.js`: 路由文件，控制路由跳转

+ `index.html`: html模板文件

+ `style.css`: 样式模板文件

### `index.js`: 项目启动文件

### `jest.config.js`: 测试配置文件

### `mock-server.js`: Mock数据的配置及处理

### `webpack.config.js`: 打包项目的配置文件
> 项目的核心文件

---