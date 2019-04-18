# 生态洁

> 生态洁

## Build Setup

``` bash
# install dependencies
npm install

# 在node_modules下的lib-flexible文件夹下修改flexible.js如下
  function refreshRem () {
    var width = docEl.getBoundingClientRect().width;
    if (width / dpr > 540) {
      width = width * dpr;//当屏幕宽度超过540的时候我们应该以实际宽度重新计算,从而来做到适应PC
    }
    var rem = width / 10;
    console.log(rem, win.rem, flexible.rem)
    if (width / dpr >= 1440) {
      docEl.style.fontSize = '139.4px';//当屏幕宽度超过540的时候我们应该以实际宽度重新计算,从而来做到适应PC
      flexible.rem = 144
    } else {
      docEl.style.fontSize = rem + 'px';
      flexible.rem = win.rem = rem;
    }
    console.log(rem, win.rem, flexible.rem)
  }

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

