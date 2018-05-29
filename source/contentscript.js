$( document ).ready(function() {
	//Domæne
	var domain = window.location.host
	
	//Tjekker hvilket domæne vi befinder os på
	if(domain == "aarhustech.itslearning.com")
	{
		$('.itsl-native-login-button').on('click', function() {
			$('body').jGravity({
				target: 'p, input, h1, h2, h3, h4, span, img, a, div',
				depth: 10,
				drag: true
			});
		});
		
		var holliday = getHolliday();
		var image = "images/itsloading.png";
		
		if(holliday == 1) {
			image = "images/itsloading-christmas.png";
		} else if (holliday == 3) {
			image = "images/itsloading-halloween.png";		
		}
		
		// else if(holliday == 2) {
		//	image = "images/itsloadingNEWYEAR.png";
		//}
		
		var bannerimg = chrome.extension.getURL(image);
		var otherimg = chrome.extension.getURL("images/itsloading.png");
		
		//Giver os hvilken side (/), og gør det til lowercase
		//var name = document.location.href.match(/[^\/]+$/)[0];
		if(document.location.href.match(/[^\/]+$/))
			var name = document.location.href.match(/[^\/]+$/)[0];
		else
			var name = "index.aspx";
		
		name = name.toLowerCase();
		
		
		//Ændre titlen på hjemmesiden, så længe vi befinder os på It's Learning, og titlen er 'itslearning'
		var title = $('title').text();
		title = title.trim();
		
		if(title == "itslearning") {
			$('title').text("itsloading...");
		}
		
		//Tjekker hvilke side vi er på, og laver passende aktioner.
		if(name.indexOf("index.aspx") != -1)
		{
			if(holliday == 1)
				$.fn.snow({ minSize: 10, maxSize: 10, newOn: 250, flakeColor: "#FFFFFF" });
				
			
			var logintext = $('#ctl00_ContentPlaceHolder1_nativeAndLdapLoginWrapper').find('p[class$="h-fnt-sm"]');
			logintext.html("Log på med itsloading");
			
			var sitelogo = $('.l-login-sitelogo');
			sitelogo.attr('src', bannerimg);
			sitelogo.css('max-height', 100);
			
			var sitetext = $('.h-dsp-ib');
			sitetext.html("Aarhus Tech - It's Loading...");
			
			
			var footer = $('.copyrightlogo');
			var footer_img = footer.find('img');
			footer_img.attr('src', otherimg);
			footer_img.css('width', "auto");
			footer_img.css('height', 33);
						
		}
		else
		{
			
			$('body').find("a").each(function() {
				var link =  $(this);
				
				if($(this).attr("href"))
				{
					var linkHref = $(this).attr("href");
					
					if((linkHref.indexOf("https://") != -1) || (linkHref.indexOf("http://") != -1))
					{
						if(!((linkHref.indexOf("aarhustech.itslearning.com") != -1) || (linkHref.indexOf("itslearning.eu") != -1) || (linkHref.indexOf("skolenet.aarhustech.dk") != -1)))
						{
							link.attr("target", "_blank");
						}
					}
				}
				
			});	
			
			var poweredby = $('body').find('a[id="ctl00_BrandIconLink"]');
			
			poweredby.html('<img src="'+otherimg+'" height="24" alt="">');			
		}

	}
	else if(domain == "skolenet.aarhustech.dk")
	{
		var learningtext = $('body').find('div[title$="Skolens læringsmiljø for studerende"]');
		
		learningtext.html('<a href="https://aarhustech.itslearning.com/elogin/" ><img alt="Skolens l&#230;ringsmilj&#248; for studerende" src="http://www.ats.dk/images/Resume_145/its_learning.gif" ><br />it\'s loading</a>');
	}
	else if(domain == "aarhustech.dk")
	{
		$('td:contains("It\'s learning"),td:contains("it\'s learning")').each(
			function()
			{ $(this).html("It's Loading"); }
		);
	}
});