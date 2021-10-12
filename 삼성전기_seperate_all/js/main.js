/* main.js */
$(document).ready(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    // 주메뉴
    // $(".gnb>ul>li>a").bind("mouseover focus",function(){
    $(document).on("mouseover focus",".gnb>ul>li>a",function(){

        $(".gnb>ul>li").removeClass("on");
        $(this).parent().addClass("on");

        var ht = $(this).next().height();//하위ul 높이
        // console.log(ht);
        
        $(".header_wrap").stop().animate({"height":70 + ht},500,"linear");//header_wrap내려오기

    });

    //
    $(document).on("mouseleave blur","nav.gnb",function(){
        $(".header_wrap").stop().animate({"height":"70px"},300,"linear");
        $(".gnb>ul>li").removeClass("on");
    });

    // 검색박스
    // $("div.btn_srch").click(function(){
    $(document).on("click","div.btn_srch",function(){
        // $("div.srch_wrap").addClass("on");
        // $(this).addClass("on");
        // $("div.srch_wrap").addClass("on");
        $("div.srch_wrap").css("display","block");
    });
    $(document).on("click",".btn_srch_close",function(){
        $("div.srch_wrap").css("display","none");
    });

    // 오토배너
    var $bnnNum = 0;
    var $lastNum = $(".slide_wrap>li").size()-1;
    // console.log($lastNum);

    // next 버튼
    //
    $(document).on("click",".btn_next",function(e){
        e.preventDefault();
        $bnnNum++;
        if($bnnNum>$lastNum) $bnnNum=0;

        $("li.slide").removeClass("active");
        $("li.slide").eq($bnnNum).addClass("active");

        $("div.slide_roll > ul > li").removeClass("on");
        $("div.slide_roll > ul > li").eq($bnnNum).addClass("on");
    });

    // prev 버튼
    // $(".btn_prev").click(function(e){
    $(document).on("click",".btn_prev",function(e){
        e.preventDefault();
        $bnnNum--;
        if($bnnNum<0) $bnnNum=$lastNum;

        $("li.slide").removeClass("active");
        $("li.slide").eq($bnnNum).addClass("active");

        $("div.slide_roll > ul > li").removeClass("on");
        $("div.slide_roll > ul > li").eq($bnnNum).addClass("on");
    });

    function autoBanner(){
        //next버튼 눌렀을때와 같은 코드
        $bnnNum++;
        if($bnnNum>$lastNum) $bnnNum=0;

        $("li.slide").removeClass("active");
        $("li.slide").eq($bnnNum).addClass("active");

        $("div.slide_roll > ul > li").removeClass("on");
        $("div.slide_roll > ul > li").eq($bnnNum).addClass("on");
    }

    var $autoBnn = setInterval(autoBanner,5000);// 5초마다 autoBanner함수 실행

    // 정지 재생 버튼 클릭
    var flag = true;
    $(document).on("click","a.btn_play",function(e){
        e.preventDefault();
        if(flag){// 오토배너 정지
            clearInterval($autoBnn);
            $(this).addClass("on");
            flag = false;
        }else{// 오토배너 재생
            $autoBnn = setInterval(autoBanner,5000);
            $(this).removeClass("on");
            flag = true;
        }
    });

    // 롤링버튼
    $(document).on("click",".slide_roll li a",function(e){
        e.preventDefault();
        var $rollNum = $(this).parent().index();

        $("li.slide").removeClass("active");
        $("li.slide").eq($rollNum).addClass("active");

        $("div.slide_roll > ul > li").removeClass("on");
        $("div.slide_roll > ul > li").eq($rollNum).addClass("on");
    });

    //퀵메뉴
    $(document).on("click","btn_top",function(){
        $("html,body").stop().animate({"scrollTop":0},1400,"swing");
    });
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 0 && scroll < 70){
            $(".btn_top").fadeOut();
        }else if(scroll >= 70){
            $(".btn_top").fadeIn();
        }
    });
});