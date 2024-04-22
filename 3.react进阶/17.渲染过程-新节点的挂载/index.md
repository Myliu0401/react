### react渲染的原理

渲染：生成用于显示的对象，并将这些对象形成真实的DOM对象

- React元素：React Element, 通过 React.createElement创建、JSX语法。
  如：
  - `<div>...</div>`
  - `<Comp><Comp>` 组件也会被 `babel` 转换成 `React.createElement(Comp,...)`; 转换成React元素
- React节点：专门用于渲染到`UI`界面的对象，`ReactDOM`会通过`React元素`创建`React节点`，`ReactDOM`一定是通过`React节点`来渲染的。
  - `将React节点渲染到ui界面，如浏览器环境下，ReactDOM将React节点渲染成真实DOM对象`

···
  React.render(react元素,...) 内部会通过react元素创建react节点，在根据react节点创建真实DOM对象。
  ReactDOM渲染时一定是通过react节点来渲染的。
···

![img](https://www.yulian.pro:443/imageFile/2019-07-25-13-51-08.png)

节点类型：
   1. React DOM节点：创建该节点的react元素类型是一个字符串 （该节点根据react元素类型来创建的）
   2. React 组件节点：创建该节点的react元素类型是一个函数或类
   3. React 文本节点：根据字符串、数字创建
   4. React 空节点：  由null undefined false true
   5. React 数组： 根据数组来创建

真实DOM：通过 document.createElement 创建dom元素

### 首次渲染/新节点渲染

  1. 通过参数的值来创建节点
     `ReactDOM.render(react元素,...) 通过react元素来创建节点`
  2. 根据不同的节点类型，做不同的操作：
     1. 文本节点：通过 `document.createTextNode` 创建真实文本节点。
     2. 空节点： 什么都不做。
     3. 数组节点： 遍历数组，将数组的每一项递归创建节点 （回到第一步反复操作，直到遍历结束）
     4. DOM节点： 通过 `document.createElement` 创建真实DOM对象,然后立即设置该真实dom的各种属性，然后遍历创建该节点React元素的props里的children属性（回到第一步反复操作，直到遍历结束）如果前面的操作有生成真实DOM那么会将真实DOM插入到上一个真实DOM里面。
     5. 组件节点： 
        1. 函数组件： 调用函数（该函数必须返回一个可生成节点的内容），将该函数的返回结果递归生成节点（回到第一步反复操作，直到遍历结束）
        2. 类组件：
           1. 创建该类实例，并将实例保存到节点对象中
           2. 立即调用对象的生命周期方法 `static getDerivedStateFromProps`
           3. 运行该对象的`render`函数，拿到返回值（回到第一步进行递归操作）
           4. 将该组件的 `componentDidMount` 加入到执行队列（先进先出，先进先执行），当整颗虚拟dom树构建完成后并将真实dom添加到容器后，执行该队列。
  3. 生成完虚拟dom树后，将该树保存起来，以便后续使用。
  4. 将之前生成的真实根dom对象，加入到容器中。

```js
  const app = <div className="div">
     <h1>
         标题
         { ["abc",null,<p>段落</p>] }
     </h1>
     <p>undefined</p>
  </div>
```
以上的代码生成的虚拟dom树：
![img](https://www.yulian.pro:443/imageFile/dfe9a5c8fc7ee65a46be7c96d03a3ee.png)

```js
  function Comp(props){
       return (<h1>comp { props.n }</h1>);
  };
  function App(props){
      return (<div>
         <Comp n={5}></Comp>
      </div>); 
  }
  const app = <App />
  ReactDOM.render(app,document.getElementById('root'));
```
以上的代码生成的虚拟dom树：
![img](https://www.yulian.pro:443/imageFile/72702c32ff903484d78ff026a8fdd0a.png)

```js
  class Comp1 extends React.Component {
      render(){
        return (<h1>Comp1</h1>)
      }
  };

  class App extends React.Component {
    render(){
      return (<div>
        <Comp1></Comp1>
      </div>);
    }
  };

  const app = <App/>
  ReactDOM.render(app,document.getElementById('root'));
```
以上代码生成的虚拟dom树：
![img](https://www.yulian.pro:443/imageFile/5d30e6240903c56ddb177fbc2cd5d4b.png)


