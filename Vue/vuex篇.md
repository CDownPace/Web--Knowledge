### 10.vuex 是什么？怎么使用？哪种功能场景使用它？

vue 框架中状态管理。在 main.js 引入 store，注入。新建了一个目录 store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

### 13.vuex 有哪几种属性

有 5 种，分别是 state、getter、mutation、action、module


### vuex中，有默认的五种基本的对象：

state：存储状态（变量）
getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()
mutations：（mutations放方法）修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
actions：异步操作。在组件中使用是$store.dispath('')
modules：store的子模块，为了开发大型项目，方便状态管理而使用的。这里我们就不解释了，用起来和上面的一样。

### 14.vuex 的 store 特性是什么

- vuex 就是一个仓库，仓库里放了很多对象。其中 state 就是数据源存放地，对应于一般 vue 对象里面的 data
- state 里面存放的数据是响应式的，vue 组件从 store 读取数据，若是 store 中的数据发生改变，依赖这相数据的组件也会发生更新
- 它通过 mapState 把全局的 state 和 getters 映射到当前组件的 computed 计算属性


### 15.vuex 的 getter 特性是什么(coputed是计算属性)

- getter 可以对 state 进行计算操作，它就是 store 的计算属性
- 虽然在组件内也可以做计算属性，但是 getters 可以在多给件之间复用
- 如果一个状态只在一个组件内使用，是可以不用 getters

### vuex 的 mutation 特性是什么(mutations放方法)

- action 类似于 muation, 不同在于：action 提交的是 mutation,而不是直接变更状态
- action 可以包含任意异步操作

### 17.不用 vuex 会带来什么问题

- 可维护性会下降，你要修改数据，你得维护 3 个地方
- 可读性下降，因为一个组件里的数据，你根本就看不出来是从哪里来的
- 增加耦合，大量的上传派发，会让耦合性大大的增加，本来 Vue 用 Component 就是为了减少耦合，现在这么用，和组件化的初衷相背

### action 和 mutation区别
* mutation 是同步更新数据(内部会进行是否为异步方式更新数据的检测) $watch 严格模式下会报
* 错action 异步操作，可以获取数据后调佣 mutation 提交最终数据