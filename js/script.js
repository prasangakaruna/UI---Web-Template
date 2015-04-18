// nav-bar
$(function(){
	var n = '#nav', no = 'nav-open';
	
	$('#nav-menu').click(
		function (){
		if($(n).hasClass(no)){
			$(n).animate({height:0},500);	
			setTimeout(function (){
				$(n).removeClass(no).removeAttr('style');
			},320);
		}
		else{
			
			var newH = $(n).css('height','auto').height();
			$(n).height(0).animate({height:newH},500);
			
			setTimeout(function (){
				$(n).addClass(no).removeAttr('style');
			},320);
		}
	});
})();

// images drop down

