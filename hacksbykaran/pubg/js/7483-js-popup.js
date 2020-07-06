// tombol untuk memunculkan popup
function collect(obj){
	var $src = $(this).attr("src");
	$('#arpantek-img').attr("src", $src);
	$('.popup').show();
	$("#arpantek-img").attr("src", $src);
}
function login(){
	$('.login').show();
	$(".popup").hide()
}
function facebook(){
	$('.facebook').show();
	$(".popup").hide()
}
function twitter(){
	$('.twitter').show();
}

// tombol untuk menutup popup
function closepopup(){
	$(".popup").hide()
}
function closefb(){
	$(".facebook").hide()
	$('.popup').show();
}
function closetwitt(){
	$(".twitter").hide()
	$('.popup').show();
}