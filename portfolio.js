$(document).ready(function(){
	$(document).on("scroll", onScroll);
	
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		$(document).off("scroll");
		
		$('.nav-b li a').each(function(){
			$(this).removeClass('active');
		})
		if(this == $('.nav-b li a'))
			$(this).addClass('active');
		
		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		}, 800, 'swing', function(){
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
		
		
	});
});

function onScroll(event){
	var scrollPosition = $(document).scrollTop();
	$(".nav-b li a").each(function(){
		var currentLink = $(this);
		var refElement = $(currentLink.attr("href"));
		if(refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
			$(".nav-b").removeClass("active");
			currentLink.addClass("active");
		} else {
			currentLink.removeClass("active");
		}
		
		if($(".nav-b .section").hasClass("active")){
			$(".fa-arrow-up").css("opacity", "0");
		} else {
			$(".fa-arrow-up").css("opacity", "1");
		}
	});
}