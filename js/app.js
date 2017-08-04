$(document).ready(function(){
	PEPSI.init(DATA);
});

var PEPSI = (function(){
	var	mainHeight = $('main').height(),
        mainWidth = $('main').width(),
		loopInterval = 30,
		loopCounter = 0,
		interval,
		data;

	var ANIMS = {
		move: function(element, values) {
			var $element = $('#'+element.id);
				 eleft = $element.position().left,
				 etop = $element.position().top;
				 console.log(top + values[0] +'px');
			$element.css({
				 top: etop + values[1] +'px',
				 left: eleft + values[0] +'px'
			})
		},
		rotate: function(element, arr) {
			// console.log(element);
			// console.log(arr);
		}
	};

	function animateElements() {
		data.forEach(function(element){
			if(loopCounter % element.time == 0){
				// element.anims.forEach(function(anim){
				// 	 anim.forEach(function(singleAnim){
				// 		ANIMS[singleAnim.type](element, singleAnim.values);
				//
				// 	 });
				// });
				// element.anims[element.counter].forEach(function(anim){
				// 	ANIMS[anim.type](element, anim.values);
				// });
				for(var i = 0; i < element.anims[element.counter].length; i++)
                     	ANIMS[element.anims[element.counter][i].type](element, element.anims[element.counter][i].values);
				element.counter++;
				if(element.counter >= element.anims.length) element.counter = 0;
			}
		});
		loopCounter += loopInterval;
	};

	function startMainLop(){
		interval = setInterval(animateElements, loopInterval);
	};

	function initGraphs() {
		data.forEach(function(element) {
			var newElement = $("<div id='"+element.id+"' class='element'>"),
				path = 'url(../img/'+element.id+'.png) ';
            newElement.css({background: path,
				top: mainHeight / 100 * element.y - (element.height / 2),
				left: mainWidth / 100 * element.x - (element.width / 2),
				width: element.width+'px',
				height: element.height+'px',
				zIndex: element.z
			});
			$('main').append(newElement);
		});
    }



	function dev(){
		$('body').on('click', function(){
        });
	}
	return{
		init: function(DATA){
			data = DATA;
			dev();
            $('body').scrollLeft(mainWidth / 3);
			initGraphs();
            startMainLop();
		}
	}
})();

var DATA = [
	{ time: 100,
		x: 50,
		y: 20,
		z: 2,
		counter: 0,
		width: 100,
		height: 100,
		id: 'pepsi2',
		anims: [
				[{type: 'move', values: [40,50]}, {type: 'rotate', values: [40]}],
				[{type: 'move', values: [-50,-50]}]
			]
	},
    // { time: 30,
    //     x: 50,
    //     y: 50,
    //     z: 2,
    //     counter: 0,
    //     width: 100,
    //     height: 100,
    //     id: 'pepsi1',
    //     anims: [[['move',20,20], ['rotate',40]],
    //         [['move',-20,-20]]]
    // },
]
