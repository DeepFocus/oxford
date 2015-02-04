define(['jquery', 'modernizr'], function($, Modernizr) {

	var transitionEndEvent = {
				'WebkitTransition': 'webkitTransitionEnd',
				'transition': 'transitionend'
			}[Modernizr.prefixed('transition')],

			animationEndEvent = {
				'WebkitTransition': 'webkitTransitionEnd',
				'transition': 'transitionend'
			}[Modernizr.prefixed('transition')],

			canTransition = Modernizr.csstransitions && transitionEndEvent;

	triggerTransitionCallback = function(el, callback) {
		if (typeof callback !== 'function') {
			return this;
		}

		el.one(exports.transitionEndEvent, function() {
			return callback.call(this);
		});

		if (!(canTransition && el.css('transition'))) {
			el.trigger(exports.transitionEndEvent);
		}

		return this;
	};

	var exports = {
		animationEndEvent: animationEndEvent,
		transitionEndEvent: transitionEndEvent,

		scrollToTop: function(el, offset, callback) {
			el = el instanceof jQuery ? el.offset().top : 0;
			offset = typeof offset === 'number' ? offset : 0;

			$('html, body, document').stop().animate({
				scrollTop: el + offset
			}, 300, callback);

			return this;
		},

		removeTransitionedClass: function(el, thisClass, callback) {
			el.removeClass(thisClass);
			return triggerTransitionCallback.call(this, el, callback);
		},

		toggleTransitionedClass: function(el, thisClass, callback) {
			el.toggleClass(thisClass);
			return triggerTransitionCallback.call(this, el, callback);
		},

		toggleExpand: function(el, callback) {
			return exports.toggleTransitionedClass.call(this, el, 'is-expanded', callback);
		},

		expand: function(el, callback) {
			el.addClass('is-expanded');
			return triggerTransitionCallback.call(this, el, callback);
		},

		collapse: function(el, callback) {
			el.removeClass('is-expanded');
			return triggerTransitionCallback.call(this, el, callback);
		}
	};

	return exports;
});
