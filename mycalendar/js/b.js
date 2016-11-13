//点击‘选择日期’，开始打印日期
document.getElementsByTagName('button')[0].onclick = showcal;
//点击‘确定’打印所选择的日期
document.getElementsByTagName('button')[1].onclick = surecal;
//点击'《'显示上一个月
document.getElementById("lastmonth").onclick = calllast;
//点击’》‘显示下一个月
document.getElementById("nextmonth").onclick = callnext;
var datearr = document.getElementsByTagName('td');
var caltitle = document.getElementById('caltitle'); //日历标题显示年份和月份
var calendar = document.getElementById("calendar");
var clickdate; //用来记录被选择的日期，默认为今天
var mouse, mousedate = 0; //用来记录鼠标移动
// 
// 计算一个月天数的函数，输入值为一个date对象
function getDays(monthdate) {
	var dayyear = monthdate.getFullYear();
	var daymonth = monthdate.getMonth() + 1;
	var days;
	if (daymonth == 2) {
		days = dayyear % 4 == 0 ? 29 : 28;
	} else if (daymonth == 1 || daymonth == 3 || daymonth == 5 || daymonth == 7 || daymonth == 8 || daymonth == 10 || daymonth == 12) {
		days = 31;
	} else {
		days = 30;
	}
	return days;
}

var today = new Date(); //获取当天日期
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDay();
var firstdate = new Date(year, month); //该变量用来记录该月的第一天
var first_td, monthdays; //first_td为该月第一天在日历中应放置的位置，monthdays用来记录该月有多少天
var todaydate = today.getDate();
var selectdate = todaydate; //用来记录被选择的日期
//
//点击‘开始选择’，则显示日历，调用该函数时开始打印日期
function showcal() {
	calendar.style.display = 'table'; //显示日历表格
	//日历标题显示年份和月份
	caltitle.innerHTML = year + '年' + (month < 9 ? ('0' + (month + 1)) : (month + 1)) + '月';
	var firstday = firstdate.getDay();
	monthdays = getDays(firstdate) + 1;
	first_td = 7 + firstday;
	for (var j = 7; j < 49; j++) { //在填入相应日期前，先清空日历原来填的值
		datearr[j].innerHTML = ' ';
	}
	for (var i = 1; i < monthdays; i++) {
		datearr[first_td + i - 1].innerHTML = i;
		//标记选择的日历：首次显示日历默认的是标记当天，点击上或下个月默认标记的是之前选择的日期
		if (i == selectdate) {
			clickdate = datearr[first_td + i - 1];
			clickdate.style.color = 'white';
			clickdate.style.backgroundColor = 'red';
		}
	}
}
//
//点击上一个月
function calllast() {
	//去除之前鼠标移动的日期位置的标记
	if (mousedate != '0' && mousedate != ' ') {
		mouse.style.border = '1px solid #F3F2F2';
	}
	mouse = null;
	mousedate = 0;
	//去除上次点击的日期位置的标记
	if (selectdate != ' ') {
		clickdate.style.backgroundColor = '#F3F2F2';
		if (clickdate.className == 'weekend') {
			clickdate.style.color = 'grey';
		} else {
			clickdate.style.color = 'black';
		}
	}
	clickdate = null;
	if (month == 0) { //如果是1月，则上一个月是12月，同时相应年份减一
		month = 11;
		year = year - 1;
	} else {
		month = month - 1;
	}
	firstdate = new Date(year, month); //更改该月第一天这个日期对象
	showcal(); //日期更新后才开始打印日期

}
//
//点击下一个月
function callnext() {
	if (mousedate != '0' && mousedate != ' ') {
		mouse.style.border = '1px solid #F3F2F2';
	}
	mouse = null;
	mousedate = 0;
	if (selectdate != ' ') {
		clickdate.style.backgroundColor = '#F3F2F2';
		if (clickdate.className == 'weekend') {
			clickdate.style.color = 'grey';
		} else {
			clickdate.style.color = 'black';
		}
	}
	clickdate = null;
	if (month == 11) { //如果是12月，12月的下一个月是1月，同时相应年份加一
		month = 0;
		year = year + 1;
	} else {
		month = month + 1;
	}
	firstdate = new Date(year, month);
	showcal();
}
//点击’确定‘，打印日期，同时去除鼠标移动标记的日期
function surecal() {
	if (mousedate != '0' && mousedate != ' ') {
		mouse.style.border = '1px solid #F3F2F2';
	}
	alert('你选择的日期是' + caltitle.innerHTML + selectdate + '号');

}
//点击日期，则记录所选择的日期同时做标记
function clickme(d) {
	//去除上次所选择日期的标记
	if (selectdate != ' ') {
		clickdate.style.backgroundColor = '#F3F2F2';
		if (clickdate.className == 'weekend') {
			clickdate.style.color = 'grey';
		} else {
			clickdate.style.color = 'black';
		}
	}
	clickdate = null;
	clickdate = document.getElementById(d.id);
	selectdate = clickdate.innerHTML;
	if (selectdate != ' ') {
		clickdate.style.backgroundColor = 'red';
		clickdate.style.color = 'white';
	}
}
//鼠标移动事件：先去除上次鼠标移动被标记的日期，在标记此次事件的日期
function noclick(e) {
	if (mousedate != '0' && mousedate != ' ') {
		mouse.style.border = '1px solid #F3F2F2';
	}
	mouse = null;
	mousedate = 0;
	mouse = document.getElementById(e.id);
	mousedate = mouse.innerHTML;
	if (mousedate != '0' && mousedate != ' ') {
		mouse.style.border = '1px solid red';
	}

}