/**
 * Created by Administrator on 2016/8/12.
 */
var clockHand=document.getElementsByClassName("clock_hands");
var minuteHand=document.getElementsByClassName("minute_hands");
var secondHand=document.getElementsByClassName("second_hands");





function showTime(){
    var nowTime=new Date();//获取当前的系统时间
    var nowSecond=nowTime.getSeconds();//获取当前的秒
    var nowMinute=nowTime.getMinutes();//获取当前的分
    var nowHour=nowTime.getHours();//获取当前的小时
    if(nowHour>12){//将24小时计时法转换成12小时计时法
        nowHour-=12;
    }
    var SecondAngle=nowSecond/60*360;//获得当前秒的角度
    var MinuteAngle=nowMinute/60*360+nowSecond/60*6;//获得当前分的角度+秒的角度，实现过渡效果
    var HourAngle=nowHour/12*360+nowMinute/60*30;//获得当前小时的角度+分的角度，实现过渡的效果
    $(secondHand).css({                 //修改秒针的css属性
        "-webkit-transform":"rotate("+SecondAngle+"deg)",
        "transform":"rotate("+SecondAngle+"deg)",
        "-moz-transform":"rotate("+SecondAngle+"deg)",
        "-ms-transform":"rotate("+SecondAngle+"deg)",
        "-o-transform":"rotate("+SecondAngle+"deg)"
    });
    $(minuteHand).css({                  //修改分针的css属性
        "-webkit-transform":"rotate("+MinuteAngle+"deg)",
        "transform":"rotate("+MinuteAngle+"deg)",
        "-moz-transform":"rotate("+MinuteAngle+"deg)",
        "-ms-transform":"rotate("+MinuteAngle+"deg)",
        "-o-transform":"rotate("+MinuteAngle+"deg)"
    });
    $(clockHand).css({                 //修改时针的css属性
        "-webkit-transform":"rotate("+HourAngle+"deg)",
        "transform":"rotate("+HourAngle+"deg)",
        "-moz-transform":"rotate("+HourAngle+"deg)",
        "-ms-transform":"rotate("+HourAngle+"deg)",
        "-o-transform":"rotate("+HourAngle+"deg)"
    })
}
showTime();
setInterval(showTime,1000);