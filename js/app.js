document.addEventListener("DOMContentLoaded", function(event) {
    PEPSI.init([DATA, DATA2], 1000);
});

var PEPSI = (function(){
	var	mainHeight = document.querySelector('main').offsetHeight,//$('main').height(),
        mainWidth = document.querySelector('main').offsetWidth, //width(),
		loopInterval = 50,
		loopCounter = 0,
        intervalVar,
		data,
		elements = [];

	var ANIMS = {
		move: function(index, values) {
			TweenMax.to(elements[index], 0, {x: values[0], y: values[1]});
		},
		rotate: function(index, arr) {
            TweenMax.to(elements[index], 0, {rotation: arr[0]});
		},
		changeBackground: function(index, values) {
			var path = 'url(./img/'+values[0]+'.png';
            TweenMax.to(elements[index], 0, {background: path});
		},
		brightnes: function(index, values) {
            TweenMax.to(elements[index], 0, {filter: 'brightness('+values+'%)'});
		},
		rotateXY: function(index, values) {
			TweenMax.to(elements[index], values[1], {transform: 'rotateY('+values[0]+'deg)'});
		}
	};

	function animateElements() {
		data.forEach(function(element, index){
			if(element.time)
				if(loopCounter % element.time === 0){
					for(var i = 0; i < element.anims[element.counter].length; i++)
							ANIMS[element.anims[element.counter][i].type](index, element.anims[element.counter][i].values);
					element.counter++;
					if(element.counter >= element.anims.length) element.counter = 0;
				}
		});
		loopCounter += loopInterval;
	}

	function startMainLoop(){
		intervalVar = setInterval(animateElements, loopInterval);
	}

	function initGraphs() {
		data.forEach(function(element) {
			var	path = 'url(./img/'+element.id+'.png) ';
			var newElement = document.createElement('div');
           	newElement.classList += 'element';
           	newElement.setAttribute('id', element.id);
           	newElement.style.background = path;
           	newElement.style.top = mainHeight / 100 * element.y - (element.height / 2) + 'px';
           	newElement.style.left = mainWidth / 100 * element.x - (element.width / 2) + 'px';
           	newElement.style.width = mainWidth / 100 * element.width+'px';
           	newElement.style.height =  mainHeight / 100 * element.height+'px';
           	newElement.style.zIndex = element.z;
			document.querySelector('main').appendChild(newElement);
            elements.push('#'+element.id);
		});
    }

	function initEvents() {
		var center = mainWidth / 2.7;
		if(window.DeviceOrientationEvent) {
			window.addEventListener('deviceorientation', function(event){
				window.scrollTo(center - (event.alpha* 10), 0);
			});
		}
	}

	function nextIteration(){
		document.querySelector('main').innerHTML = '';
        elements = [];
		initGraphs();
        loopCounter = 0;
	}

	return{
		init: function(dataTab, partTime){
			var actPart = 0;
			data = dataTab[0];
			initGraphs();
			initEvents();
            startMainLoop();
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

