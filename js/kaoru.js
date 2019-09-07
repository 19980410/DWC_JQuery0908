$(function(){
	$('.content').hide();
	$(".content-title").click(function(){
		$(this).next().slideToggle();
	});
});
//SNSをクリックしたらだす
$(document).on('click', ".fadebox", function(){
 $("#one:hidden").show(500, function(){
    $(document).on('click', '.fadebox', function(){
      $("#two:hidden").show(1000, function(){
        $(document).on("click", '.fadebox', function(){
          $('#three:hidden').show(2000);
        })
      });
    });
  });
 });

$(document).on('click', '#three', function(){
  $("#three").fadeToggle(500, function(){
    $(document).on('click', '#two', function(){
      $("#two").fadeToggle(500, function(){
        $(document).on('click', '#one', function(){
          $('#one').fadeToggle(500);
        });
      });
    });
  });
});

//１番上まで遷移
$(function() {
  $('#back a').on('click',function(){
    $('body, html').animate({
      scrollTop:25
    }, 800);
      return false;
  });
});

$(function(){
//ボタンを押すと文字が出てくる
	$(".open").click(function(){
		$('.open').css('display','none');
//2000ミリ秒後に次のfuntionが発火
		$(".leftside1").slideToggle(2000, function(){
				$("#rikuinu").slideToggle(2000, function(){
//2000ミリ秒後に次のfuntionが発火
//文字を１０文字入力すると赤くなる
				  $("textarea").keyup(function(){
				    const counter = $(this).val().length;
				    $("#countUp").text(counter + "文字");
				    if(counter == 0){
				      $("#countUp").text("0");
				    }
				    if(counter >= 10){
//１０文字以上の時に次の文章が表示
				      $("#countUp").css("color","red");
				      $(".leftside").slideToggle(2000,function(){
//aタグをクリックするとページの印刷フォームが出てくる
				      	  $('a.print').click(function(){
						  window.print();
						  return false;
						});
				      });
				    } else {
//１０文字以下にすると、String３が消える
				      $("#countUp").css("color","#666");
				      $(".leftside").css("display","none");
				    }
				  });
				});
			});
	});
});

// $(document).on("keydown",function(e){
// 	// if(e.keyCode == 77 or 85)
// //	if(e.keyCode == 77 || e.keyCode == 85 || e.keyCode == 83 || e.keyCode == 75 || e.keyCode == 79 )
// 		alert("あたる！")
// });

//要素を取得したり書き換えたりできる
console.log($('a[href*="google"]').attr("href"))
$(".youtube").click(function(){
//要素を書き換え
	$('a[href*="google"]').attr('href',"https://www.youtube.com/?app=desktop")
})


//曜日の取得、テキストで出力
  weekArray = [ "月", "火", "水", "木", "金", "土", "日" ]

  $(".get").click(function() {
    $(this).text(weekArray[new Date().getDay()] + "曜日")
    $(this).css("font-size", "80px")
    $(".greeting").fadeToggle(0, function(){
    	$(this).text("という風にJQueryでは明日の曜日も出せちゃいます")

    });
  });

  $('.jquery_title').click(function(){
  	$(".jquery_title").css("display","none")
   	$(".jquery_title1").css("display","none")
  	$('.greeting').slideToggle(2000);
  	$('.get').slideToggle(3000);
});

$(function(){
setInterval(function(){
var now = new Date();
var y = now.getFullYear();
var m = now.getMonth() + 1;
var d = now.getDate();
var w = now.getDay();
var h = now.getHours();
var mi = now.getMinutes();
var s = now.getSeconds();
$('.jquery_title1').text(y + '年' + m + '月' + d + '日' + h + '時' + mi + '分' + s + '秒' );
}, 1000);
});

//フォームに入力された値を取得する、クリックが外れると取得も可能
$(function(){
	$('input').focus(
		function(){
		console.log("touch focus");
		}
	);
	$('input').blur(
		function(){
		console.log("delete focus")
		}
	);
	$('input').change(
		//thisはイベント発生元の要素を示す
		function(){
			console.log($(this).val());
		}
	);
});
//^--------------------------kaito
//画像４をはねさせる

    $(document).on("mouseover", ".image4", function(){
      $(".image4").css("float","center");
      $(".image4").animate({width:"300px",height:"20px"},500);
    });

    $(document).on("mouseout", ".image4", function(){
      $(".image4").animate({width:"300px",height:"250px"},500);
    });
//要修正
    $(document).on("click", ".image5", function() {
      $(".image5").css({backgroundImage:"none"});
      $("#icon").addClass('fa fontawesome-icon fa-leaf circle-no');
      $("#icon").css({position:"absolute",top:1920,left:900});
      $("#icon").delay(100).animate({left:"700px",top:"1950px"},500);
      $("#icon").delay(200).animate({left:"900px",top:"1980px"},500);
      $("#icon").delay(250).animate({left:"700px",top:"2010px"},500);
      $("#icon").delay(100).animate({left:"900px",top:"2040px"},500);
      $("#icon").delay(200).animate({left:"700px",top:"2070px"},500);
      $("#icon").delay(200).animate({left:"1000px",top:"1070px"},500);
    });

//地球儀が動く。位置を修正中
    $(document).on("click", ".fa-globe", function() {
      $('.fa-globe').after("<span>---</span>");
      $('span').css({fontSize:"100px",position:"absolute",top:2500,left:800});
      $('span').animate({top:"2500px",left:"850px"},200);
      $('span').animate({zIndex:1},{
        duration:1000,
        step:function(now){
          $(this).css({transform:'rotate(' + (now * 80) + 'deg)'});
        }
      })
      $('span').delay(10).animate({zIndex:1},{
        duration:1000,
        step:function(now){
          $(this).css({transform:'rotate(' + (now * 25) + 'deg)'});
        }
      })
      $(".fa-globe").css({position:"absolute",top:2560,left:810,color:"red"});
      $(".fa-globe").delay(1250).animate({top:"2700px",left:"500px"},200);
      $(".fa-globe").delay(10).animate({top:"2400px",left:"500px"},200);
      $(".fa-globe").delay(10).animate({top:"2820px",left:"792px"},200);
      $(".fa-globe").delay(10).animate({top:"2320px",left:"1140px"},200);
      $(".fa-carrot").delay(2200).queue(function(){
        $(this).css({display:"none"});
      })
      $(".fa-globe").delay(200).animate({fontSize:"150px",top:"2270px",left:"1100px"},100);
      $(".fa-globe").delay(100).animate({fontSize:"50px",top:"2320px",left:"1145px"},100);
      $(".fa-globe").delay(200).animate({fontSize:"150px",top:"2270px",left:"1100px"},100);
      $(".fa-globe").delay(100).animate({fontSize:"50px",top:"2320px",left:"1145px"},100);
      $(".fa-globe").delay(200).animate({fontSize:"150px",top:"2270px",left:"1100px"},100);
    })

    let count = 0;
    let timer;
    const ua = navigator.userAgent.toLowerCase();
    const isSP = /iphone|ipod|ipad|android/.test(ua);
    const b = document.getElementById('button');
    const r = document.getElementById('r');
    const eventStart = isSP ? 'touchstart' : 'mousedown';
    const eventEnd   = isSP ? 'touchend' : 'mouseup';
    const eventLeave = isSP ? 'touchmove' : 'mouseleave';

    b.addEventListener(eventStart, e => {
      e.preventDefault();
      b.classList.add('active');
      timer = setInterval(() => {
        count++;
        r.textContent = (count / 100) + '秒';
      }, 10);
    })

    b.addEventListener(eventEnd, e => {
      e.preventDefault();
      if (count) {
        b.classList.remove('active');
        clearInterval(timer);
        $(".fa-football-ball").css({position:"absolute",top:2050,left:0});
        $("#bou-1").css({position:"absolute",top:1660,left:1010,color:"red",display:"block"});
        $("#bou-2").css({position:"absolute",top:1560,left:910,color:"red",display:"block"});

        $('.fa-football-ball').animate({zIndex:1},{
          duration:200,
          step:function(now){
            $(this).css({transform:'rotate(' + count * now / 5 + 'deg)'});
            $(this).delay(100).animate({left:200 + count * 10,top:1300 + count * 5},500);
          }
        })
        r.textContent = (count / 100) + '秒長押しされました';
        //count = 0;
      }
    });

    b.addEventListener(eventLeave, e => {
      e.preventDefault();
      let el;
      el = isSP ? document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY) : b;
      if (!isSP || el !== b) {
        b.classList.remove('active');
        clearInterval(timer);
        r.textContent = '処理を中断';
        count = 0;
      }
    });

    const input = document.querySelector('#form__name');
    const submit = document.querySelector('#form__submit');
    input.addEventListener('keyup',function(){
      if (input.value.length >= 2){
        submit.disabled = false;
      }else{
        submit.disabled = true;
      };
    });
    console.log(input);


