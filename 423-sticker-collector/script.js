// idea from: https://square.geex-arts.com/

console.clear();

let x = 0,
		y = 0;
let mouseX = 0,
		mouseY = 0,
		tilt;
const speed = 20; // higher = faster

$('body').on('mousemove', function(e) {
	mouseX = ($('body').innerWidth() / 2) - e.clientX;
	mouseY = ($('body').innerHeight() / 2) - e.clientY;
});

const scene = $('.scene');
const title = $('.title');
let moving = true;

const move = () => {
	if (moving) {
		// get the current transform of the scene
		// theres a easier way i guess
		let transform = scene.css('transform');
		transform = transform.replace('matrix(', '').replace(')', '');
		transform = transform.split(',');
		let transformX = transform[4];
		let transformY = transform[5];

		x = x + (speed * (mouseX / $('body').innerWidth()));
		y = y + (speed * (mouseY / $('body').innerHeight()));

		let maxX = (scene.outerWidth() - $('body').innerWidth()) / 2 + ($('body').innerWidth() / 2);
		let maxY = (scene.outerHeight() - $('body').innerHeight()) / 2 + ($('body').innerHeight() / 2);

		if (x >= maxX) {
			x = maxX;
		} else if (x <= -maxX) {
			x = -maxX;
		}

		if (y >= maxY) {
			y = maxY;
		} else if (y <= -maxY) {
			y = -maxY;
		}
		
		tilt = mouseX / $('body').innerWidth();

		TweenLite.to(scene, .1, {
			rotate: `${tilt * 20}deg`,
			ease: Power4.easeInOut
		});
		TweenLite.to(title, .1, {
			rotate: `${tilt * -60}deg`,
			ease: Power4.easeInOut
		});
		TweenLite.to(scene, 1, {
			x: x,
			y: y,
			ease: Power4.easeOut
		});
	}
	
	requestAnimationFrame(move);
}


// add each sticker in the scene to the collection bar
$('.scene .sticker').each(function() {
	let stickerEl = $(this).clone().addClass('sticker--empty');
	$('.sticker-collection').prepend(stickerEl);
});



const stickerCollection = $('.sticker-collection');
const colorWheel = $('.color-wheel');

const openCollection = () => {
	TweenMax.to(stickerCollection, .5, {
		y: 0,
		ease: Power4.easeOut
	});
}

const closeCollection = () => {
	let collectionHeight = stickerCollection.innerHeight();
	moving = true;
	TweenMax.to(stickerCollection, .5, {
		y: collectionHeight,
		ease: Power4.easeOut,
	});
}

const addSticker = (sticker) => {
	moving = false;
	openCollection();
	
	// rotate scene back to 0
	TweenLite.to(scene, 1, {
		rotate: `0deg`,
		ease: Power4.easeInOut
	});
	
	// move scene mid to clicked sticker
	// get the transform of the scene
	let transform = scene.css('transform');
	transform = transform.replace('matrix(', '').replace(')', '');
	transform = transform.split(',');
	let transformX = transform[4];
	let transformY = transform[5];
	let currentX = sticker.offset().left + (sticker.outerWidth() / 2) - ($('body').innerWidth() / 2),
			currentY = sticker.offset().top + (sticker.outerHeight() / 2) - ($('body').innerHeight() / 2);
	let transformOffsetX = transformX - currentX;
	let transformOffsetY = transformY - currentY;
	
	x = transformOffsetX;
	y = transformOffsetY;
	mouseX = 0;
	mouseY = 0;
	tilt = 0;
	
	TweenMax.to(scene, 1, {
		x: transformOffsetX,
		y: transformOffsetY,
		ease: Power4.easeOut
	});
	TweenMax.to(title, .25, {
		y: '-100px',
		rotate: 0,
		ease: Power4.easeInOut,
		delay: .25
	});
	
	
	
	// animation of sticker
	setTimeout(() => {
		// create a clone of the clicked sticker and append to body
		let stickerClone = sticker.clone().addClass('animating-sticker').appendTo('body');
		
		// get the position of the clicked sticker
		let currentX = sticker.offset().left + (sticker.outerWidth() / 2) - ($('body').innerWidth() / 2),
				currentY = sticker.offset().top + (sticker.outerHeight() / 2) - ($('body').innerHeight() / 2);

		// get the position of the sticker in the collection
		let stickername = sticker.attr('data-sticker');
		let collectionSticker = $(`.sticker-collection [data-sticker="${stickername}"]`);
		let collectionOffsetX = collectionSticker.offset().left + (collectionSticker.outerWidth() / 2) - ($('body').innerWidth() / 2),
				collectionOffsetY = collectionSticker.offset().top + (collectionSticker.outerHeight() / 2) - ($('body').innerHeight() / 2);
		let collectionWidth = collectionSticker.outerWidth(),
				collectionHeight = collectionSticker.outerHeight();
		
		const tl = new TimelineMax();

		tl.set(sticker, {
			opacity: 0
		});
		tl.set(stickerClone, {
			x: currentX,
			y: currentY,
		});
		tl.to(stickerClone, .5, {
			scale: 2,
			ease: Power4.easeInOut
		});
		tl.to(colorWheel, .5, {
			scale: 1.5,
			ease: Power4.easeInOut
		}, '-=.5');
		tl.to(colorWheel, .5, {
			scale: 0,
			ease: Power4.easeInOut,
			delay: 1,
		});
		tl.to(stickerClone, 1, {
			x: collectionOffsetX,
			y: collectionOffsetY,
			scale: 1,
			width: collectionWidth,
			height: collectionHeight,
			ease: Power4.easeOut,
			delay: 1,
			onComplete: () => {
				collectionSticker.addClass('sticker--found');
				moving = true;
			}
		}, '-=1.4');
		tl.to(title, .25, {
			y: 0,
			ease: Power4.easeInOut,
		}, '-=.5');
		tl.to(stickerClone, 1, {
			opacity: 0,
			onComplete: () => {
				stickerClone.remove();
				closeCollection();
			}
		});
	}, 500);

}

$('.scene .sticker').on('click', function() {
	addSticker($(this));
});

$('.sticker-collection__trigger').on('mouseover', function() {
	moving = false;
	TweenLite.to(scene, 1, {
		rotate: `0deg`,
		ease: Power4.easeInOut
	});
	openCollection();
});
$('.sticker-collection').on('mouseleave', function() {
	closeCollection();
});


const init = () => {
	closeCollection();
	move();
}

init();