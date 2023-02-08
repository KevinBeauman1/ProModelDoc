$(function () {
	var helpContainer = $('#helpContainer');
	var arrayData = decodeURIComponent($(location).attr('href')).split('?');
	var parameters = arrayData[arrayData.length - 1];
	var parametersArray = parameters.split("&");

	var lastPage = "";

	for (var i = 0; i < parametersArray.length; i++) {
		var parameterTokens = parametersArray[i].split("=");
		if (parameterTokens[0].toLowerCase() == "page") {
			lastPage = encodeURIComponent(parameterTokens[1]);
		}
	}

	var openedClass = 'far fa-minus-square ';
	var closedClass = 'far fa-plus-square ';

	// Initialize the behavior of the tree and its nodes
	var tree = $('#helpTree');
	tree.addClass("tree");
	tree.find('li').has("ul").each(function () {
		var branch = $(this); //li with children ul

		var span = branch.children("span:first");
		span.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");

		span.addClass('branch');
		span.on('click', function (e) {
			var icon = $(this).children('i:first');
			icon.toggleClass(openedClass + " " + closedClass);
			$(this).parent().children("ul:first").toggle();
		});
		branch.children("ul:first").toggle();
	});

	// Save the position of the scrolling, so we can restore it after the page load.
	tree.find('.nav-link').each(function () {
		$(this).on('click', function (e) {
			localStorage.setItem("scrollPosition", helpContainer.scrollTop().toString());
		});
	});

	// Expand the nodes for the path from the URL  TODO: Persist this based on some localStorage save.
	var searchString = "a[href*=\"" + lastPage + "\"]";
	var topicLink = $(searchString);
	topicLink.addClass("node-selected");

	topicLink.parents('li').each(function() {
		$(this).children("ul:first").show();
		var icon = $(this).children('span').children("i");
		icon.toggleClass(openedClass + " " + closedClass);
	});

	// The entire tree is hidden by default while we manipulate the DOM, and then we show it.
	$('#helpTree').removeClass('d-none');

	// Try to scroll to the best position.
	if (localStorage.getItem("scrollPosition")) {
		helpContainer.scrollTop(parseInt(localStorage.getItem("scrollPosition")));
	} else if (topicLink.length > 0) {
		// Scroll to the linked topic using animation.
		helpContainer.animate({
			scrollTop: topicLink.offset().top - helpContainer.offset().top + helpContainer.scrollTop()
		});
	}

	$('#hamburger').click(toggleHelpMenu);
	$('#overlay').click(closeHelpMenu);
});

function toggleHelpMenu() {
	var helpMenu = document.getElementById("helpContainer");
	var helpMenuDisplay = helpMenu.style.display;

	if (helpMenuDisplay === "none" || helpMenuDisplay === "") {
		helpMenu.style.display = "block";
	}
	else {
		helpMenu.style.display = "none";
	}
}

function closeHelpMenu() {
	var helpMenu = document.getElementById("helpContainer");
	helpMenu.style.display = "none";
}