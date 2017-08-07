$(document).ready(function(){
	PEPSI.init([DATA, DATA2], 1500);
});

var PEPSI = (function(){
	var	mainHeight = $('main').height(),
        mainWidth = $('main').width(),
		loopInterval = 50,
		loopCounter = 0,
        intervalVar,
		data,
		$elements = [];
		// timeOfPart = 3000;

	var ANIMS = {
		move: function(index, values) {
			TweenMax.to($elements[index], 0, {x: values[0], y: values[1]});
		},
		rotate: function(index, arr) {
			TweenMax.to($elements[index], 0, {rotation: arr[0]});
		},
		changeBackground: function(index, values) {
			var path = 'url(../img/'+values[0]+'.png';
            TweenMax.to($elements[index], 0, {background: path});
		},
		brightnes: function(index, values) {
			TweenMax.to($elements[index], 0, {filter: 'brightness('+values+'%)'});
		}
	};

	function animateElements() {
		data.forEach(function(element, index){
			if(element.time)
				if(loopCounter % element.time == 0){
					for(var i = 0; i < element.anims[element.counter].length; i++)
							ANIMS[element.anims[element.counter][i].type](index, element.anims[element.counter][i].values);
					element.counter++;
					if(element.counter >= element.anims.length) element.counter = 0;
				}
		});
		loopCounter += loopInterval;
	};

	function startMainLop(){
		intervalVar = setInterval(animateElements, loopInterval);
	};

	function initGraphs() {
		data.forEach(function(element) {
			var newElement = $("<div id='"+element.id+"' class='element'>"),
				path = 'url(../img/'+element.id+'.png) ';
            newElement.css({background: path,
				top: mainHeight / 100 * element.y - (element.height / 2),
				left: mainWidth / 100 * element.x - (element.width / 2),
				width: mainWidth / 100 * element.width+'px',
				height: mainHeight / 100 * element.height+'px',
				zIndex: element.z
			});
			$('main').append(newElement);
			$elements.push(newElement);
		});
    };

	function initEvents() {
		var center = mainWidth / 2.7;
		if(window.DeviceOrientationEvent) {
			window.addEventListener('deviceorientation', function(event){
				window.scrollTo(center - (event.alpha* 10), 0);
			});
		}
	};

	function nextIteration(){
		$('main').html('');
        $elements = [];
		initGraphs();
        loopCounter = 0;
	}

	return{
		init: function(dataTab, partTime){
			var actPart = 0;
			data = dataTab[0];
			initGraphs();
			initEvents();
            startMainLop();
            setTimeout(function(){window.scrollTo(mainWidth/2.7, 0)}, 500);

            setInterval(function(){
				nextIteration();
                actPart ++;
                if(actPart < dataTab.length)
					data = dataTab[actPart];
			}, partTime);
		}
	}
})();

