### 布尔类型

> 只有两个值：true/false

如何把其它数据类型转换为布尔类型？

- Boolean
- !「取反」
- !!「两次取反，项目当中常用这个」

```javascript
Boolean(1) // => true
Boolean(0) // => false
Boolean(-1) // => true
Boolean(NaN) // => false

!'珠峰培训' // => 先把其它数据类型转换为**布尔类型**，然后**取反**
!0 // => true
!'' // => true

!!null // => 取两次反，等价于没取反，也就剩下转换为布尔类型了
```

规律「5个falsy」：

> 在JS当中只有"0/NaN/空字符串/null/undefined"这个5个值转换为布尔类型的false，其余都转换为true

### null && undefined

> 都代表空或者没有
>
> - null：空对象指针
> - undefined：未定义

null：一般都是**意料之中**的没有（通俗理解：一般都是人为**手动**的**先赋值**为null，后面的程序中我们会**再次**给它赋值）

```javascript
var num = null; // => null是手动赋值，预示着后面我会把num变量的值进行修改

...
num = 13;
```

undefined代表的没有一般**都不是人为手动控制**的，大部分都是浏览器自主为空。（后面可以赋值也可以不赋值）

```javascript
var num; //=>此时变量的值浏览器给分配的就是undefined

...
// 后面可以赋值也可以不赋值
```

---

### object对象数据类型

> 普通对象
>
> - 有大括号包裹起来的
> - 有零到多组属性名和属性值（键值对）组成

何为属性？是用来干哈的？

> 属性就是用来描述**当前对象特征**的，属性名是当前具备这个特征，属性值是对这个特征的描述（专业语法：属性名称为键【key】，属性值称为值【value】，一组属性名和属性值称为一组键值对）

```javascript
var obj = {
    name:'珠峰培训',
    age:9    
};

// => 对象的操作：对键值对的增删改查

```

对象的操作：
【获取】

语法：对象.属性名  / 对象[属性]

```javascript
obj.name // => 点操作符
obj['name'] // **一般来说**，对象的属性名都是字符串格式的（属性值不固定，任何格式都可以）
```

【增/改】

JS对象中，属性名是**不允许重复**的，是唯一的。如果重复的话，有可能会报错的，有可能不报错！！！

```javascript
var obj1 = {name:'xxx'}
var obj2 = {name:'qqq'}

obj.name = '周啸天'; // => 原有对象中**存在**name属性，此处属于**修改**属性值
obj.sex = '男'; // => 原有对象中**不存在**sex属性，此处相当于给当前对象**新增加**一个属性sex

obj['age'] = 28;
```

【删】

彻底删除：对象中不存在这个属性了

```javascript
delete obj['age'];
```

不彻底（假）删除：并没有移除这个属性，只是让当前属性的值为空

```javascript
obj['sex'] = null;
```

注：在获取属性值的时候，如果当前对象有这个属性名，则可以正常获取到值（哪怕是null），但是如果没有这个属性，则获取的结果是undefined

【查】

思考题「考察'name'和name的区别、object对象」：

```javascript
var obj = {
	name:'珠峰培训',
    age: 9
}
var name = 'zhufeng';

obj.name // => '珠峰培训' 获取的是name属性的值
obj['name'] // => '珠峰培训' 获取的是name属性的值
obj[name] // => 此处的name是一个变量，我们要获取的属性名不叫name，是name存储的值'zhufeng' => obj['zhufeng'] => 没有这个属性，属性值是undefined 


/*
obj['key']	获取属性名为key的属性值
obj.key 	获取属性名为key的属性值
obj[key]	获取key这个变量存储的那个值，作为属性名对应的属性值
*/


// 'name'和name的区别
// => 'name'是一个字符串值，它代表的是本身
// => name（代名词）是一个变量，它代表的是本身存储的这个值
```

一个对象中的属性名不仅仅是**字符串格式**的，还有可能是**数字格式**的

```javascript
var obj = {
    name: '珠峰培训',
    0:12
}
obj[0] // => 12
obj['0'] // => 12
// 错误写法：obj.0 => Uncaught SyntaxError: Unexpected number
// SyntaxError 语法错误

// 当我们存储的属性名不是字符串也不是数字的时候，浏览器会把这个值转换为字符串（toString），然后再进行存储

obj[{}] = 300; // 先把({}).toString()后的结果作为对象的属性名存储进来 obj['[object Object]'] = 300

obj[{}] // => 获取的时候也是先把对象转换为字符串'[object Object]'，然后获取之前存储的300
obj[{xxx:'xxx'}] // => 获取的时候也是先把对象转换为字符串'[object Object]'，然后获取之前存储的300，所以存储对象没有用
```

数组也是对象（对象由键值对组成的）

```javascript
var obj = {
    a : 12
}
var ary = [12,23]; // => 12和23都是属性值，属性名呢？

// 通过观察结果，我们发现数组对象的属性名是数字（我们把数字属性名称为当前对象的索引）
ary[0]
ary['0']
ary.0 // => 报错
```

数组和对象的关系是什么的？

数组是对象的一种细分，数组是一种特殊的对象，对象有的，它也有，对象没有的，它也有。

### 浅聊JS的运行机制

（栈堆内存和不同数据类型操作）

1、当浏览器（它的内核/引擎）渲染和解析JS的时候，会提供一个供JS代码运行的环境，我们把这个环境称为”全局作用域（global「服务端」/window「客户端」 scope）“。「好比如地球与人的关系，地球提供了人类生存的环境，人才能生存和活动」

2、代码**自上而下**执行（之前还有一个变量提升阶段）

​	=> 基本数据类型的值会存储在当前作用域下

```javascript
var a = 12; 
//	如何描述这个代码如何执行？
```

​	1）首先开辟一个空间存储12

​	2）在当前作用域中**声明**一个变量a（var a）

​	3）让声明的变量和存储的12进行关联（把存储的12赋值给a => 赋值操作叫做**定义**）

​	基本数据类型值（也叫作**值类型**），是**按照值**来操作的：把原有的值复制一份，放到新的空间或者位置上，和原来的值没有关系「按值的目的：使两个位置之间没有关系」。

​	=> 引用数据类型的值不能直接存储在当前的作用域下（因为可能存储的内容过于复杂），我们需要先开辟一个新的空间（理解为**仓库**），把内容存储到这个空间当中

```javascript
var obj1 = {n:100};
```

​	1）首先开辟一个新的内存空间，把对象中的键值对依次存储起来（为了保证后面可以找到这个空间，此空间有一个**16进制的地址**）

​	2）声明一个变量

​	3）让变量和**空间地址**关联在一起（把空间地址赋值给变量）

​	引用类型不是按照值来操作，它操作的是空间的引用地址：把原来空间的地址赋值给新的变量，但是原来的空间没有被克隆，还是一个空间，这样就会出现多个变量关联的是相同的空间，相互之间就会存在影响了！！！



注：在JS当中的所有赋值操作，都是先有值然后再关联，只不过是根据你的值，数据类型不一样，放到不同的位置当中去。基本类型的值太简单啦，就直接存储在当前作用域下，引用类型可能很复杂，所以就单独开辟空间来存储。

基本类型的值会存储在当前作用域当中

题1：

```javascript
var a = 12;
var b = a;
b = 13;
console.log(a);  // => 12  

var obj1 = {n:100};
var obj2 = obj1;
obj2['n'] = 200;
console.log(obj1.n);
```

JS运行机制图

![](https://upload-images.jianshu.io/upload_images/8492420-90ddb55bf3aff659.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/619/format/webp)

面试题：

JS当中的值类型和引用类型有什么区别？

[「每日一题」JS里基本类型（值）和复杂类型（引用）有什么区别？](https://zhuanlan.zhihu.com/p/22400319)

值类型不会让两个变量产生关联

引用类型可能会让两个变量之间产生关联

值类型的结构比较简单，可以直接在当前的作用域开辟一个位置，值类型的操作都是把原有的值复制一份，放到新的空间或者位置上，和原来的值没有关系

引用类型

### 专业概念

栈内存（作用域）：本身就是一个供JS代码执行的环境，所有的基本类型值都会直接会在栈内存中开辟一个位置进行存储

堆内存：用来存储引用类型中的信息值的，对象存储的是**键值对**，函数存储的是**代码字符串**

题2：

```javascript
var obj = {
    n : 10,
    m : obj.n * 10
};
console.log(obj.m);
// => Uncaught TypeError: Cannot read property 'n' of undefined
// TypeError => 类型错误
```

1、形成一个全局作用域（栈内存）

2、代码自上而下执行

​	1)首先开辟一个新的堆内存（AAAFFF111），把**键值对**存储到堆内存中

​		n:10

​		m:obj.n*10 => obj.n    此时**堆内存信息还没有存储完成**，空间的地址还没有给obj，此时的**obj是undefined**，obj.n <=> undefined.n

题3：

```javascript
var obj = {n:10}
obj.m = obj.n * 10;
console.log(obj.m); // => 100
```

题4：

```javascript
var ary1 = [3,4];
var ary2 = ary1;
ary2[0] = 1;
ary2 = [4,5];
ary2[1] = 2;
ary1[1] = 0;
console.log(ary1,ary2); // ary1 => [1,0] ary2 => [4,2]
```

![JS的运行机制](https://upload-images.jianshu.io/upload_images/8492420-3dd7245639150e54.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/697/format/webp)

注：10秒出答案，说明已经掌握了那个知识！！！

墙裂推荐观看：

[JS中的 变量提升、作用域、闭包 核心原理解读](http://www.zhufengpeixun.com/qianduanjishuziliao/javaScriptzhuanti/2018-03-25/1081.html) 

### JS中的判断操作语句

1、if/else if/else 编程来源于生活

```javascript
var num = 12;
if(num > 10){
    num++; // => num = num + 1 num += 1 在自身的基础上累加1
}else if(num > 0 && num <= 10){
    num--;
}else{
    num += 2;
}
console.log(num); // 13
```

只要有一个条件成立，后面不管是否还有成立的条件都不再判断执行了

```javascript
var num = 10;
if(num > 5){
    num += 2;
}else if(num > 8){
    num + =3;
}else{
    num + =4;
}
console.log(num); // => 12
```



关于条件可以怎么写？

```javascript
// >= / <= / == 常规比较
var num = 12;
if(0){
    // => 不管你在条件判断中写什么，最后总要把其计算出true或者false来判断条件是否成立（把其它类型的值转换为布尔类型，只有 0/NaN/''/null/undefined是false，其余都是true）
}

var n = 12;
if('3px'+3){
    // => 在JS中，+ - * 、 % 都是数学运算，除 + 以外，其余运算符在运算的时候，如果遇到了非数字类型，首先会转换为数字类型（number），然后再进行运算
    
    // => + 在JS中除了数字相加，还有字符串拼接的作用（如果运算中遇到了字符串，则为字符串拼接，而不是数字相加）
    
    // '3px'+3 => '3px3'
    // '3px'-3 => NaN
}
```

思考题：

```javascript
{}+'str' // => NaN ??? 数学相加
[] + 'str' // => 字符串相加
```

BAT面试题「检测数据类型/NaN」：

```javascript
var num = parseInt('width:35.5px');
if(num == 35.5){
    alert(0);
}else if(num == 35){
    alert(1);
}else if(num == NaN){
 	alert(2);   
}else if(typeof num == 'number'){
    // => 先算 typeof num
    // => 再做比较
 	alert(3);   // alert输出的都是字符串格式的'3'
}else{
    alert(4);
}
// 结果是字符串格式的'3'
```

### typeof 逻辑运算符 

> 在JS中用来**检测数据类型**的方式之一，除了它以外，还有
>
> - instanceof
> - constructor
> - Object.prototype.toString.call()

```javascript
// 语法：typeof [value] => 检测value的数据类型

// 返回值：使用typeof检测出来的结果是一个字符串，字符串中包含着对应的数据类型，例如： "number"/"string"/"boolean"/"undefined"/"object"/"function"/

typeof null //=> "object" 因为null代表空对象指针（没有指向任何的内存空间）
// typeof 检测数组/正则/对象，最后返回的是"object"。也就是基于这种方式无法细分对象
// typeof function 最后返回的是"function"
```

面试题：

```javascript
console.log(typeof []); // => "object"
console.log(typeof typeof []); // => typeof "object" => "string"
```

2、三元运算符

> 语法：条件?成立做的事情:不成立做的事情;  <=> 相当于简单的if/else判断

```javascript
var num = 12;
if(num > 10){
    num++；
}else{
    num--;
}
// => 改写成三元运算符
num > 10?num++:num--;
```

特殊情况：

```javascript
// => 三元运算符中的某一部分不需要做任何的处理，我们用 null/undefined/void 0... 占位即可
var num = 12;
num>10?num++:; // Uncaught SyntaxError: Unexpected token ;
num>10?num++:null; // undefined void 0

// 如果需要执行多项操作，我们把其用小括号包裹起来，每条操作语句用逗号分隔
var num = 10;
num>=10?num++;num*=10; // 错误写法：Uncaught SyntaxError: Unexpected token ;
num>=10?(num++,num*=100):null;
```

思考题：

```javascript
var num = 12;
if(num>0){
    if(num<10){
        num++
    }else{
        num--;
    }
}else{
    if(num==0){
        num++;
        num=num/10;
    }
}
// 将上面的代码改成三元运算符
// 错误写法：只写一个=，应该写两个==
num>0?(num<10?num++:num--):(num=0?(num++,num=num/10):null);         
// 正确写法
num>0?(num>10?num++:num--):(num==0?(num++,num=num/10):null);
```

3、switch case

> JS中的一种判断方式


```javascript
var num = '10';
if(num==10){
    num++;
}else if(num == 5){
    num--;
}else{
    num = 0;
}
console.log(num); // 11

// 改成 switch case
var num = '10';
switch(num){
    case 10:
        num++;
        break;
    case 5:
        num--;
        break;
    default:
        num=0;
}
console.log(num); //=> 0
// switch case 应用于变量（或者表达式等）在不同值情况下的不同操作，每一种case结束后都要加break（结束整个判断）
```

>
> switch case中每一种case情况的比较都是基于“===” 绝对相等来完成的

```javascript
'10' == 10 // => true 相等比较，如果等号左右两边的类型不一样，首先会转换为**一样的数据类型**，然后再进行比较
// => 下面的案例中，就是把字符串'10'转换为数字了，然后再比较的

'10' === 10 // =>绝对比较，如果两边的数据类型不一样，则直接不相等，它要求类型和值都完全一样才会相等（真实项目中为了保证代码的严谨性，我们应该更多使用绝对比较）
```
> 不加break，后面的条件不管是否成立，都会被执行；利用此机制，我们可以完成一些特殊的处理，例如：如果num等于10和等于5都要做同一件事情，那么我们写在一起，不用加break即可

```javascript
var num = 10;
switch(num){
        case: 10
        case: 5:
        	num--;
        	break;
    default:
        	num=0;
}
console.log(num); // => 9
```



小知识：n++和n=n+1 一样吗？

这个需要分情况讨论：

1. n是数字的话，两种运算的结果是一样的
2. n是字符串的话，这两种运算的结果是不一样的
3. 进行数学运算推荐：n++

```javascript
// 例子1
var n = 10;
n++;
console.log(n); // => 11

// 例子2
var n = 10;
n = n + 1;
console.log(n); // => 11

// 例子3
var n = '10';
//n = n+1; // => 属于字符串拼接，结果是'101'
n++; // => 此时这种写法才是数学运算，不是字符串拼接，结果是11
console.log(n);	// => 101
```

**作为优秀的**IT编程者，**勇于尝试**，思考，专研，尝试

晚上复习的时候，把案例多敲两遍，1.提高编码速度，2.养成代码感觉

肌肉记忆



拿代码看看就明白了

字符串拼接和数据类型检测



第一个理解的是

渲染和解析

浏览器运行JS，那浏览器是不是应该给JS提供一个运行环境





27:35



数组也拥有对象的

人就是对象，有很多

属性就是描述一个对象长什么样的。

字符串还有很多方法



