//Q1 こんにちは！というアラートを出力してください
alert('こんにちは');

//Q2 JQuery勉強会という文字を赤くしましょう
$(function(){
	$(".Q2").css("color","red");
});

//Q3 JQuery勉強会という文字をクリックしたら文字が緑色になるようにしましょう
$(document).on('click',".Q3", function(){
	$(".Q3").css("color", "green");
});

//Q4 pタグ-Q4クラスに「DMM.com」というテキストを挿入しましょう
$(function(){
	$(".Q4").text("DMM.com");
});

//Q5 pタグ-Q5クラスのpタグをaタグに変更させましょう
//（どこかのページン遷移できればハナマル)
$(function(){
	$('.Q5').html('<a href="https://google.com">google</a>');
});

//Q6 Q6pタグのテキストの先頭に「犬も歩けば棒に」を追加しましょう
$(function(){
	$(".Q6").prepend("犬も歩けば棒に");
});
//Q7 ボタンをクリックした時に警告文を出しましょう
$(document).on("click", ".Q7", function(){
	alert("ボタンをクリックしました！");
});

// JqQuery勉強会という文字をクリックしたら文字が青色になるようにしましょう
// 		→緑色の「あかいろ」という文字を「青色」に変換してみましょう
//            →ヒント：Q5に使用したメソッドを使うと簡単です
$(document).on('click',".Q8", function(){
	$(".Q8").html("<p>青色</p>");
	$(".Q8").css("color", "blue");
});
