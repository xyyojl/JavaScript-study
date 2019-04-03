/* 
    【思路】
        1.给所有的li绑定点击事件，当点击任何一个li的时候，都做第二部操作
        2.可以先让所有的li&&div的class都为空（xxx.className=''）再让当前点击
        的这个li和对应的div有active这个样式类即可
*/
// 想要操作谁，先获取谁

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



// => 实现不了效果的代码
/* for(var i = 0;i < tabList.length;i++){
    // tabList[i] <=> 每一轮循环当前要操作的那个li对象
    tabList[i].onclick = function(){
        // =>事件绑定：给当前元素的某一个事件绑定一个方法，绑定的时候方法没有执行
        // 属于创建一个方法，当在页面中手动触发点击事件的时候绑定的方法才会执行
        console.log(i);
        debugger
        changeTab(i)
        // 需要把当前点击的这个li的索引传递进来
    }
} */

// 绑定的时候就是创建的函数的时候
/* i = 0 第一次循环
tabList[0].onclick = function(){
    'changeTab(i);'
} 
i++
i = 1 第二次循环
tabList[1].onclick = function(){
    'changeTab(i);'
} 
i++
i = 2 第三次循环
tabList[2].onclick = function(){
    'changeTab(i);'
} 
i++;
i=3
循环结束 i = 3
*/








/* i = 0 tabList[0].onclick = function...
i = 1 tabList[1].onclick = function...
i = 2 tabList[2].onclick = function... */




/* for (let i = 0; i < tabList.length; i++) {
    
    tabList[i].onclick = function(){
        for (let index = 0; index < tabList.length; index++) {
            console.log(index);
            tabList[index].className = '';
            divList[index].className = ''
        }
        tabList[i].className += 'active'
        divList[i].className += 'active'
    }
    
} */





