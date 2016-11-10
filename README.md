# React 拍卖二手车


## 目录
#### &sect; [技术栈](#features)
#### &sect; [快速开始](#getting-started)
  * [安装](#installation)
  * [启动](#start)

#### &sect; [项目架构](#architecture)
  * [目录结构](#tree)

#### &sect; [性能](#performance)
#### &sect; [参考](#reference)

****

## <a name="features">&sect; 技术栈</a>
> 详情可参阅 `package.json`

* React 15.3.0
* Redux
* React Router
* Webpack
* ES6 + Babel
***

## <a name="getting-started">&sect; 快速开始</a>
在开始前，希望您已通读如下资料

* [React 文档][react-doc]
* [Redux 文档][redux-doc]（参转～ [Redux][simple-tutorial]）
* [React Router 文档][react-router-doc]

同时您还需要熟悉 ES6。例如，请把如下代码 
`const foo = ({ hello: { world: bar } }) => ({ bar })`  
转译成 ES5（答案请自行到 [Babel REPL][babel-repl] 在线编译验证）

### <a name="installation">⊙ 安装</a>
> 推荐升级到 node 5.x/6.x + npm 3.x 环境，**强烈推荐**使用 [`cnpm`](https://github.com/cnpm/cnpm) 安装依赖或手动   
> 切换到淘宝 npm 源：`npm set registry https://registry.npm.taobao.org/`  
> （经测试，`cnpm` 对于 `node-sass` 等问题多多的 Package 拥有秒杀能力）



敲下 `npm install` 安装依赖

需要全局安装跨平台环境变量配置器：`npm i cross-env -g`

### <a name="start">⊙ 启动</a>
敲下 `npm start`  
如无意外，默认浏览器就会自动打开 `localhost:9090`，您立即可以看到效果  
若浏览器没有自动弹出，则请自行手动访问  

***

## <a name="architecture">&sect; 项目架构</a>
### <a name="tree">⊙ 目录结构</a>
```
.
├─ build/            # Webpack 配置目录
├─ dist/             # build 生成的生产环境下的项目
├─ src/              # 源码目录（开发都在这里进行）
│   ├─ assets/         # 放置需要经由 Webpack 处理的静态文件
│   ├─ components/     # 组件（COMPONENT）
│   ├─ redux/          # Redux 一箩筐
│   │   ├─ actions/      # （ACTION）
│   │   ├─ reducers/     # （REDUCER）
│   │   ├─ store/        # （STORE）
│   ├── routes/        # 路由（ROUTE）
│   ├── services/      # 服务（SERVICE，用于统一管理 XHR 请求）
│   ├── utils/         # 工具库（UTIL）
│   │   ├─ HoC/          # 高阶组件（HOC，全称 Higher Order Component）
│   │   ├─ mixins/       # 混合（MIXIN）
│   ├── views/         # 路由视图基页（VIEW）
│   │   ├─ layout/       # 全局布局
│   ├── app.js         # 启动文件
│   ├── index.html     # 静态基页
├── static/          # 放置无需经由 Webpack 处理的静态文件
├── .babelrc         # Babel 转码配置
├── .eslintignore    # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc        # ESLint 配置
├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
├── package.json     # （这个就不用多解释了吧）
```

为了减少代码量，省去了 [Prop 验证][proptypes]，建议您在往后的开发中使用

### <a name="performance">⊙ 性能</a>
大概可参阅如下文章：

* React 文档 · [Advanced Performance](https://facebook.github.io/react/docs/advanced-performance.html)
* 反鸡汤 · [Should I use shouldComponentUpdate](http://jamesknelson.com/should-i-use-shouldcomponentupdate/)（[译文](http://www.infoq.com/cn/news/2016/07/react-shouldComponentUpdate)）
* 淘宝 FED · [高性能 React 组件](http://taobaofed.org/blog/2016/08/12/optimized-react-components/)
* 腾讯 Dev Club · [React 移动 Web 极致优化](http://dev.qq.com/topic/579083d1c9da73584b02587d)

***

## <a name="reference">&sect; 参考</a>
* [Vue Demo][vue-demo]
* [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
* [探讨 React 项目目录结构](http://marmelab.com/blog/2015/12/17/react-directory-structure.html)

[vue-cli]: https://github.com/vuejs/vue-cli
[vue-cli-template]: http://vuejs-templates.github.io/webpack/structure
[vue-demo]: https://github.com/kenberkeley/vue-demo
[react-doc]: http://reactjs.cn/react/docs/getting-started-zh-CN.html
[redux-doc]: http://camsong.github.io/redux-in-chinese/index.html
[simple-tutorial]: https://github.com/kenberkeley/redux-simple-tutorial
[react-router-doc]: http://react-guide.github.io/react-router-cn/
[babel-repl]: http://babeljs.io/repl/
[how-to-start]: https://github.com/kenberkeley/react-demo/issues/1
[service-intro]: https://github.com/kenberkeley/vue-demo#service-layer
[alias-intro]: https://github.com/kenberkeley/vue-demo#alias
[createContainer]: https://github.com/kenberkeley/react-demo/blob/master/src/utils/createContainer.js
[Navbar]: https://github.com/kenberkeley/react-demo/blob/master/src/components/Navbar/index.js
[connect]: https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
[dan-post]: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
[chrome-extension]: https://github.com/zalmoxisus/redux-devtools-extension
[devtools-component]: https://github.com/gaearon/redux-devtools
[redux-logger]: https://github.com/evgenyrodionov/redux-logger
[why-did-u-update]: https://github.com/garbles/why-did-you-update
[hot-loader]: https://github.com/gaearon/react-hot-loader
[react-optimize]: https://github.com/thejameskyle/babel-react-optimize
[history]: https://github.com/ReactTraining/history
[proptypes]: https://facebook.github.io/react/docs/reusable-components-zh-CN.html#prop-验证
