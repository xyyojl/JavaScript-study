### For循环

> 作用：按照一定的规律，**重复去做某一件事情**，此时我们就需要使用循环来处理啦
>
> for循环的语法组成
>
> ​        1.定义初始值 var i = 0
>
> ​        2.设定循环成立的条件（条件成立循环继续，不成立循环结束）  i < ary.length
>
> ​        3.条件成立会执行循环体中的内容（大括号包裹的就是循环体）
>
> ​        4.执行步长累加的操作

通过场景来应用知识，虽然这些场景可能在项目中没有什么作用

场景1：输出数组中的每一项内容，初步认识For循环 

```javascript
var ary = [12,23,34];

for (var i = 0; i < ary.length; i++) {
    // => 第一次循环：i=0 i<3 ... i=1 => ary[0]
    // => 第二次循环：i=1 i<3 ... i=2 => ary[1]
    // => 第三次循环：i=2 i<3 ... i=3 => ary[2]
    // => 第四次循环：i=3 i<3 循环结束（本次没有循环）
    console.log(ary[i]);
}
```

场景2：输出每一项：倒着输出 

```javascript
var ary = [12,23,34];

// ary.length-1 当前数组中最后一项的属性名（索引）
for(var i =ary.length-1;i>=0;i--){
    console.log(ary[i]);
}
```

场景3：输出数组中的内容：输出奇数项的内容 

```javascript
var ary = [12,23,34];

// 方法1
for(var i = 0;i<ary.length;i++){
    /* i=0 第一项 奇数项
    i=1 第二项 偶数项
    i=2 第三项 奇数项
    索引为偶数，代表的是计数项，如何判断当前i的值是奇数还是偶数？ 
    12%5：%称为模，用12除以5取余数
    */
   if(i%2===0){ // 当前i的值为偶数
        console.log(ary[i]);
   }
}

// 方法2
for(var i = 0;i<ary.length;i+=2){
    console.log(ary[i]);
}
```

> ​    在for循环的循环体中，经常出现两个常用的关键字：
>
> 1. continue: 继续
> 2. break: 终端或者结束

场景4：理解continue和break

```javascript
for (var i = 0; i < 10; i++) {
    if(i<5){
        i++;
        continue; // => 结束本轮循环（循环体中continue后面代码将不再执行）
        // 继续执行下一轮循环
    }
    if(i>7){
        i += 2;
        break; // =>强制结束整个循环，不做任何的处理
    }
    i += 1;
}
console.log(i);
```

场景5：再次理解continue和break

```javascript
for (var i = 1; i <= 10; i+=2) {
    if(i <= 5){
        i++;
        continue;
    }else{
        i -= 2;
        break;
    }
    i--;
    console.log(i);
    
}
console.log(i); // 5
```

### 获取页面中的DOM元素

`document.getElementById`

> 在整个文档中，通过元素的ID属性值，获取到这个元素对象
>
> getElementById是获取元素的方法，而document限定了获取元素的范围，我们把这个范围称之为：“上下文【context】”

```javascript
var oBox = document.getElementById('box');

/*
	1. 通过getElementById获取的元素是一个对象数据类型的值（里面包含很多内置的属性）
	typeof oBox => "object"
	2. 分析包含的属性
		className: 存储的是一个字符串，代表当前元素的样式类名
		id: 存储的是当前元素的ID值（字符串）
		innerHTML: 存储当前元素中所有的内容（包含HTML标签）
		innerText: 存储当前元素中所有的文本内容（没有元素标签）
		
		onclick: 元素的一个事件属性，基于这个属性，可以给当前元素绑定点击事件
		onmouseover: 鼠标滑过事件
		onmouseout: 鼠标离开事件
		
		style: 存储当前元素所有的“行内样式”值，（**获取和操作**的都只能是写在标签上的行内样式，写在样式表中的样式，无法基于这个属性获取到）
*/
```

`[context].getElementsByTagName `

> 在指定的上下文中，通过元素的标签名获取一组元素集合
>
> 
>
> 上下文是我们自己来指定的

```javascript
var boxList = oBox.getElementsByTagName('li');

/*
	1。 获取的结果是一个元素集合（HTMLCollection）。首先它也是对象数据类型的，结构和数组非常相似（数字作为索引，length代表长度），但是**不是**数组，我们把它叫做“类数组/伪数组”
	boxList[0] 获取当前集合中的第一个li（通过索引获取到具体的某一个li即可）
	boxList.length 获取集合中li的数量
	
	2. 集合中的每一项存储的值又是一个元素对象（对象数据了行，包含很多的内置属性，例如：id/className）
	
	boxList[1].style.color = 'red'; 修改集合中第二个li的文字颜色
*/
```

基于JS实现隔行变色



### 函数

> 在JS中，函数就是一个方法（一个功能体），基于函数一般都是为了**实现某个功能**「比如洗衣机就是一个函数」

```javascript
var total = 10;
total += 10;
total = total /2;
total = total.toFixed(2); // => 保留小数点后边两位（数字有一个方法toFixed用来保留小数点后面的位数）

...

// 在后续的代码中，我们依然想实现相同的操作（加10除以2），后面我们需要**重新编写**代码 => 这样的方法会导致页面中存在大量冗余的代码，也降低了开发的效率，如果我们能把实现这个功能的代码进行“封装”，后期需要这个功能执行即可，这样就好了！
```

**函数诞生的目的就是为了实现封装**：把实现一个功能的代码封装到一个函数中，后期想要实现这个功能，只需要把函数执行即可，不必要再重复编写重复的代码，起到了**低耦合高内聚（减少页面中的冗余代码。提高代码的重复使用率）**的作用

```javascript
function fn(){
	var total = 10;
    total += 10;
    total /= 2;
    total = total.toFixed(2);
    console.log(tatal);
}
fn();
fn();
...
想用多少次，我们就执行多少次函数即可
```

ES3标准中：

```javascript
// => 创建函数
function 函数名([参数]){
    函数体：实现功能的JS代码
}
// => 把函数执行
函数名();
```

ES6标准中创建箭头函数：

```javascript
llet 函数名(变量名) = ([参数])=>{
    函数体
} 
函数名();
let fn = () =>{
    let total = 10;
    ...
}
fn();
```

### 函数数据类型的运行机制

函数作为引用数据类型中的一种，它也是按照引用地址来操作的，接下来，我们学习一下**函数的运行机制** 

```javascript
var obj = {
    name:'珠峰培训',
    age:9
}

function fn(){
	var total = 10;
    total += 10;
    total = total.toFixed(2);
    console.log(tatal);
}
fn();
```

【创建函数】

1. 函数也是引用类型，首先会开辟一个新的堆内存，把函数中的代码当做“**字符串**”存储到内存中（对象向内存中存储的是**键值对**）
2. 把开辟的堆内存地址赋值给函数名（变量名）

此时我们输出fn（**切记不是fn()**）代表当前函数本身，函数本体

如果我们执行fn()，这是把函数执行

所以是否加小括号是**两种不同本质的操作**

【函数执行】

目的：把之前存储到堆内存中的**代码字符串**变为**真正的JS代码**自上而下执行，从而实现应用的功能

1.函数执行，首先会形成一个私有的作用域（一个供代码执行的**环境**，也是一个栈内存）

2.把之前在堆内存中存储的字符串复制一份过来，变为真正的JS代码，在新开辟的作用域中自上而下执行。

当浏览器加载JS代码，想要代码自上而下执行

### 函数中的参数

> 参数是函数的入口：当我们在函数中封装一个功能，发现一些原材料不确定，需要执行函数的时候用户传递进来才可以，此时我们就基于参数的机制，提供出入口。「比如是生产洗衣机的厂家，并不知道用户是怎么操作，他们只需要提供一些孔，入水口」

```javascript
//=>此处的参数叫做形参：入口，形参是变量（n/m就是变量）
function sum(n,m){
    //=> n和m分别对应要求和的两个数字
    var total = 0;
    total = n + m;
    console.log(total);
}
// => 此处函数执行传递的值是实参：实参是具体的数据值
sum(10,20);  // => n=10 m=20
sum(10); //=> n=10 m=undefined
sum(); //=> n和m都是undefined
sum(10,20，30);  // => n=10 m=20 30没有形参变量接收
```

### 隔行变色

#### 纯css实现隔行变色

css3的小知识：

- nth-child(n):当前容器所有子元素中的第N个

  - 例子：.box li:nth-child(1)  box容器所有子元素中的第一个并且标签名是li的

- nth-of-type(n):先给当前容器按照某一个标签名进行分组，获取分组中的第N个

  - 例子：.box li:nth-of-type(1) 先获取box中的所有的li，在获取li中的第一个

- 这个选择器匹配偶数even,奇数odd

  - ```css
    .box li:nth-of-type(even){
    	background-color: lightcyan;
    }
    ```

- 如何实现单行溢出省略

  - ```css
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
    ```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS实现隔行变色</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        ul,ol{list-style: none;}
        .box{
            width: 300px;
            margin: 20px auto;
        }
        .box li{
            padding: 0 5px;
            line-height: 35px;
            border-bottom: 1px dashed #aaa;
            cursor: pointer;

            /* 超出一行的内容自动裁切，以省略号代替 */
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        
        .box li:nth-child(odd){
            background-color: lightcyan;
        }

        .box li:hover {  /*!*鼠标滑过的样式,鼠标离开回归原有样式*!*/
            background: lightcoral;
        }

    </style>
</head>
<body>
    <ul class="box">
        <li>岁末，珠峰就业还在一直创造奇迹</li>
        <li>珠峰成长的秘密-兴盛衰败一挥间，长留慈悲在心念</li>
        <li>珠峰培训帮我实现外企梦—上海姑娘徐米米的故事</li>
        <li>应届毕业生也能拿20多万年薪，我是面霸，我一口气拿下六个大公司offer</li>
        <li>学完之真的能推荐进百度吗，我来揭发珠峰培训的老底</li>
        <li>担心逻辑差，学不会，23岁切图小妹工资翻倍</li>
    </ul>
</body>
</html>
```

JS实现隔行变色

实现思路：

1. 获取到box容器中所有的li（我们需要先获取box）
2. 了解如何修改样式：1.通过className修改样式 2.基于className属性修改box的样式类名，从而改变样式
3. 搞个循环「要判断」来完成我们的样式赋值，使用循环避免重复的操作。
4. 拓展：回去后实现隔三行变色

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JS实现隔行变色</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        ul,ol{list-style: none;}
        .box{
            width: 300px;
            margin: 20px auto;
        }
        .box li{
            padding: 0 5px;
            line-height: 35px;
            border-bottom: 1px dashed #aaa;
            cursor: pointer;

            /* 超出一行的内容自动裁切，以省略号代替 */
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .bgColor{
            background-color: lightcyan;
        }

    </style>
</head>
<body>
    <ul class="box" id="box">
        <li>岁末，珠峰就业还在一直创造奇迹</li>
        <li>珠峰成长的秘密-兴盛衰败一挥间，长留慈悲在心念</li>
        <li>珠峰培训帮我实现外企梦—上海姑娘徐米米的故事</li>
        <li>应届毕业生也能拿20多万年薪，我是面霸，我一口气拿下六个大公司offer</li>
        <li>学完之真的能推荐进百度吗，我来揭发珠峰培训的老底</li>
        <li>担心逻辑差，学不会，23岁切图小妹工资翻倍</li>
    </ul>

    <script>
        //   1. 获取到box容器中所有的li（我们需要先获取box）
        var oBox = document.getElementById('box');

        // 想要修改box的样式
        /* 
            
            2. 通过className修改样式
         */
        //  1. 通过style修改行内样式
        // oBox.style.backgroundColor = 'pink';

        // 2.基于className属性修改box的样式类名，从而改变样式
        // oBox['className'] = 'box BgColor';
        oBox['className'] += ' BgColor';

        
        var boxList = oBox.getElementsByTagName('li');
        
        // 2.搞个循环来完成我们的样式赋值

        for (var i = 0; i < boxList.length; i++) {
            // => 索引是奇数代表偶数行
            if (i%2!==0) {
                // boxList[i].style.backgroundColor = 'pink';
                boxList[i].className += 'bgColor'; 
            }
        }
        // 1 代表第2行
       /*  for (var i = 1; i < boxList.length; i+=2) {
            boxList[i].className += 'bgColor';
            
        } */
    </script>
</body>
</html>
```

### 选项卡

1. 给所有的li绑定点击事件，当点击任何一个li的时候，都做第二部操作
2. 可以先让所有的li&&div的class都为空（xxx.className=''）再让当前点击的这个li和对应的div有active这个样式类即可

表面：循环绑定事件的i为啥不行

原理：堆栈内存释放，作用域链查找机制

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./css/reset.min.css">
    <style>
        .tabBox{
            width: 500px;
            margin: 20px auto;
        }
        .tabBox ul{
            position: relative;
            top: 1px;
            /* 相对于自己之前的位置向下移动1px，使得边框重合 */
        }
        .tabBox ul li{
            display: inline-block;
            padding: 0 10px;
            margin-right: 10px;
            line-height: 33px;
            border: 1px solid #aaa;
            cursor: pointer;
        }
        .tabBox ul li.active{
            color: lightcoral;
            font-weight: bold;
            border-bottom-color: #fff;
            /* 当前li的边框覆盖着div的边框，我们让li的下边框是背景颜色白色
            这样看上去就好像没有边框了 */
        }
        .tabBox div{
            display: none;
            line-height: 148px;
            text-align: center;
            border: 1px solid #aaa;
        }
        .tabBox div.active{
            display: block;
        }
    </style>
</head>
<body>
    <!-- div.tabBox#tabBox>(ul>li*3)+(div*3) [TAB] 快速写好结构-->
    <div class="tabBox" id="tabBox">
        <ul>
            <li class="active">新闻</li>
            <li>电影</li>
            <li>音乐</li>
        </ul>
        <div class="active">金三胖来华访问</div>
        <div>复仇者联盟3</div>
        <div>没时间听音乐</div>
    </div>
    <script src="./js/tab.js"></script>
</body>
</html>
```

JS代码：

```js
var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('li');
var divList = tabBox.getElementsByTagName('div');

// =>封装一个方法完成页卡切换
function changeTab(n){
    // => n：形参变量，当执行这个方法的时候，会把当前点击的这个li的索引传递过来

    // =>1.所有都没有选中样式
    for(var i = 0;i<tabList.length;i++){
        tabList[i].className = '';
        divList[i].className = '';
    }
    // => 2.当前点击的有选中样式 难题：不知道当前点击的是哪一个
    tabList[n].className = 'active';
    divList[n].className = 'active';
}

// => 自定义属性方式
for(var i = 0;i < tabList.length;i++){
    // => 每一轮循环的时候，给每一个li设置一个自定义属性'zfIndex'，存储的值是各自的索引
    /* 
        tabList
        {
            0:{zfIndex:0...},
            1:{zfIndex:1...},
            2:{zfIndex:2...},
            length:3
        }
    */
    tabList[i]['zfIndex'] = i;
    tabList[i].onclick = function(){
        // this:代表的是当前点击的这个li
        changeTab(this['zfIndex']);  // => 需要索引
    }
} 
```

更多实现选项卡的JS代码：

```js
// 方法1
for(let i = 0;i < tabList.length;i++){
    tabList[i].onclick = function(){
        changeTab(i); 
    }
}  

// 方法2
for(let i = 0;i < tabList.length;i++){
    ~function(i){
        tabList[i].onclick = function(){
            changeTab(i); 
        }
    }(i)
} 

// 方法3
for(let i = 0;i < tabList.length;i++){
    tabList[i].onclick = function(i){
        return function(){
            changeTab(i); 
        }
    }(i)
} 

// 方法4
/*用一个变量把当前的值存起来，当我点另外一个值的时候，记录最新一次
只需要记录上一次点击的是谁，当前点击把上一次选中的清空，再把当前点击的记录下来*/
```

### JS三座大山

- 栈堆内存及闭包
- 面向对象
- 异步编程

课后作业：

1. 回去后想出N多种实现选项卡的思路
2. 隔行变色实现间隔三行变色，并且基于js实现出鼠标滑过高亮显示，鼠标离开回归原有样式
3. 获取扩展，如何获取当前元素的所有样式（不管是写在哪里的？）style只能获取写在行内上的