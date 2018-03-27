<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Emblema+One|Modak|Keania+One|Fredoka+One|Aldrich|Didact+Gothic" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="portfolio.css">
	<script type="text/javascript" src="portfolio.js"></script>
	<title>Clint Jones | Portfolio</title>
  </head>
  <body>
    <ul class="nav-b fixed-top">
	  <li class="home "><a class="section active" href="#home">Home</a></li>
	  <li class="section"><a href="#contact">Contact</a></li>
	  <li class="section"><a href="#about">About</a></li>
	  <li class="section"><a href="#work">Work</a></li>
	</ul>
	<div class="return text-center"><a href="#home"><i class="fa fa-arrow-up"></i></a></div>
	<div class="container-fluid">
	  <div class="row">
	    <div class="col-12 text-center" id="home">
		  <h1>
		    Front End Developer - UX/UI Designer
		  </h1>
		  <h3>
		    Designing Responsive User Interface, for a great User Experience.
		  </h3>
		  <a href="#work"><button class="btn">My Work</button></a>
		  <a href="#contact"><button class="btn">Contact Me</button></a>
		</div>
		<div class="col-12" style="background-color: #393B45; color: #FFF;"></div>
		<div class="col-12 text-center" id="work">
		  <h1>Projects</h1><hr>
		  <div class="row justify-content-center" id="sites">
		    <div class="col-xs-1 col-sm-12 col-md-4 col-lg-4 col-xl-3 text-center sites wiki-site">
			  <h2 id="w-overlay">W</h2>
			  <div class="overlay" id="wiki-overlay"></div>
			  <a href="https://codepen.io/MayorJoe/full/MrdgJY/" target="_blank"><button class="btn" style="color: #FFF; background-color: #0FBBDD; border: 2px solid #FFF;">View More</button></a>
			</div>
			<div class="col-xs-1 col-sm-12 col-md-4 col-lg-4 col-xl-3 text-center sites rqm-site">
			  <h2 id="r-overlay">R</h2>
			  <div class="overlay" id="rqm-overlay"></div>
			  <a href="https://codepen.io/MayorJoe/full/LeJWYg/" target="_blank"><button class="btn" style="color: #39F; background-color: #FFF; border: 2px solid #39F;">View More</button></a>
			</div>
			<div class="col-xs-1 col-sm-12 col-md-4 col-lg-4 col-xl-3 text-center sites weather-site">
			  <h2 id="wa-overlay">W</h2>
			  <div class="overlay" id="weather-overlay"></div>
			  <a href="https://codepen.io/MayorJoe/full/LeXRpQ/" target="_blank"><button class="btn" style="color: #FFF; background-color: #000; border: 2px solid #FFF;">View More</button></a>
			</div>
			
		  </div>
		  <div class="row justify-content-center">
		    <div class="col-xs-1 col-sm-12 col-md-4 col-lg-4 col-xl-3 text-center sites weather-site">
			  <h2 id="g-overlay">G</h2>
			  <div class="overlay" id="game-overlay"></div>
			  <button class="btn" style="color: #FFF; background-color: #333; border: 2px solid #FFF;">View More</button>
			</div>
			<div class="col-xs-1 col-sm-12 col-md-4 col-lg-4 col-xl-3 text-center sites weather-site">
			  
			</div>
			<div class="col-xs-1 col-sm-12 col-md-4 col-lg-4 col-xl-3 text-center sites weather-site">
			  
			</div>
		  </div>
		</div>
		<div class="col-12 text-center" id="about">
		  <div class="row">
		    <div class="col-xs-1 col-xl-6 bio">
			  <h1>About Me</h1><hr>
		      <h3 style="margin-top: 10%;">
			    Hi. I'm Clint, an up-and-coming Front-End Developer.<br> 
			    I build responsive websites, and accessible UI.<br>
				I'm always learning and testing new design skills, and looking for new challenges.<br>
				When I'm not coding websites, I'm dabbling in game, and/or app development.
			  </h3>
		    </div>
		    <div class="col-xs-1 col-xl-6 skills">
			  <h1>Skills</h1><hr>
			  <div class="row">
			    <div class="col-4">
				  <h4>HTML<h4>
				</div>
				<div class="col-4">
				  <h4>CSS</h4>
				  <h4>Bootstrap</h4>
				</div>
				<div class="col-4">
				  <h4>JS</h4>
				  <h4>JQuery</h4>
				</div>
			  </div>
			  <h4 style="margin-top: 40%; margin-bottom: 5%;">more to come...</h4>
		    </div>
		  </div>
		</div>
		<div class="col-12 text-center" id="contact">
		  <h1>Contact Me</h1><hr>
		  <p>If you have a project in mind,<br> or your site just needs a touch up, feel free to contact me!</p>
		  <div action="mailto:cjjones973@yahoo.com" method="post" enctype="text/plain" class="form-group  col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 row">
		    <input class="form-control" type="text" name="name" placeholder="Name" id="name">
			<input class="form-control" type="email" name="mail" placeholder="Email" id="email">
			<input class="form-control" type="tel" name="tel" placeholder="Phone number" id="phone-number">
			<textarea class="form-control" name="message" placeholder="Message" id="message" rows="6"></textarea>
			<input type="submit" name="submit" value="send" class="btn" align="right">
		  </div>
		</div>
		<div class="col-12 text-center" style="background-color: #333;">
		  <h4 style="color:#FFF; margin-top: 1em;">Around the web</h4>
		  <a href="https://github.com/CubeNode" target="_blank"><i class="fa fa-github"></i></a>
		  <a href="https://www.freecodecamp.org/fcc4e2fb826" target="_blank"><i class="fa fa-free-code-camp"></i></a>
		  <a href="mailto:cjjones973@yahoo.com"><i class="fa fa-envelope"></i></a>
		</div>
	  </div>
	</div>
	<?php
		  echo "bump";
		?>
  </body>
</html>