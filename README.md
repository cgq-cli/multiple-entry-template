# backstagemanagement

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#安装vue淘宝镜像 
npm install -g vue –registry=https://registry.npm.taobao.org

#安装webpack 
npm install webpack -g

#安装vue脚手架 
npm install vue-cli -g

***************************************************************
#1 根据模板创建项目 
vue init webpack 项目名字<项目名字不能用中文>

#2 路由安装配置

#3 axios安装配置

#4 vuex安装配置

#5 element-ui安装
*完整全局引入
在 main.js 中写入以下内容：
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

#6 sass/less loader引入
cnpm install stylus-loader css-loader style-loader less-loader sass-loader --save-dev
cnpm install sass-loader --save
cnpm install node-sass --save
cnpm install less --save

#7 iconfont引入
iconfont下载文件并放到assets/iconfont中
main.js中引入
import './assets/iconfont/iconfont.css'
组件中使用
<span class="iconfont icon-icon_xinyong_xianxing_jijin-"></span>