$(document).ready(function(){
	PEPSI.init();
});

var PEPSI = (function(){
	

	function dev(){
		$('body').on('click', event => { console.log(window.innerWidth);
				console.log($('body').width())});
	}
	return{
		init: function(){
			dev();
			// $('main').scrollLeft($('main').width() /2); 
		}
	}
})();