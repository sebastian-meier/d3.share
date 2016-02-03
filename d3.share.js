/* exported share */
/* global d3,console,share_l */
//jshint latedef:nofunc

/*
The SVG icons are not loaded as images, instead they are inserted as raw SVG code
This way its less files to load and we can easily style the svg elements through css
*/

//TODO: Add Namespace for css and js variables, make it an object and keep everything inside

var i_svg = {
	twitter:'<svg class="icon" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="104.5px" height="104.5px" viewBox="0 0 104.5 104.5" enable-background="new 0 0 104.5 104.5" xml:space="preserve"><path d="M-0.682-0.405v104.5h104.5v-104.5H-0.682z M78.845,37.854c0.027,0.604,0.041,1.211,0.041,1.821 c0,18.598-14.156,40.043-40.042,40.043c-7.948,0-15.346-2.33-21.574-6.323c1.101,0.13,2.222,0.196,3.357,0.196 c6.594,0,12.662-2.25,17.479-6.024c-6.159-0.113-11.355-4.183-13.146-9.772c0.859,0.162,1.74,0.252,2.647,0.252 c1.283,0,2.526-0.172,3.707-0.494c-6.438-1.293-11.289-6.981-11.289-13.8c0-0.059,0-0.118,0.002-0.177 c1.897,1.054,4.067,1.688,6.374,1.761c-3.776-2.524-6.261-6.832-6.261-11.714c0-2.58,0.694-4.997,1.905-7.075 c6.941,8.515,17.312,14.118,29.008,14.704c-0.24-1.03-0.364-2.104-0.364-3.207c0-7.772,6.302-14.074,14.073-14.074 c4.048,0,7.707,1.709,10.273,4.444c3.206-0.631,6.218-1.802,8.938-3.415c-1.051,3.287-3.282,6.044-6.188,7.786 c2.847-0.34,5.56-1.097,8.083-2.216C83.98,33.393,81.595,35.871,78.845,37.854z"/></svg>',
	linkedin:'<svg class="icon" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="104.5px" height="104.5px" viewBox="0 0 104.5 104.5" enable-background="new 0 0 104.5 104.5" xml:space="preserve"><path d="M-0.039-0.201v104.5h104.5v-104.5H-0.039z M35.561,82.951H21.699V41.249h13.861V82.951z M28.631,35.556 h-0.09c-4.652,0-7.66-3.203-7.66-7.205c0-4.092,3.1-7.205,7.842-7.205s7.66,3.113,7.75,7.205 C36.473,32.353,33.465,35.556,28.631,35.556z M85.541,82.951H71.682v-22.31c0-5.607-2.006-9.43-7.021-9.43 c-3.828,0-6.111,2.578-7.111,5.069c-0.367,0.89-0.457,2.137-0.457,3.383v23.287H43.232c0,0,0.182-37.788,0-41.702h13.859v5.908 c1.842-2.841,5.135-6.887,12.492-6.887c9.119,0,15.957,5.959,15.957,18.77V82.951z"/></svg>',
	google:'<svg class="icon" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="104.5px" height="104.5px" viewBox="0 0 104.5 104.5" enable-background="new 0 0 104.5 104.5" xml:space="preserve"><g><path d="M52.524,43.074c0-5.425-3.234-13.862-9.47-13.862c-1.96,0-4.061,0.979-5.268,2.488 c-1.278,1.583-1.65,3.611-1.65,5.576c0,5.045,2.93,13.405,9.398,13.405c1.879,0,3.9-0.899,5.111-2.105 C52.375,46.838,52.524,44.432,52.524,43.074z"/><path d="M-0.406,0v104.5h104.5V0H-0.406z M41.923,84.134c-10.902,0-16.16-5.195-16.16-10.774 c0-2.71,1.349-6.55,5.786-9.188c4.658-2.863,10.977-3.236,14.362-3.471c-1.058-1.354-2.257-2.785-2.257-5.119 c0-1.279,0.377-2.033,0.748-2.938c-0.828,0.076-1.65,0.15-2.403,0.15c-7.967,0-12.477-5.956-12.477-11.831 c0-3.461,1.575-7.306,4.809-10.094c4.288-3.54,10.144-4.501,14.208-4.501h14.812l-4.889,3.071h-4.658 c1.728,1.43,5.332,4.443,5.332,10.172c0,5.571-3.153,8.214-6.31,10.699c-0.979,0.977-2.106,2.032-2.106,3.692 c0,1.654,1.128,2.557,1.953,3.241l2.709,2.104c3.309,2.786,6.315,5.348,6.313,10.551C61.696,76.98,54.853,84.134,41.923,84.134z M81.925,54.329h-7.558v7.578h-3.721v-7.578h-7.52v-3.761h7.52v-7.532h3.721v7.532h7.558V54.329z"/><path d="M48.464,62.89c-0.599-0.076-0.975-0.076-1.728-0.076c-0.676,0-4.737,0.148-7.893,1.21 c-1.654,0.599-6.464,2.408-6.464,7.756c0,5.351,5.187,9.198,13.229,9.198c7.218,0,11.055-3.475,11.055-8.14 C56.664,68.985,54.181,66.958,48.464,62.89z"/></g></svg>',
	facebook:'<svg class="icon" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="104.5px" height="104.5px" viewBox="0 0 104.5 104.5" enable-background="new 0 0 104.5 104.5" xml:space="preserve"><path d="M0,0v104.5h57.056V68.609H44.979V54.623h12.077V44.308c0-11.971,7.311-18.489,17.989-18.489 c5.116,0,9.512,0.381,10.793,0.551V38.88l-7.406,0.003c-5.807,0-6.932,2.759-6.932,6.809v8.931h13.85l-1.803,13.986H71.5V104.5h33V0 H0z"/></svg>',
	close:'<svg class="icon" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="104.5px" height="104.188px" viewBox="0 0 104.5 104.188" enable-background="new 0 0 104.5 104.188" xml:space="preserve"><path d="M52.25,0C23.395,0,0,23.393,0,52.25c0,28.856,23.395,52.25,52.25,52.25c28.857,0,52.25-23.394,52.25-52.25 C104.5,23.393,81.107,0,52.25,0z M79.307,70.915l-8.392,8.392L52.25,60.642L33.585,79.307l-8.392-8.392L43.859,52.25L25.193,33.584 l8.392-8.392l18.666,18.666l18.665-18.665l8.392,8.392L60.643,52.25L79.307,70.915z"/></svg>',
	fullscreen:'<svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="52.25px" height="52.25px" viewBox="0 0 52.25 52.25" enable-background="new 0 0 52.25 52.25" xml:space="preserve"><path d="M0,0v52.25h52.25V0H0z M16.833,8l-2.986,2.986L10.5,10.5l0.486,3.347L8,16.833L6.5,6.5L16.833,8z M6.5,45.75L8,35.417 l2.986,2.986L10.5,41.75l3.347-0.486l2.986,2.986L6.5,45.75z M35.417,44.25l2.985-2.986l3.348,0.486l-0.486-3.347l2.986-2.986 l1.5,10.333L35.417,44.25z M44.25,16.833l-2.986-2.986L41.75,10.5l-3.348,0.486L35.417,8L45.75,6.5L44.25,16.833z"/></svg>',
	fullscreen_out:'<svg class="icon" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="52.25px" height="52.25px" viewBox="0 0 52.25 52.25" enable-background="new 0 0 52.25 52.25" xml:space="preserve"><path d="M0,0v52.25h52.25V0H0z M6.5,15.333l2.986-2.986l3.347,0.486l-0.486-3.347L15.333,6.5l1.5,10.333L6.5,15.333z M16.833,35.417l-1.5,10.333l-2.986-2.986l0.486-3.347l-3.347,0.486L6.5,36.917L16.833,35.417z M45.75,36.917l-2.985,2.986 l-3.348-0.486l0.486,3.347l-2.986,2.986l-1.5-10.333L45.75,36.917z M36.917,6.5l2.986,2.986l-0.486,3.347l3.348-0.486l2.985,2.986 l-10.333,1.5L36.917,6.5z"/></svg>',
	data:'<svg class="icon" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="52.25px" height="52.25px" viewBox="0 0 52.25 52.25" enable-background="new 0 0 52.25 52.25" xml:space="preserve"><path d="M26.125,0C11.696,0,0,11.697,0,26.125S11.696,52.25,26.125,52.25S52.25,40.553,52.25,26.125S40.554,0,26.125,0z M18.515,37.537h-6.887v-3.355h6.887V37.537z M18.515,31.047h-6.887v-3.355h6.887V31.047z M18.515,24.558h-6.887v-3.355h6.887 V24.558z M18.515,18.068h-6.887v-3.355h6.887V18.068z M30.64,37.537H20.398v-3.355H30.64V37.537z M30.64,31.047H20.398v-3.355H30.64 V31.047z M30.64,24.558H20.398v-3.355H30.64V24.558z M30.64,18.068H20.398v-3.355H30.64V18.068z M40.622,37.537h-8.099v-3.355h8.099 V37.537z M40.622,31.047h-8.099v-3.355h8.099V31.047z M40.622,24.558h-8.099v-3.355h8.099V24.558z M40.622,18.068h-8.099v-3.355 h8.099V18.068z"/></svg>',
	share:'<svg class="icon" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="52.25px" height="52.25px" viewBox="0 0 52.25 52.25" enable-background="new 0 0 52.25 52.25" xml:space="preserve"><path d="M26.125,0C11.696,0,0,11.696,0,26.125C0,40.553,11.696,52.25,26.125,52.25S52.25,40.553,52.25,26.125 C52.25,11.696,40.554,0,26.125,0z M20.97,26.125c0,0.604-0.113,1.181-0.312,1.716l8.729,6.096c0.865-0.738,1.984-1.185,3.21-1.185 c2.735,0,4.952,2.217,4.952,4.952c0,2.735-2.217,4.952-4.952,4.952c-2.734,0-4.952-2.217-4.952-4.952 c0-0.604,0.114-1.181,0.312-1.716l-8.729-6.096c-0.864,0.737-1.984,1.186-3.21,1.186c-2.734,0-4.952-2.217-4.952-4.952 c0-2.735,2.218-4.952,4.952-4.952c1.226,0,2.346,0.447,3.21,1.185l8.729-6.096c-0.198-0.535-0.312-1.112-0.312-1.716 c0-2.735,2.218-4.952,4.952-4.952c2.735,0,4.952,2.217,4.952,4.952c0,2.735-2.217,4.952-4.952,4.952 c-1.226,0-2.345-0.448-3.21-1.186l-8.729,6.096C20.856,24.944,20.97,25.521,20.97,26.125z"/></svg>'
},
isF=false,attr,btstrp=false;

function share(attributes){

	var defaults = {
		headline:false,
		subline:false,
		attribution:false,
		fullscreen:false,
		share:false,
		//This is for the bootstrap embed
		ratio:'4by3', //16by9
		sharetype:'origin', //referrer, visualization
		services:['twitter','facebook','google','linkedin'],
		data:false,
		//padding between headline/footer and the visualization (svg)
		padding:5,
		//Used to calculate the svg height (- footer and header)
		footerHeight:50,
		//If no headline/subline is defined this is the header height (fullscreen button)
		headerHeight:50,
		callback:false,
		redrawCallback:false,
		origin:false/*
			{
				url:URL OF THE ORIGINAL ARTICLE
				strict:false > don't check for both https/http and not http/https | true > url must match exactly
				title:TIEL OF THE ORIGINAL ARTICLE
			}
		*/
	};

	//merge attributes and defaults
	attr = d3.tools.extend(defaults, attributes);

	//If required add HTML elements 
	if(attr.headline){
		d3.select('body').append('h1').html(attr.headline);

	}

	if(attr.subline){
		d3.select('body').append('h2').html(attr.subline);
	}

	if(attr.fullscreen){
		d3.select('body').append('div').attr('id','fullscreen').html(i_svg.fullscreen).on('click', function(){
			if(isF){
				exitFullscreen();
				isF = false;
			}else{
				launchIntoFullscreen(document.documentElement);
				isF = true;
			}
		});
	}

	var attr_str = '';
	if(attr.attribution){
		attr_str = attr.attribution;
	}

	if(attr.data){
		attr_str += i_svg.data;
	}

	if(attr.data || attr.attribution){
		d3.select('body').append('div').attr('id','attribution').html(attr_str).on('click', function(){
			setOverlay('data');
			showOverlay();
		});
	}

	if(attr.share){
		d3.select('body').append('div').attr('id','share').html(i_svg.share).on('click', function(){
			setOverlay('share');
			showOverlay();
		});
	}

	if(attr.share || attr.data){
		//Create the share overlay
		var overlay = d3.select('body').append('div').attr('id', 'overlay');
		
		if(attr.headline){
			overlay.append('h1').html(attr.headline);
		}

		if(attr.subline){
			overlay.append('h2').html(attr.subline);
		}

		overlay.append('div').attr('id', 'close').html(i_svg.close).on('click', function(){
			hideOverlay();
		});

		if(attr.origin){
			//Add Logo or something if not origin?!

			var same = false;

			if(attr.origin.strict){
				if(attr.origin.url.toLowerCase() === document.referrer.toLowerCase()){
					same = true;
				}
			}else{
				if(attr.origin.url.toLowerCase().replace(/http:\/\/|https:\/\//gi, '') === document.referrer.toLowerCase().replace(/http:\/\/|https:\/\//gi, '')){
					same = true;
				}
			}

			//If origin attributes are defined and the origin.url is not the same than the embedding URL or if someone is accessing this visualization directly we add the data of the original article
			overlay.append('div').attr('id', 'origin').html(share_l.origin.start+'<br /><a href="'+attr.origin.url+'">'+attr.origin.title+share_l.origin.end+'</a>');
		}

		var embed = overlay.append('div').attr('id', 'embed');

		embed.append('h3').text(share_l.embed.title);
		embed.append('input').attr('id', 'embed-el').attr('value', shr_txt(false)).attr('onClick', 'this.setSelectionRange(0, this.value.length)');

		var bootstrap = embed.append('div');
			bootstrap.append('input').attr('type', 'checkbox').attr('id', 'bootstrap').on('change', function(){
				d3.select('#embed-el').attr('value', shr_txt(d3.select('#bootstrap').property('checked')));
			});
			bootstrap.append('label').attr('for', 'bootstrap').text(share_l.embed.bootstrap);


		var services = overlay.append('div').attr('id', 'services');

		services.append('h3').text(share_l.share.type[attr.sharetype]);

		services.append('ul').selectAll('li')
			.data(attr.services).enter().append('li')
				.html(function(d){
					var shr_str = '<a target="_blank" href="';

					//Check which URL to share
					var shr_url = document.referrer;
					switch(attr.sharetype){
						case 'origin':
							if(attr.origin && attr.origin.url){
								shr_url = attr.origin.url;
							}
						break;
						case 'referrer':
							//default, see above
						break;
						case 'visualization':
							shr_url = window.location.href;
						break;
					}

					//Generate URL
					switch(d){
						case 'facebook':
							shr_str += 'https://www.facebook.com/sharer/sharer.php?u='+shr_url;
						break;
						case 'google':
							shr_str += 'https://plus.google.com/share?url='+shr_url;
						break;
						case 'linkedin':
							shr_str += 'https://www.linkedin.com/shareArticle?mini=true&url='+shr_url+'&title='+((attr.headline) ? attr.headline : '');
						break;
						case 'twitter':
							shr_str += 'https://twitter.com/home?status='+shr_url;
						break;
					}

					shr_str += '">'+i_svg[d]+share_l.share.on+' <span>'+d+'</span></a>';

					return shr_str;
				});

	}

	//If both elements exist, set padding-left so that attribution and data icon don't overlap
	if((attr.attribution || attr.data) && attr.share){
		d3.selectAll('#attribution').style('padding-left', '50px');
	}

	var h = calcHeight();

	var container = d3.select('body').append('div').attr('id', 'holder').style('padding-top', attr.padding+'px')
		.append('div').attr('id', 'container')
			.attr('height', h);

	if(attr.redrawCallback){
		d3.select(window).on('resize', shareResize);
	}

	//Execute the callback function and send the SVG container

	if(attr.callback){
		attr.callback(container);
	}
}

function shr_txt(bootstrap){
	if(bootstrap){
		return '<div class="embed-responsive embed-responsive-'+attr.ratio+'"><iframe allowfullscreen class="embed-responsive-item" src="'+window.location.href+'"></iframe></div>';
	}else{
		return '<iframe allowfullscreen src="'+window.location.href+'"></iframe>';
	}
}

function showOverlay(){
	d3.tools.addClass(d3.select('body'), 'overlay-active');
	d3.select('#overlay').style('display', 'block');
}

function hideOverlay(){
	d3.tools.removeClass(d3.select('body'), 'overlay-active');
	d3.select('#overlay').style('display', 'none');
}

function setOverlay(type){

	//depending on height

	switch(type){
		case 'data':

		break;
		case 'share':

		break;
	}
}

function calcHeight(){
	//All the extra elements are set. Now we need to calculate the width and height that are left for our visualization

	var h = window.innerHeight;

	if(attr.share || attr.attribution || attr.data){
		h -= attr.footerHeight;
	}
	
	if(attr.subline){
		h -= d3.select('h2').node().getBoundingClientRect().bottom;
	}else if(attr.headline){
		h -= d3.select('h1').node().getBoundingClientRect().bottom;
	}else{
		h -= attr.headerHeight;
	}

	h -= 2*attr.padding;

	return h;
}

function shareResize(){
	var h = calcHeight();

	var container = d3.select('#container')
			.attr('height', h);

	if(attr.redrawCallback){
		attr.redrawCallback(container);
	}
}


//Original code from David Walsh (http://davidwalsh.name/fullscreen)
function launchIntoFullscreen(element) {
	if(element.requestFullscreen) {
		element.requestFullscreen();
	} else if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if(element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if(element.msRequestFullscreen) {
		element.msRequestFullscreen();
	} else{
		console.log("no fullscreen");
	}
}

function exitFullscreen() {
	if(document.exitFullscreen) {
		document.exitFullscreen();
	} else if(document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if(document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}
}