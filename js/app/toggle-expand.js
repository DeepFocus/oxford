define(['jquery', 'app/effects'], function($, Effects) {

	var thisEl = $('.js-toggle-expand');

	var exports = {
		el: thisEl,

		init: function() {

			thisEl.on('click', function(e) {
				var captured = $(this);

				e.preventDefault();
				Effects.toggleExpand(captured.closest('.js-can-expand'));
			});

			return this;
		}
	};

	return exports;
});
