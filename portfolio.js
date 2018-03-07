var power = false;
var startPressed = false;
var mySplash;
var myTitle;
var myStart;
var linkA = '<a href="https://codepen.io/MayorJoe/full/LeXRpQ/" target="_blank"></a>'
$(document).ready(function(){
	$('#power-btn').click(function(){
		powerBtn(this);
		powerScreen();
		splash();
		mainMenu();
	});
	
});

function stopAll(){
	clearTimeout(mySplash);
	clearTimeout(myTitle);
	clearTimeout(myStart);
}

function mainMenu(){
	
	if(power){
		myTitle = setTimeout(
		function(){
			$("#screen").html('<h3 id="title" style="top: .8em;">'+'Portfolio: The Game'+'</h3>');
		}, 8000);
		
		myStart = setTimeout(
		function(){
			$("#screen").append('<p id=press-start>'+'Press Start'+'</p>');
			var skills = [["Wiki Search", "wiki", "https://codepen.io/MayorJoe/full/MrdgJY/"], ["Quote Machine", "quote", "https://codepen.io/MayorJoe/full/LeJWYg/"], ["Weather App", "weather", "https://codepen.io/MayorJoe/full/LeXRpQ/"]];
			
			$("#start").click(function(){
				$('#press-start').remove();
				for(var i = 0; i < skills.length; i++){
					if(i == 0){
						$("#screen").append('<a href='+skills[i][2]+' target="_blank"><p class="modes active"'+'id='+skills[i][1]+'>'+skills[i][0]+'<p></a>');
					} else {
						$("#screen").append('<a href='+skills[i][2]+' target="_blank"><p class="modes"'+'id='+skills[i][1]+'>'+skills[i][0]+'<p></a>');
					}
					
				}
				//$("#screen").css("background", "radial-gradient(circle, white, black);")
				$("#start").off("click");
				startPressed = true;
			});
			$("#up").click(function(){
				if($("#wiki").hasClass('active')){
					$("#wiki").removeClass('active');
					$("#weather").addClass('active');
				} else if($("#weather").hasClass('active')){
					$("#weather").removeClass('active');
					$("#quote").addClass('active');
				} else if($("#quote").hasClass('active')){
					$("#quote").removeClass('active');
					$("#wiki").addClass('active');
				}
			});
			$("#down").click(function(){
				if($("#wiki").hasClass('active')){
					$("#wiki").removeClass('active');
					$("#quote").addClass('active');
				} else if($("#quote").hasClass('active')){
					$("#quote").removeClass('active');
					$("#weather").addClass('active');
				} else if($("#weather").hasClass('active')){
					$("#weather").removeClass('active');
					$("#wiki").addClass('active');
				}
			});
			$("#btn-a").click(function(){
				if($("#wiki").hasClass('active')){
					$("#wiki").trigger('click');
				} else if($("#quote").hasClass('active')){
					$("#quote").trigger('click');
				} else if($("#weather").hasClass('active')){
					$("#weather").trigger('click');
				}
			});
			$("#btn-b").click(function(){
				if($("#wiki").hasClass('active')){
					linkA.find('a').trigger('click');
				} else if($("#quote").hasClass('active')){
					$("#quote").trigger('click');
				} else if($("#weather").hasClass('active')){
					$("#weather").trigger('click');
				}
			});
		}, 11000);
	} else {
		$("#screen h3").remove();
		$('#press-start').remove();
		$('#screen p').remove();
		$('#screen a').remove();
		$('#up').off('click');
		$('#down').off('click');
		$('#btn-a').off("click");
		$('#btn-b').off("click");
	}
}

function splash(){
	if(power){
		mySplash = setTimeout(
		function(){
			$("#screen").append('<h1 style="padding-top: 3em; color: #333;">'+"Portfolio Games Presents"+"</h1>");
		}, 2000);
	} else {
		$("#screen h1").remove();
	}
}

function powerScreen(){
	if(power){
		setTimeout(
		function(){
			$("#screen").css("backgroundColor", '#333');
		}, 1000);
	} else {
		$("#screen").css("backgroundColor", '#1D1D1D');
	}
}

function powerBtn(p){
	if(!power){
		$(p).css("color", '#FFF');
		power = true;
	} else {
		$(p).css("color", '#222');
		power = false;
		stopAll();
	}
}