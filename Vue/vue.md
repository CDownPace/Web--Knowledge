### 1.v-bind和v-model的区别

1.v-bind用来绑定数据和属性以及表达式，缩写为'：'
2.v-model使用在表单中，实现双向数据绑定的，在表单元素外使用不起作用

### v-module
数据双向绑定，v-module里的数据是value，主要用于标签，input标签，下拉菜单，单选多选等。
在移动端click有300ms延迟的问题，解决这个问题可以引入fastClick

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



### 12.说出至少 4 种 vue 当中的指令和它的用法

v-if(判断是否隐藏)、v-for(把数据遍历出来)、v-bind(绑定属性)、v-model(实现双向绑定)

## vuex 相关

### 13.vuex 有哪几种属性

有 5 种，分别是 state、getter、mutation、action、module

### 14.vuex 的 store 特性是什么

- vuex 就是一个仓库，仓库里放了很多对象。其中 state 就是数据源存放地，对应于一般 vue 对象里面的 data
- state 里面存放的数据是响应式的，vue 组件从 store 读取数据，若是 store 中的数据发生改变，依赖这相数据的组件也会发生更新
- 它通过 mapState 把全局的 state 和 getters 映射到当前组件的 computed 计算属性

### 15.vuex 的 getter 特性是什么

- getter 可以对 state 进行计算操作，它就是 store 的计算属性
- 虽然在组件内也可以做计算属性，但是 getters 可以在多给件之间复用
- 如果一个状态只在一个组件内使用，是可以不用 getters


### vuex 的 mutation 特性是什么

- action 类似于 muation, 不同在于：action 提交的是 mutation,而不是直接变更状态
- action 可以包含任意异步操作

### 16.vue 中 ajax 请求代码应该写在组件的 methods 中还是 vuex 的 action 中

如果请求来的数据不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入 vuex 的 state 里

如果被其他地方复用，请将请求放入 action 里，方便复用，并包装成 promise 返回

### 17.不用 vuex 会带来什么问题

- 可维护性会下降，你要修改数据，你得维护 3 个地方
- 可读性下降，因为一个组件里的数据，你根本就看不出来是从哪里来的
- 增加耦合，大量的上传派发，会让耦合性大大的增加，本来 Vue 用 Component 就是为了减少耦合，现在这么用，和组件化的初衷相背



## axios

### 18.axios 是什么？怎么使用？描述使用它实现登录功能的流程

axios 是请求后台资源的模块。 npm i axios -S

如果发送的是跨域请求，需在配置文件中 config/index.js 进行配置




### v-if v-show的区别
例如通过点击按钮来实现一个元素的显示隐藏，通过v-show和v-if都可以实现，v-if会让这个元素消失，v-show是隐藏这个元素，display:none。
* v-if是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
* v-if也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
* v-show就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于CSS进行切换
*  一般来说，v-if有更高的切换开销，而v-show有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用v-show较好；如果在运行时条件很少改变，则使用v-if较好。

### 让css样式只在当前组件生效
style 加上scoped
>注：如果引入组件，那么就不会产生影响，需要sass样式穿透   父元素/deep/子元素 也可以用>>>



### loader
文件加载器，打包以后会生成.html文件，通过loader来解析

### NextTick
* 更改数据以后DOM并不是立刻更新的，而是有一些策略
* $nextTick是在下次DOM更新循环结束之后执行延迟回调，在修改数据之后使用$nextTick,则可以在回调中获取更新后的DOM。
* 需要在视图更新之后，基于新的视图进行操作

### 脚手架和组件data为什么必须是函数？
因为JS本身的特性带来的，如果data是一个对象，那么由于本身属于引用类型，当我们修改其中的一个属性的时，会影响到所有Vue实例的数据。如果将data作为一个函数返回的对象，那么每一个实例的data属性都是独立的，不会互相影响了。

### 对keep-alive的了解
* keep-alive是什么？

内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染dom

* 说明

keep-alive 它不会在dom树中渲染

* 使用场景，几乎和渲染有关系

* 如果想加条件来判定是否重新渲染，就用生命周期函数 activated


### vue中key的作用
key的作用是为了高效的更新虚拟dom

没有加key的默认算法diff算法的问题（虚拟dom）
* 如果节点类型不同，直接干掉前面的所有节点，再创建并插入新的节点，不会再比较这个节点以后的子节点
* 如果节点类型相同，则会重新设置节点的属性，从而实现节点的更新。

### 兄弟组件之间传值
把数据放到公共的bus文件中
>第一个，bus.$emit()
>第二个，mounted组件中放bus.$on()