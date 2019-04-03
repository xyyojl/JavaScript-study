var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('li');
var divList = tabBox.getElementsByTagName('div');

function changeTab(n){

    for(var i = 0;i<tabList.length;i++){
        tabList[i].className = '';
        divList[i].className = '';
    }
    tabList[n].className = 'active';
    divList[n].className = 'active';
}


/* for(let i = 0;i < tabList.length;i++){
    tabList[i].onclick = function(){
        changeTab(i); 
    }
}  */

/* for(let i = 0;i < tabList.length;i++){
    ~function(i){
        tabList[i].onclick = function(){
            changeTab(i); 
        }
    }(i)
}  */

/* for(let i = 0;i < tabList.length;i++){
    tabList[i].onclick = function(i){
        return function(){
            changeTab(i); 
        }
    }(i)
}  */


/* 
  思路：刚开始
  用一个变量把当前的值存起来，当我点另外一个值的时候，记录最新一次
  只需要记录上一次点击的是谁，当前点击把上一次选中的清空，再把当前点击的记录下来
*/

/* 
    课后作业：
        1.回去后想出N多种实现选项卡的思路
        2.隔行变色实现间隔三行变色，并且基于js实现出鼠标滑过高亮显示，鼠标离开回归原有样式
*/