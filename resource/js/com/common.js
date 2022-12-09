
/*========================================================
header
========================================================*/
$(function(){
	let gnbEl = $('#header .gnb > li');
	
	gnbEl.on('mouseover', function () {
		$(this).find('.deps').stop().slideDown(300);
	}).on('mouseleave', function () {
		$(this).find('.deps').stop().slideUp(300);
	});


	
});




/*========================================================
content 
========================================================*/
//**btn

$(function(){
	//버튼 클릭시 에니메이션 후 해당 페이지 이동 
	$('.btn_ani').on('click',function(){
		const BtnAniUrl = $(this).attr('href');
		console.log(BtnAniUrl);
		$(this).addClass('ani_on'); //animation css style 
		setTimeout(function() {
			location.href = BtnAniUrl;
			//$('#container *').removeClass('ani_on active');//이전페이지 리셋
		},800);
		return false;
	});

});

// btn slide m2BtnSlideCk()
function m2BtnSlideCk(){
	m2BtnSlide = setInterval(function() {
		const btnSlideLt = $('.btn_slide li').length;
		//console.log(btnSlideLt);
	   $('.btn_slide li').each(function(index,el){
		  if($(this).hasClass('active')){
			let btnSlideCk = index + 1;
			if($('.btn_slide li').eq(btnSlideLt - 1).hasClass('active')){
				//last btn
				$(this).removeClass('active');
				$('.btn_slide li').eq(0).addClass('active');

			}else{
				$(this).removeClass('active');
				$('.btn_slide li').eq(index + 1).addClass('active');

				//console.log(index);
			}
			return false;
		  }
	   });
	}, 6500);

	$('.btn_slide li a').click(function(){
		$('.btn_slide li').removeClass('active');
		let btnSlideCk = $(this).parent().index();
		$('.btn_slide li').eq(btnSlideCk).addClass('active');
		console.log(btnSlideCk);
	
	});
}



