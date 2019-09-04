$(document).ready(function(){
	$('.my-number').keyup(function() {
		var valor= $(this).val();
		window.setTimeout(function() {
			$(".block-one").text(valor.substr(0, 4));
			$(".block-two").text(valor.substr(5, 4));
			$(".block-tree").text(valor.substr(10, 4));
			$(".block-four").text(valor.substr(15, 4));
			
			if( !valor ) {
				$(".block-one,.block-two,.block-tree,.block-four").text('****')
			}
			
		}, 0);
	});
	
	$('.name').keyup(function() {
		var valor= $(this).val();
		window.setTimeout(function() {
			$(".client").text(valor);
			
			if( !valor ) {
				$(".client").text('Nome do Titular');
			}
			
		}, 0);
		
	});
	
	$('.validity').keyup(function() {
		var valor= $(this).val();
		window.setTimeout(function() {
			$(".date").text(valor);
			
			if( !valor ) {
				$(".date").html('00/00');
			}
			
		}, 0);
	});
	
	$('.cvv').keyup(function() {
		var valor= $(this).val();
		window.setTimeout(function() {
			$(".cvv-number").text(valor);
			
			if( !valor ) {
				$(".cvv-number").html('***');
			}
			
		}, 0);
	});
	
	$('.my-number').inputmask({
		"mask": "9999 9999 9999 9999",
		"placeholder": ''
	});
	
	$(".name").inputmask({ regex: "[a-zA-Z- ]*" });
	
	$('.validity').inputmask({
		"mask": "99/99",
		"placeholder": ''
	});
	
	$('.cvv').inputmask({
		"mask": "999",
		"placeholder": ''
	});
	
	$('select').change(function(){
		if( $(this).val() ) { 
			$(this).next().addClass('label-select');
		} else {
			$(this).next().removeClass('label-select');
		}
	});
	
	$('#cc').keyup(function() {
		var flag = $('#cc').val().length;
		if(flag >= 19){
			$('.my-card-off').addClass('my-card-on');
			$('.flag').css('visibility','visible');
			$('.name,.validity,.cvv,.parcel').removeAttr('disabled');
			//$('.error').fadeOut();
		} else {
			$('.my-card-off').removeClass('my-card-on');
			$('.flag').css('visibility','hidden');
			$('.name,.validity,.cvv,.parcel').prop('disabled','true');
		}
	});

	$('.cvv').focus(function() {
		$('.my-card-on').fadeOut(function(){
			$('.my-card-cvv').fadeIn();
		});
	});
	
	$('.cvv').blur(function() {
		$('.my-card-cvv').fadeOut(function(){
			$('.my-card-on').fadeIn();
		});
	});
	
	$('.cvv').keyup(function() {
		var fully = $('.cvv').val().length;
		if(fully >= 1){
			$('.my-card-cvv').addClass('my-card-cvv-on');
		} else {
			$('.my-card-cvv').removeClass('my-card-cvv-on');
		}
	});
	
	$(document).on('click','.send', function(e){
		e.preventDefault();
		$('.error').fadeIn();
	});
	
	$('input[type=text]').keyup(function() {
		var valor= $(this).val().length;
		if(valor >= 1){
			$(this).siblings('.error').fadeOut();
		}
	});

});