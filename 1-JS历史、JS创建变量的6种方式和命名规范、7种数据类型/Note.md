# 知其然而知其所以然

# 温故而知新，可以为师矣

## 一、浅聊前端发展史

**第一阶段**：C/S（client server）比如登录微信聊天-> B/S （browser server）比如去淘宝剁手 网页制作

技术栈：PhotoShop、HTML、CSS

**第二阶段**：从静态到动态（页面的数据不能写死），从后端到前端 前端开发工程师「JS/jQuery/Ajax」

前后端分离

- 后端：完成数据的分析和业务逻辑编辑（包含API接口编写）
- 前端：网页制作、JS交互效果、数据的交互和绑定

技术栈：JavaScript、AJAX（跨域技巧）、jQuery...

**第三阶段**：从前端到全端（从PC端到移动端）「H5/CSS3/Hybrid/小程序」

技术栈：H5、CSS3、响应式布局开发、Zepto（类似于jQuery适用于移动端）、Hybrid（混合APP开发）、微信小程序...

**第四阶段**：从全端到全栈「React/Vue/webpack/Node」

**全栈开发**：前后端都可以开发（严格意义讲，一种语言完成前后端开发）

技术栈：NODE（基于JS编程语言开发服务器端程序）、Express/Koa...

为了迎合日益发展的前端开发，JS中诞生很多有助于开发、维护、提高性能的框架：

Vue、React、Angular、webpack

展望WEB4.0时代，VR/AR元年，前端需要Canvas/WebGL...

阮一峰说未来只有两种软件工程师：端工程师/云工程师（Java，Python）

现在前端就必须得会这些技术栈，只要你不会，你就找不到工作

**注：大学的实习生都要求要会Vue，React**

---

## 二、前端常用的工具

IDE（Integrated Development Environment 集成开发环境）

1. 网页三剑客（Adobe Dreamweaver/Fireworks[Photoshop]/Flash）
2. Sublime Text「看代码快速打开」
3. HBuilder
4. **Webstorm**
5. Atom
6. Vim
7. **Visual Studio Code**

浏览器（Browser）**内核**

1. Webkit内核「V8引擎」 Google Chrome/Safari/Opera/大部分国产和手机浏览器
2. Gecko内核（Mozilla Firefox）
3. Presto内核
4. Trident 排版引擎（Internet Explorer）
5. KHTML排版引擎

大部分网站都已放弃IE8及更低版本浏览器（例如：淘宝），现在前端开发工程师已经不用兼容IE8及以下的版本

为什么有这么多的浏览器的内核？

关于浏览器的内核和引擎

- webkit（V8引擎）：chrome、safari、大部分国产浏览器(360、搜狗、QQ、UC、猎豹)
- gecko：火狐浏览器
- trident：IE浏览器
- Presto：opera浏览器

W3C：万维网联盟：制定编程语言的规范与标准

开发者按照规范编写代码，浏览器开发商也会开发一套按照规范把代码渲染成页面的东西（这个东西就是内核或引擎）

浏览器开发商开发的浏览器,目的就是为了按照W3C的规范,识别出开发者编写的代码,并且在页面中绘制出开发者预想的页面和效果(GPU:显卡),我们把浏览器中识别代码绘制页面的东西成为浏览器的内核或渲染引擎

浏览器的内核作用：按照一定的规范，把代码基于GPU（显卡）绘制出对应的图形和页面等等

为啥会出现浏览器兼容：

1. 部分浏览器会提前开发一些更好的功能，后期这些功能会被收录到W3C规范中，但是在收录之前，会存在一定的兼容性。举个栗子:谷歌浏览器开发了一个新的CSS属性(border-radius)  可以让开发者快速实现盒子圆角。后来火狐浏览器发现这个功能很好用,也实现了这个属性，后来欧朋IE9以上浏览器都要加上这个属性，W3C把它融入到规范的时候。
2. 各个浏览器厂商，为了突出自己的独特性，用其它方法实现W3C规范中的功能getComputedStyle、currentStyle

写笔记工具推荐：马克飞象

---

##  三、JavaScript学习

推荐书籍「平时养成看书的习惯」

- JavaScript权威指南
- 你不知道的JavaScript
- JavaScript高级程序设计
- ES6标准入门
- 阮一峰javaScript在线教程

JS：轻量级的**客户端**脚本**编程语言**

1. 编程语言

   HTML+CSS是标记语言

   编程语言是具备一定逻辑的，拥有自己的编程思想 （面向对象编程[OOP]、面向过程编程）

- 面向对象
  - C++
  - JAVA
  - PHP
  - C#（.net）
  - JS
- 面向过程 C语言

2. 目前的JS已经不仅仅是客户端语言了，基于NODE可以做服务器端程序，所以JS是**全栈编程语言**。
3. 学习JS，我们学习它的几部分组成
   - ECMAScript（ES）：JS的核心语法，描述了该语言的语法和基本对象
   - DOM：document object model 文档对象模型，提供各种API（属性和方法）让JS可以获取或者操作页面中的HTML元素（DOM和元素）「作用很重要，概念不重要」，描述处理网页内容的方法的接口
   - BOM：browser object model 浏览器对象模型，提供各种API让JS可以操作浏览器，描述与浏览器进行交互的方法和接口。

## 四、ECMAScript

它是JS的语法规划，JS中的变量、数据类型、语法规范、操作语句、设计模式等等都是ES规定的

1997 ES1.0 -> 1998 ES2.0 -> 1999 ES3.0 （最为广泛应用）-> 2000 ES4（激进颠覆式更新，最后夭折）-> 2015.6 ES6 ....

## 五、变量（variable）

​	它不是指具体的值，只是一个用来**存储具体值**的**容器**或者**代名词**，因为它存储的值可以改变，所以称为变量。

基于ES语法规范，在JS中创建变量有以下方式：

- var（ES3）创建的是变量
- function（ES3） 创建函数（函数名也是变量，只不过存储的值是**函数类型**的而已）
- let（ES6）创建的是变量
- const（ES6）创建的是常量
- import（ES6）基于ES6的模块规范导出需要的信息
- class（ES6）基于ES6创建类

```js
/*
语法：
var [变量名] = 值；
let [变量名] = 值；
const [变量名] = 值；
function 函数名(){

}
...
*/
var n = 13;
n = 15;
alert(n+10);	// =>弹出来25.此时的n代表15

const m = 100;
m = 200; // 会报错的，Uncaught TypeError: Assignment to constant variable.
// 不能给一个常量重新赋值（常量存储的值不能被修改，能够修改就是变量了）
```

创建变量，命名的时候要遵循一些规范「命名规范」

- 严格区分大小写
- 遵循驼峰命名法：按照数字、字母、下划线或者$来命名（数字不能作为名字的开头），命名的时候基于英文单词拼接成一个完整的名字（第一个代词字母小写，其余每一个有意义单词的首字母都大写）
- 不能使用关键字和保留字：在JS中有特殊含义的叫做关键字，未来可能会成为关键字的叫做保留字

```javascript
var n = 12;
var N = 13; // =>两个n不是同一个变量，原因是JS严格区分大小写

// var studentInfo/student_info/_studentInfot（下划线在前的，都是公共变量）/$studentInfo（一般存储的是jQ元素）
// 语义化强一些 add / create / insert / del(delete) / update / remove(rm) / info / detail 
```

## 六、数据值是一门编程语言进行生产的材料，JS中包含的值有以下这些类型「JS中的数据类型」

- 基本数据类型（值类型）
  - 数字 number「数字类型中有一个特殊的值NaN（not a number）代表不是一个**有效的数字**，但是属于number类型的」
  - 字符串 string「用单引号或者双引号包裹起来的都是字符串」
  - 布尔 boolean「true,false」
  - null
  - undefined
- 引用数据类型
  - 对象 object
    - 普通对象
    - 数组对象
    - 正则对象
    - 日期对象
    - ...
  - 函数 function
- ES6中新增加的一个特殊的类型：Symbol，唯一的值

```javascript
// [基本数据类型]
//number
var n = 13; // => 0 -13 13.2 数字类型中有一个特殊的值NaN（not a number）代表不是一个有效的数字，但是属于number类型的

//string 
var s = ''; // => "" '13' "{}" JS中所有用单引号或者双引号包裹起来的都是字符串，里面的内容是当前字符串中的字符（一个字符串由零到多个字符组成）

// boolean
var b = true; // => 布尔类型只有两个值 true真 false假

//[引用数据类型]
var o = {name:'zfpx'，age:9}; // => 普通的对象：有大括号包裹起来，里面包含多组属性名和属性值（包含多组键值对）{} 空对象

var ary = [12,23,34,45]; // => 中括号包裹起来，包含零到多项内容，这种是数组对象 [] 空数组

var reg = /-?(\d|([1-9]\d+))(\.\d+)?/g; // =>由元字符组成一个完整的正则 //不是空正则 是单行注释

function fn(){
    
}

// [Symbol] 创建出来的是一个唯一的值
var a = Symbol('珠峰');
var b = Symbol('珠峰');
a === b // => false
```

扩展：JS代码如何被运行以及运行后如何输出结果

【如何被运行】

- 把代码运行在浏览器中（浏览器内核来渲染解析）「1.把JS代码写在页面中的script标签里;2.在页面中引用JS文件」
- 基于NODE来运行（NODE也是一个基于V8引擎渲染和解析JS的**工具**）「NODE就是长得不像浏览器的浏览器」~~NODE不是一门语言~~

【如何输出结果】

- alert：在浏览器中通过弹框的方式输出（浏览器提示框）「基于alert输出的结果都会转换为字符串」

```javascript
var num = 12;
alert(num);	// => window.alert()

var str = 'zf';
alert(str);
// 基于alert输出的结果都会转换为字符串：把值（如果是表达式先计算出结果），通过toString这个方法转换为字符串，然后再输出
alert(1+1); // 这个输出的结果是什么？ 字符串 '2'
alert(true);	// 'true'
alert([12,23]); // '12,23'
alert({name:'xxx'});	// => 思考题："[object Object]" 为什么对象toString后的结果就是[object Object]，为啥？
```

- confirm：和alert的用法一直，只不过提示的框中有**确定**和**取消**两个按钮，所以它是确认提示框。

```javascript
var flag = confirm('确定要退出吗？');
if(flag){
    // => flag:true 用户点击的是确定按钮
}else{
	// => flag:false 用户点击的是取消按钮
}
```

- prompt：在confirm的基础上增加**输入框**

```javascript
var flag = confirm('请输入你想要输入的内容');
alert(flag);
```

- console.log：在浏览器控制台输出日志（按F12（FN+F12）打开浏览器的控制台）
- 以谷歌浏览器控制台为例
  - Elements：当前页面中的元素和样式在这里都可以看到，还可以调节元素的样式修改结构等「ctrl+shift+c」
  - Console：控制台，可以在JS代码中通过.log输出到这里，也可以在这里直接的编写JS代码
  - Sources：当前网站的源文件都在这里
  - ......
- console.dir：比log输出的更加详细一些（尤其是输出对象数据值的时候）
- console.table：把一个JSON数据按照表格的方式输出
- 。。。（自己回去扩展更多console输出方法）

```javascript
var num = 12;
/* 快捷键：num.log Tab */
console.log(num);
```

## 七、数据类型的详细剖析

1.number数字类型

NaN：not  a number 但是它是数字类型的

isNaN：检测当前值是否不是有效数字，返回true，代表不是有效数字，返回false，是有效数字

``` javascript
// 语法：isNaN([value])
var num = 12;
isNaN(num); // 检测num变量存储的值是否为有效数字 false

isNaN('13') // => false
isNaN('珠峰')  // => true
isNaN(true); // => false
isNaN(false); // => false
isNaN(null); // => false
isNaN(undefined); // => true
isNaN({age:9});	// => true
isNaN([12,13]); // => true
isNaN([12]); // => false
isNaN(/^$/); // => true
isNaN(function(){}); // => true
```

重要:isNaN检测的机制「知其所以然」

1. 首先验证当前要检测的值是否为数字类型的，如果不是，浏览器会默认的把值转换为数字类型

把非数字类型的值转换为数字

   - **其它基本类型**转换为数字：直接使用**Number**这个方法转换的

   【字符串转数字】

```javascript
Number('13') // => 13
Number('13px') // => NaN 如果当前字符串中出现任意一个非有效数字字符，结果则为NaN
Number('13。5') // => 13.5 可以识别小数
```

   【布尔转数字】

```javascript
Number(true) // => 1
Number(false) // => 0
```

   【其它转数字】

```javascript
Number(null) // => 0
Number(undefined) // => NaN
```

- 把引用数据类型转换为数字：先把引用值调取**toString**转换为字符串，然后再把字符串调取**Number**转换为数字

  【对象】

```js
({}).toString() // => '[object Object]' => NaN
```

​	【数组】

```js
[12,23].toString() // => '12,23' => NaN
[12].toString() // => '12' => 12
```

​	【正则】

```js
/^$/.toString() // => '/^$/' => NaN
```

注：

```js
Number('') // => 0
[].toString() // => '' => isNaN([]) => false
```

2. 当前检测的值已经是数字类型，是有效数字，返回false，不是，返回true「数字类型中只有NaN不是有效数字，其余都是有效数字」

2.parseInt / parseFloat

> 等同于Number，也是为了把其它类型的值转换为数字类型
>
> 1
>
> 和Number的区别在于字符串转换分析上
>
> Number：出现**任意非有效数字字符**，结果就是**NaN**
>
> parseInt：把一个字符串中的**整数部分**解析出来
>
> parseFloat：把一个字符串中的**小数（浮点数）部分**解析出来

```js
parseInt('13.5px') // => 13
parseFloat('13.5px') // => 13。5

parseInt('width:13.5px') // => NaN 从字符串最左边字符开始查找有效数字字符，并且转换为数字，但是一旦遇到一个非有效数字字符，查找结束
```

3.NaN的比较

```js
NaN == NaN // => false NaN和谁都不相等，包括自己
```

思考题：

1、有一个变量num，存储的值不知道，我想检测它是否为一个有效数字，下面方案是否可以？

```js
if(Number(num) == NaN){
    alert('num不是有效数字！')
}
// NaN和谁都不相等，条件永远不成立（即使num确实不是有效数字，转换的结果确实是NaN，但是NaN!= NaN的）

if(isNaN(num)){
   // => 检测是否为有效数字，只有这一种方案 
   alert('num不是有效数字！')
}
```

2、"[object Object]" 为什么对象toString后的结果就是[object Object]，为啥？

基于alert输出的结果都会转换为字符串，大概就是应用了`String`方法。下面是对`String`方法的剖析：

`String`方法背后的转换规则，与`Number`方法基本相同，只是互换了`valueOf`方法和`toString`方法的执行顺序。 

>1. 先调用对象自身的`toString`方法。如果返回原始类型的值，则对该值使用`String`函数，不再进行以下步骤。
>2. 如果`toString`方法返回的是对象，再调用原对象的`valueOf`方法。如果`valueOf`方法返回原始类型的值，则对该值使用`String`函数，不再进行以下步骤。
>3. 如果`valueOf`方法返回的是对象，就报错。

```javascript
String({a: 1})
// "[object Object]"

// 等同于
String({a: 1}.toString())
// "[object Object]"
```

上面代码先调用对象的`toString`方法，发现返回的是字符串`[object Object]`，就不再调用`valueOf`方法了。 

注：可以自定义`toString`方法，`toString`方法先于`valueOf`方法执行。

```javascript
String({
  toString: function () {
    return 3;
  }
})
// "3"

String({
  valueOf: function () {
    return 2;
  }
})
// "[object Object]"

String({
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return 3;
  }
})
// "3"
```

3、更多console输出方法

[console 对象与控制台](https://wangdoc.com/javascript/features/console.html)

4、单线程同步渲染，多线程异步渲染？？？

上课的时候，跟着周啸天老师来做笔记，下课之后绝对是把笔记整理出来。手写/电子版

**每周至少抽出三天的时间，而这三天每天至少抽出1小时-1.5小时**，什么都不要，**从头到尾**把笔记过一遍，不用死记硬背，就是过一遍，下下周还是这样**从头到尾**过一遍笔记。

简历上不要写精通什么，你这样写的话，保证面试官会加大面试难度，然后就GG。
