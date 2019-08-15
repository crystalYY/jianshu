# 简书项目总结

标签（空格分隔）： 项目总结

---
## 技术栈：
react + react-redux + styled-components + axios + redux-thunk + react-router-dom + immutable

## 项目使用方法

  

     1. cd jianshu
     2. git clone https://github.com/crystalYY/jianshu.git
     3. npm start
     4. 项目将运行在 http://localhost:3000/



## 项目整体架构
### **已完成部分**
1. 首页
2. 详情页
3. 登录界面


### **1. react 负责项目UI的展现**
#### **优点**
1. 声明式开发相对之前的命令式开发能节约很多操作DOM的语句
2. 可以和其他的框架并存，react只渲染reactDOM里render的部分
3. 组件化
4. 单向数据流，父组件可以向子组件通过属性传值，但是这个值不能在子组件中更改，是一个只读属性
5. 是一个视图层框架，只负责处理数据与页面的渲染，组件之间的通信还需要其他组件的帮助，比如flux,Redux
6. 函数式编程，便于自动化测试

#### **虚拟DOM**
虚拟DOM是一个JS对象，在数据发生更新时，会创建一个新的虚拟DOM也就是一个新的js对象，然后和之前的虚拟对象进行比对，寻找差异。比较js对象比比较DOM结构更快，性能更好。
JSX模板->createElement->js对象（虚拟DOM）->真实DOM结构
jsx语法更简洁易懂，createElement更接近底层

**react中比对两次虚拟DOM的diff算法：**
1. 同层比对，从最上层开始比对节点的key值，如果key值不一致，则不再比较下面的各层，直接重新渲染当前层以及当前层以下的各层
2. 为了能有一个好的比较和渲染的性能，key值需要是一个稳定的值，一般不用index做key值，因为删除或增加节点会导致key值发生变化

#### **生命周期函数**
定义：在某一个时刻会自动调用执行的函数，比如render()函数，在state或者props改变时会自动调用，这就是一个生命周期函数。生命周期函数是针对组件来说，每个组件都会有生命周期函数
1. 初始化：set state and props
2. 挂载（mounting）：
    1. **`constructor()`**
    2. `static getDerivedStateFromProps()`
    3. **`render()`**
    4. 页面挂载之后执行**`componentDidMount()`函数**

  挂载指的是页面第一次加载的时候，所以componentWillMount和页面挂载之后执行componentDidMount函数只执行一次，constructor也只在页面初始化的时候执行一次，getDerivedStateFromProps()和render() 可以执行多次）
  
3. updating(props or state改变)
    1. `static getDerivedStateFromProps()`
    2. **`shouldComponentUpdate(nextProps, nextState)`**
    3. **`render()`**
    4. `getSnapshotBeforeUpdate(prevProps, prevState)`
    5. **`componentDidUpdate(prevProps, prevState, snapshot)`**，可以是用来操纵DOM的时间，snapshot需要继承`getSnapshotBeforeUpdate()` 的返回值

4.  Unmounting：组件将要被移除的时候执行的生命周期函数
**`componentWillUnmount()`**

5. error handling(当在渲染、在一个生命周期函数中或者在任何一个子组件的constructor中发生错误时自动调用)
    1. `static getDerivedStateFromError()`
    2. `componentDidCatch()`
####  **react性能优化**
1. 在constructor函数内绑定this，改变作用域，这样就可以只执行一次绑定
2. setState为一个异步函数，可以提升性能
3. react内置的虚拟DOM，同层比对，key值的机制
4. 利用shouldComponentUpdate(nextProps, nextState)来判断属性或者state是否改变，改变了再渲染，可以避免子组件无谓的渲染

#### **react-transition-group动画组件**

在CSSTransition组件标签中定义 `in`属性，代表的为展示这个组件开始和结束的状态，是一个Boolean类型的属性，默认值为false。如果开始为false，那么从false到true转换的过程为入场动画，从true到false转换的过程为出场动画。入和出相对于动画而言。

####  **PureComponent**
将extends Component 换为PureComponent可以大幅提升性能，当数据的改变和当前组件无关时，当前组件就不会渲染。但是需要和immutable.js配合使用，不配合使用可能会出现问题

### **redux**

#### 基本思想
![7ad9f68f305a49901f5fa6eb5a289570.png](en-resource://database/602:1)
所有组件把数据统一存储在Store中，一个组件修改了Store中的数据后，其他组件可以感知到，当感知到数据的修改后就会自动去Store中取数据更新自己组件的内容
store中的数据只能store自己通过reducer返回的newState更新，别的组件都无法更新。并且一个项目中只有一个store

**Redux = Reducers + Flux**
#### Redux工作流程
![此处输入图片的描述][1]
1. 从redux中导入createStore,利用createStore()创建一个store，并传入reducer作为参数
2. reducer.js export default 一个函数（state, action）=> { return state;}。return的内容可以根据需要定制
1. 组件发出一个action，需要定义这个action的type，action需要定义修改数据所需要的内容，比如index等，并通过dispatch将action递送到store
![此处输入图片的描述][2]
2. store接收到action后将action和当前的state传递给reducer，reducer根据传过来的action的type属性决定要执行什么操作，并且在reducer中state只能接收而不能修改，所以修改对当前的state进行深拷贝，对拷贝的副本进行修改后返回新的state，也就是修改后的副本
3. newState返回给store后，组件通过subscribe监测到store的数据发生了改变，于是通过store.getState的方法重新获取更新后数据。
![此处输入图片的描述][3]

#### combineReducers
如果一个总的reducer过长则修改state的效率会变低，这个时候可以利用combineReducers来分类管理reducers
```
    export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailStore,
    login: LoginReducer
  });
```
需要先从redux中引入combineReducers,然后在一个 组件中再创建一个小的reducer，比如在header组件中创建headerReducer，创建方法和之前创建reducer一致，，先定义一个defaultState，然后导出一个纯函数
```
export default （state=defaultState, action）{ 
     return state;
}
```
这个时候再想通过state获取store中的值，就不再是state.value， 而是state.header.value。多了一层header
#### **immutable**
作用：防止state被修改，immutable组件生成的对象不能被修改
```
import {fromJS} from 'immutable';
const defaultState = fromJS({
  login:false
});
```

在reducer中，可以通过state.set('value','hello');来设置state，并根据上一个state以及set的value值生成一个全新的immutable对象返回。

在组件中使用时，需要调用immutable对象的get方法获取store中的数据，不能通过'.'运算符获取到存储在immutable对象中的数据

如果defaultState中含有一个数组list，那么在调用fromJS将defaultState转换为immutable对象时，也会把数组list转换为immutable对象，这就要求在`state.set('list',action.data)`时，传入的action.data为immutable对象


#### **react-redux**
是一个官方的将react与redux进行绑定的库
##### **Provider组件**
Provider组件的作用是将Provider组件内的组件与store进行绑定
![https://i.niupic.com/images/2019/08/15/_1873.png][4]

##### **connect 方法**
connect方法将组件与store相连接，并通过mapStateToProps(将state映射到当前组件的props)与mapDispatchToProps(将dispatch方法映射到props上）。
![https://i.niupic.com/images/2019/08/15/_1884.png][5]
其中mapStateToProps ，接收一个state参数，返回一个对象，对象内为props与state的映射关系，当当前组件需要用到state中的数据时，就可以根据映射关系直接调用this.props.xxx就可以
![此处输入图片的描述][6]
mapDispatchToProps，接收一个dispatch参数，返回一个对象，对象里包含会dispatch(action)的方法。dispatch(action)后就可以通过reducer来修改state，返回给store新的state了。当前组件可以通过this.props.方法名来调用，并且无需bind(this)
![此处输入图片的描述][7]


#### **深拷贝**
reducer里面可以接收state，但不能直接改变state，需要通过深拷贝将原来的state拷贝一份，然后再将新的state返回。
深拷贝的一种方法：运用JSON.stringify()将一个对象或数组转换为一个JSON字符串，然后再利用JSON.parse()解析JSON字符串，返回给定JSON文本的对象。它的返回值为object 

###  **中间件**
##### **redux-thunk(主要功能为让dispatch可以接收函数类型的action)**
redux-thunk中间件就是一个函数，对store.dispatch方法进行了改造，在发出action和执行reducer之间，添加其他功能
**通过store.dispatch(action) 将action传递给中间件
中间件里面的action函数再通过参数接收的dispatch将action传递给reducer，此时的action需要是一个对象**
主要用于处理异步操作，如下图所示可以看到store.dispatch接收到函数类型的action后，自动发送出去，然后接着执行下面的console，而函数类型的action会在另一个线程上执行异步操作。
![此处输入图片的描述][9]


  [1]: https://i.niupic.com/images/2019/08/15/_1648.png
  [2]: https://i.niupic.com/images/2019/08/15/_1662.png
  [3]: https://i.niupic.com/images/2019/08/15/_1678.png
  [4]: https://i.niupic.com/images/2019/08/15/_1873.png
  [5]: https://i.niupic.com/images/2019/08/15/_1884.png
  [6]: https://i.niupic.com/images/2019/08/15/_1908.png
  [7]: https://i.niupic.com/images/2019/08/15/_1915.png
  [8]: https://i.niupic.com/images/2019/08/15/_1915.png
  [9]: https://i.niupic.com/images/2019/08/15/_1712.png