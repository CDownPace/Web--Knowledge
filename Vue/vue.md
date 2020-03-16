### 1.v-bind和v-model的区别

1.v-bind用来绑定数据和属性以及表达式，缩写为'：'
2.v-model使用在表单中，实现双向数据绑定的，在表单元素外使用不起作用

### 2.什么是 mvvm？

MVVM 是 Model-View-ViewModel 的缩写。mvvm 是一种设计思想。Model 层代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑；View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来，ViewModel 是一个同步 View 和 Model 的对象。

在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

### 3.mvvm 和 mvc 区别？

mvc 和 mvvm 其实区别并不大。都是一种设计思想。主要就是 mvc 中 Controller 演变成 mvvm 中的 viewModel。mvvm 主要解决了 mvc 中大量的 DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。和当 Model 频繁发生变化，开发者需要主动更新到 View 。

### 4.vue 的优点是什么？

- 低耦合。视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的"View"上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。
- 可重用性。你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 view 重用这段视图逻辑。
- 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用 Expression Blend 可以很容易设计界面并生成 xml 代码。
- 可测试。界面素来是比较难于测试的，而现在测试可以针对 ViewModel 来写。

### 5.请详细说下你对 vue 生命周期的理解？

答：总共分为 8 个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

- 创建前/后： 在 beforeCreate 阶段，vue 实例的挂载元素 el 还没有。
- 载入前/后：在 beforeMount 阶段，vue 实例的$el 和 data 都初始化了，但还是挂载之前为虚拟的 dom 节点，data.message 还未替换。在 mounted 阶段，vue 实例挂载完成，data.message 成功渲染。
- 更新前/后：当 data 变化时，会触发 beforeUpdate 和 updated 方法。
- 销毁前/后：在执行 destroy 方法后，对 data 的改变不会再触发周期函数，说明此时 vue 实例已经解除了事件监听以及和 dom 的绑定，但是 dom 结构依然存在

### 6.组件之间的传值？

1. 父组件与子组件传值

```html
//父组件通过标签上面定义传值
<template>
    <Main :obj="data"></Main>
</template>
<script>
    //引入子组件
    import Main form "./main"

    exprot default{
        name:"parent",
        data(){
            return {
                data:"我要向子组件传递数据"
            }
        },
        //初始化组件
        components:{
            Main
        }
    }
</script>


//子组件通过props方法接受数据
<template>
    <div>{{data}}</div>
</template>
<script>
    exprot default{
        name:"son",
        //接受父组件传值
        props:["data"]
    }
</script>
```

2. 子组件向父组件传递数据

```html
//子组件通过$emit方法传递参数
<template>
   <div v-on:click="events"></div>
</template>
<script>
    //引入子组件
    import Main form "./main"

    exprot default{
        methods:{
            events:function(){

            }
        }
    }
</script>


//

<template>
    <div>{{data}}</div>
</template>
<script>
    exprot default{
        name:"son",
        //接受父组件传值
        props:["data"]
    }
</script>
```

### 7.嵌套路由怎么定义？

在实际项目中我们会碰到多层嵌套的组件组合而成，但是我们如何实现嵌套路由呢？因此我们需要在 VueRouter 的参数中使用 children 配置，这样就可以很好的实现路由嵌套。
index.html，只有一个路由出口

```html
<div id="app">
    <!-- router-view 路由出口, 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
</div>
```

main.js，路由的重定向，就会在页面一加载的时候，就会将 home 组件显示出来，因为重定向指向了 home 组件，redirect 的指向与 path 的必须一致。children 里面是子路由，当然子路由里面还可以继续嵌套子路由。

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入两个组件

import home from "./home.vue"
import game from "./game.vue"
//定义路由
const routes = [
    { path: "/", redirect: "/home" },//重定向,指向了home组件
    {
        path: "/home", component: home,
        children: [
            { path: "/home/game", component: game }
        ]
    }
]
//创建路由实例
const router = new VueRouter({routes})

new Vue({
    el: '#app',
    data: {
    },
    methods: {
    },
    router
})
```

home.vue，点击显示就会将子路由显示在出来，子路由的出口必须在父路由里面，否则子路由无法显示。

### 8.路由之间跳转？

- 声明式（标签跳转） `<router-link :to="index">`
- 编程式（ js 跳转） `router.push('index')`

### 9.懒加载（按需加载路由）（常考）

webpack 中提供了 require.ensure()来实现按需加载。以前引入路由是通过 import 这样的方式引入，改为 const 定义的方式进行引入。

- 不进行页面按需加载引入方式：

```js
import  home   from '../../common/home.vue'
```

- 进行页面按需加载的引入方式：

```js
const  home = r => require.ensure( [], () => r (require('../../common/home.vue')))
```

### 10.vuex 是什么？怎么使用？哪种功能场景使用它？

vue 框架中状态管理。在 main.js 引入 store，注入。新建了一个目录 store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

```js
// 新建 store.js
import vue from 'vue'
import vuex form 'vuex'
vue.use(vuex)
export default new vuex.store({
	//...code
})

//main.js
import store from './store'
...
```

### 11.vue-router 有哪几种导航钩子?

三种

- 全局导航钩子
  - router.beforeEach(to, from, next),
  - router.beforeResolve(to, from, next),
  - router.afterEach(to, from ,next)
- 组件内钩子
  - beforeRouteEnter,
  - beforeRouteUpdate,
  - beforeRouteLeave
- 单独路由独享组件
  - beforeEnter



### 说出至少 4 种 vue 当中的指令和它的用法

v-if(判断是否隐藏)、v-for(把数据遍历出来)、v-bind(绑定属性)、v-model(实现双向绑定)

### vue 的双向绑定的原理是什么(常考)

vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

具体步骤：
第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter 这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化

第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:

- 在自身实例化时往属性订阅器(dep)里面添加自己
- 自身必须有一个 update()方法
- 待属性变动 dep.notice()通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。

第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。

## vuex 相关

### vuex 有哪几种属性

有 5 种，分别是 state、getter、mutation、action、module

### vuex 的 store 特性是什么

- vuex 就是一个仓库，仓库里放了很多对象。其中 state 就是数据源存放地，对应于一般 vue 对象里面的 data
- state 里面存放的数据是响应式的，vue 组件从 store 读取数据，若是 store 中的数据发生改变，依赖这相数据的组件也会发生更新
- 它通过 mapState 把全局的 state 和 getters 映射到当前组件的 computed 计算属性

### vuex 的 getter 特性是什么

- getter 可以对 state 进行计算操作，它就是 store 的计算属性
- 虽然在组件内也可以做计算属性，但是 getters 可以在多给件之间复用
- 如果一个状态只在一个组件内使用，是可以不用 getters

### vuex 的 mutation 特性是什么

- action 类似于 muation, 不同在于：action 提交的是 mutation,而不是直接变更状态
- action 可以包含任意异步操作

### vue 中 ajax 请求代码应该写在组件的 methods 中还是 vuex 的 action 中

如果请求来的数据不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入 vuex 的 state 里

如果被其他地方复用，请将请求放入 action 里，方便复用，并包装成 promise 返回

### 不用 vuex 会带来什么问题

- 可维护性会下降，你要修改数据，你得维护 3 个地方
- 可读性下降，因为一个组件里的数据，你根本就看不出来是从哪里来的
- 增加耦合，大量的上传派发，会让耦合性大大的增加，本来 Vue 用 Component 就是为了减少耦合，现在这么用，和组件化的初衷相背

### vuex 原理

vuex 仅仅是作为 vue 的一个插件而存在，不像 Redux,MobX 等库可以应用于所有框架，vuex 只能使用在 vue 上，很大的程度是因为其高度依赖于 vue 的 computed 依赖检测系统以及其插件系统，

vuex 整体思想诞生于 flux,可其的实现方式完完全全的使用了 vue 自身的响应式设计，依赖监听、依赖收集都属于 vue 对对象 Property set get 方法的代理劫持。最后一句话结束 vuex 工作原理，vuex 中的 store 本质就是没有 template 的隐藏着的 vue 组件；

### 使用 Vuex 只需执行 Vue.use(Vuex)，并在 Vue 的配置中传入一个 store 对象的示例，store 是如何实现注入的？[美团](https://tech.meituan.com/vuex_code_analysis.html)

Vue.use(Vuex) 方法执行的是 install 方法，它实现了 Vue 实例对象的 init 方法封装和注入，使传入的 store 对象被设置到 Vue 上下文环境的$store 中。因此在 Vue Component 任意地方都能够通过 this.$store 访问到该 store。

### state 内部支持模块配置和模块嵌套，如何实现的？[美团](https://tech.meituan.com/vuex_code_analysis.html)

在 store 构造方法中有 makeLocalContext 方法，所有 module 都会有一个 local context，根据配置时的 path 进行匹配。所以执行如 dispatch('submitOrder', payload)这类 action 时，默认的拿到都是 module 的 local state，如果要访问最外层或者是其他 module 的 state，只能从 rootState 按照 path 路径逐步进行访问。

### 在执行 dispatch 触发 action(commit 同理)的时候，只需传入(type, payload)，action 执行函数中第一个参数 store 从哪里获取的？[美团](https://tech.meituan.com/vuex_code_analysis.html)

store 初始化时，所有配置的 action 和 mutation 以及 getters 均被封装过。在执行如 dispatch('submitOrder', payload)的时候，actions 中 type 为 submitOrder 的所有处理方法都是被封装后的，其第一个参数为当前的 store 对象，所以能够获取到 { dispatch, commit, state, rootState } 等数据。

### Vuex 如何区分 state 是外部直接修改，还是通过 mutation 方法修改的？[美团](https://tech.meituan.com/vuex_code_analysis.html)

Vuex 中修改 state 的唯一渠道就是执行 commit('xx', payload) 方法，其底层通过执行 this.\_withCommit(fn) 设置\_committing 标志变量为 true，然后才能修改 state，修改完毕还需要还原\_committing 变量。外部修改虽然能够直接修改 state，但是并没有修改\_committing 标志位，所以只要 watch 一下 state，state change 时判断是否\_committing 值为 true，即可判断修改的合法性。

### 调试时的"时空穿梭"功能是如何实现的？[美团](https://tech.meituan.com/vuex_code_analysis.html)

devtoolPlugin 中提供了此功能。因为 dev 模式下所有的 state change 都会被记录下来，'时空穿梭' 功能其实就是将当前的 state 替换为记录中某个时刻的 state 状态，利用 store.replaceState(targetState) 方法将执行 this.\_vm.state = state 实现。

## axios

### axios 是什么？怎么使用？描述使用它实现登录功能的流程

axios 是请求后台资源的模块。 npm i axios -S

如果发送的是跨域请求，需在配置文件中 config/index.js 进行配置


### 响应式原理
* 核心点: Object.defineProperty
* 默认 Vue 在初始化数据时，会给 data 中的属性使用 Object.defineProperty 重新定义所有属性,当页面取到对应属性时。会进行依赖收集（收集当前组件的watcher） 如果属性发生变化会通知相关依赖进行更新操作

### Vue中是如何检测数组变化?
* 使用函数劫持的方式，重写了数组的方法
* Vue 将 data 中的数组，进行了原型链重写。指向了自己定义的数组原型方法，这样当调用数组api 时，可以通知依赖更新.如果数组中包含着引用类型。会对数组中的引用类型再次进行监控。

## 为何Vue采用异步渲染?
因为如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染.所以为了性能考虑。 Vue会在本轮数据更新后，再去异步更新视图!

## nextTick实现原理?
nextTick 方法主要是使用了宏任务和微任务,定义了一个异步方法.多次调用 nextTick 会将方法存入
队列中，通过这个异步方法清空当前队列。 所以这个 nextTick 方法就是异步方法

## Vue中Computed的特点
默认 computed 也是一个 watcher 是具备缓存的，只要当依赖的属性发生变化时才会更新视图

## ajax请求放在哪个生命周期中
* 在created的时候，视图中的 dom 并没有渲染出来，所以此时如果直接去操 dom 节点，无法找到相关的元素
* 在mounted中，由于此时 dom 已经渲染出来了，所以可以直接操作 dom 节点
* 一般情况下都放到 mounted 中,保证逻辑的统一性,因为生命周期是同步执行的， ajax 是异步执行的

## 何时需要使用beforeDestroy
* 可能在当前页面中使用了 $on 方法，那需要在组件销毁前解绑。
* 清除自己定义的定时器
* 解除事件的绑定 scroll mousemove ....

## Vue中v-if和v-show的区别
* v-if 如果条件不成立不会渲染当前指令所在节点的 dom 元素
* v-show 只是切换当前 dom 的显示或者隐藏

## diff算法的时间复杂度
两个树的完全的 diff 算法是一个时间复杂度为 O(n3) , Vue 进行了优化·O(n3) 复杂度的问题转换成O(n) 复杂度的问题(只比较同级不考虑跨级问题) 在前端当中， 你很少会跨越层级地移动Dom元素。 所 以 Virtual Dom只会对同一个层级的元素进行对比。

## 简述Vue中diff算法原理
## v-for中为什么要用key

## 描述组件渲染和更新过程
渲染组件时，会通过 Vue.extend 方法构建子组件的构造函数，并进行实例化。最终手动调用$mount() 进行挂载。更新组件时会进行 patchVnode 流程.核心就是diff算法

## 组件中的 data为什么是一个函数?
同一个组件被复用多次，会创建多个实例。这些实例用的是同一个构造函数，如果 data 是一个对象的话。那么所有组件都共享了同一个对象。为了保证组件的数据独立性要求每个组件必须通过 data 函数返回一个对象作为组件的状态。

## Vue中事件绑定的原理
Vue 的事件绑定分为两种一种是原生的事件绑定，还有一种是组件的事件绑定,
* 原生 dom 事件的绑定,采用的是 addEventListener 实现
* 组件绑定事件采用的是 $on 方法

## v-model中的实现原理及如何自定义v-model
v-model 可以看成是 value+input方法 的语法糖 input v-model checkbox v-model select v-model组件的v-model 就是value+input的语法糖

## Vue中v-html会导致哪些问题?
* 可能会导致 xss 攻击
* v-html 会替换掉标签内部的子元素

## Vue组件如何通信? 单向数据流
* 父子间通信 父->子通过 props 、子-> 父 $on、$emit (发布订阅)
* 获取父子组件实例的方式 $parent、$children
* 在父组件中提供数据子组件进行消费 Provide、inject 插件
* Ref 获取实例的方式调用组件的属性或者方法
* Event Bus 实现跨组件通信 Vue.prototype.$bus = new Vue
* Vuex 状态管理实现通信 $attrs $listeners

## Vue中相同逻辑如何抽离？
Vue.mixin 用法 给组件每个生命周期，函数等都混入一些公共逻辑

## 为什么要使用异步组件？
如果组件功能多打包出的结果会变大，我可以采用异步的方式来加载组件。主要依赖 import() 这个语法，可以实现文件的分割加载。

## 什么是作用域插槽?
1.插槽：
* 创建组件虚拟节点时，会将组件的儿子的虚拟节点保存起来。当初始化组件时,通过插槽属性将儿子进行分类 {a:[vnode],b[vnode]}
* 渲染组件时会拿对应的slot属性的节点进行替换操作。（插槽的作用域为父组件）
2.作用域插槽:
作用域插槽在解析的时候，不会作为组件的孩子节点。会解析成函数，当子组件渲染时，会调用此函数进行渲染。（插槽的作用域为子组件）

## 谈谈你对 keep-alive 的了解？
keep-alive 可以实现组件的缓存，当组件切换时不会对当前组件进行卸载,常用的2个属性
include / exclude ,2个生命周期 activated , deactivated LRU算法

## Vue中常见性能优化
1.编码优化:
* 1.不要将所有的数据都放在data中，data中的数据都会增加getter和setter，会收集对应的watcher
* 2. vue 在 v-for 时给每项元素绑定事件需要用事件代理
* 3. SPA 页面采用keep-alive缓存组件
* 4.拆分组件( 提高复用性、增加代码的可维护性,减少不必要的渲染 )
* 5. v-if 当值为false时内部指令不会执行,具有阻断功能，很多情况下使用v-if替代v-show
* 6. key 保证唯一性 ( 默认 vue 会采用就地复用策略 )
* 7. Object.freeze 冻结数据
* 8.合理使用路由懒加载、异步组件
* 9.尽量采用runtime运行时版本
* 10.数据持久化的问题 （防抖、节流）
2. Vue 加载性能优化:
第三方模块按需导入 ( babel-plugin-component )

滚动到可视区域动态加载 ( https://tangbc.github.io/vue-virtual-scroll-list )

图片懒加载 (https://github.com/hilongjw/vue-lazyload.git)

3.用户体验: 
* app-skeleton 骨架屏
* app-shell app壳
* pwa serviceworker

4. SEO 优化：
* 预渲染插件 prerender-spa-plugin
* 服务端渲染 ssr

5.打包优化:
* 使用 cdn 的方式加载第三方模块
* 多线程打包 happypack splitChunks 抽离公共文件
* sourceMap 生成
6.缓存，压缩
* 客户端缓存、服务端缓存
* 服务端 gzip 压缩
### Vue3.0你知道有哪些改进?
* Vue3 采用了TS来编写
* 支持 Composition API Vue3 中响应式数据原理改成 proxy vdom 的对比算法更新，只* 更新 vdom 的绑定了动态数据的部分
### 实现hash路由和history路由
* onhashchange #
* history.pushState h5 api

### action 和 mutation区别
* mutation 是同步更新数据(内部会进行是否为异步方式更新数据的检测) $watch 严格模式下会报
* 错action 异步操作，可以获取数据后调佣 mutation 提交最终数据