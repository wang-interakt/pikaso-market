$(document).ready(function(){

	$( ".cross" ).hide();
	//$( ".menu" ).hide();
	$( ".hamburger" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});

	// header carousel 
	$('#header-carousel').owlCarousel({
	    loop: true,
	    margin: 30,
	    dots: false,
	    nav: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	// Hot bids carousel 
	$('#hot-bids-carousel').owlCarousel({
	    loop: true,
	    margin: 30,
	    dots: false,
	    nav: true,
	    margin:10,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	$('.filters ul li').click(function(){
	  $('.filters ul li').removeClass('active');
	  $(this).addClass('active');
	  
	  var data = $(this).attr('data-filter');
	  $grid.isotope({
	    filter: data
	  })
	});

	var $grid = $(".grid").isotope({
	  itemSelector: ".all",
	  percentPosition: true,
	  masonry: {
	    columnWidth: ".all"
	  }
	});

	function readURL(input) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();
	        reader.onload = function(e) {
	            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
	            $('#imagePreview').hide();
	            $('#imagePreview').fadeIn(650);
	        }
	        reader.readAsDataURL(input.files[0]);
	    }
	}
	
	$("#imageUpload").change(function() {
	    readURL(this);
	});

	function readURLSingle(input) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();
	        reader.onload = function(e) {
	            $('#my-preview-section').css('background-image', 'url('+e.target.result +')');
	            $('#my-preview-section').hide();
	            $('#my-preview-section').fadeIn(650);

	            $('#imagePreviewRes').css({ 
	            	'width': '100px', 
	            	'height': '100px', 
	            	'background-size': 'cover',
				    'background-repeat': 'no-repeat',
				    'background-position': 'center',
				    'margin-left': 'auto',
				    'margin-right': 'auto',
	            });
	            $('#close-preview-button').css('display', 'inline-block');
	            $('#imagePreviewRes').css('background-image', 'url('+e.target.result +')');
	            $('#placeholder').fadeOut(100);
	            $('#file-1').fadeOut(100);
	            $('#choose_file_selected').fadeOut(100);
	            $('#imagePreviewRes').hide();
	            $('#imagePreviewRes').fadeIn(650);
	        }
	        reader.readAsDataURL(input.files[0]);
	    }
	}
	
	$("#file-1").change(function() {
	    readURLSingle(this);
	});

	$('#close-preview-button').click(function(){
		$('#file-1').val();
		$('#placeholder').fadeIn(100);
        $('#file-1').fadeIn(100);
        $('#choose_file_selected').fadeIn(100);
        $('#choose_file_selected').html('Choose file');
        $('#imagePreviewRes').css({ 
        	'width': 'auto', 
        	'height': 'auto', 
        	'background-size': 'cover',
		    'background-repeat': 'no-repeat',
		    'background-position': 'center',
		    'margin-left': 'auto',
		    'margin-right': 'auto',
        });
        $('#close-preview-button').css('display', 'none');
        $('#imagePreviewRes').css('background-image', 'none');
        $('#my-preview-section').css('background-image', 'none');
	});


	$('input[name=chooseCollection]').change(function(){
	    var value = $( 'input[name=chooseCollection]:checked' ).val();
	    alert(value);
	});

	$('#token-maximize').click(function(){
		$('.token-section').addClass('main-div-js-element');
		$('.display-section-heart-maximize').css('display','none');
		$('.display-section-heart-minimize').css('display','block');
		$('.heading-token-details-mm').css('display','block');
		$('.token-image').addClass('img-div-js-element');
		$('.token-image img').addClass('img-js-element');
	});

	$('#token-minimize').click(function(){
		$('.token-section').removeClass('main-div-js-element');
		$('.display-section-heart-maximize').css('display','flex');
		$('.display-section-heart-minimize').css('display','none');
		$('.heading-token-details-mm').css('display','none');
		$('.token-image').removeClass('img-div-js-element');
		$('.token-image img').removeClass('img-js-element');
	});

	// search input field

	// $("#searchInput").focus(function () {
  
	//     $("#searchInput").css({
	//       "display": "inline",
	//       "width": "90%",
	//       "border": "1px solid #40585d",
	//       "opacity": "1",
	//       "padding": "8px 20px 8px 20px",
	//       "background-image": "none",
	//       "box-shadow": "0 0 1px black"
	//     });
	//     $("#submitsearch").css("display", "inline");
	   
	//     $("#searchInput").prop("placeholder", "");
 //    });


 	// menu 



});