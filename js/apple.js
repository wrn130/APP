/**
 * Created by Administrator on 2016/8/25.
 */
$(function () {
    var clientW=document.documentElement.clientWidth;
    window.onresize=function () {
        clientW=document.documentElement.clientWidth;
    }
    function Car() {
        $(".banner .box").animate({left:-clientW},1000,function () {
            // alert(1);
            $(".banner .box .screen:first-child").appendTo($(".banner .box"));
            $(".banner .box").css({left:0});
        });
    }
    setInterval(Car,5000)



    function sCar() {
        $(".bannerS .box").animate({left:-clientW},1000,function () {
            $(".bannerS .box a:first-child").appendTo($(".bannerS .box"));
            $(".bannerS .box").css({left:0});
        })

    }
    setInterval(sCar,5000);
    
    
    var flag=true;
    var that;
    var num=0;
        $(".footerS .right").click(function () {
                var index=$(".footerS .right").index(this);
                if(index==that||num==0){
                    num++;
                    if(flag){
                        that=$(".footerS .right").index(this);
                        $(".footerS .right").eq(that).css({transition:"rotate 2s ease",transform:"rotate(45deg)"})
                        $(".footerS .floor .none").eq(that).css({display:"block"})
                        flag=false;
                    }else if(!flag){
                        $(".footerS .right").eq(that).css({transition:"rotate 2s ease",transform:"rotate(360deg)"})
                        $(".footerS .floor .none").eq(that).css({display:"none"})
                        flag=true;
                    }
                }else{
                    that=$(".footerS .right").index(this);
                    $(".footerS .right").eq(that).css({transition:"rotate 2s ease",transform:"rotate(45deg)"})
                    $(".footerS .floor .none").eq(that).css({display:"block"})
                    flag=false;
                }


        })





})