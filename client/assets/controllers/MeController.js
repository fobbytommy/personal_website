/*** this is controller for 3 partials: me.html, resume.html, contact.html ***/
app.controller('MeController', ['$scope', '$cookies', 'Flash', function($scope, $cookies, Flash) {
	$scope.login_status = false; // default to display 'logout' button

	// immediate function to check login status
	(function() {
		// if cookie does exist, display 'login' button
		// also save username and authority_level for use
		if ($cookies.get('username') != undefined) {
			$scope.login_status = true;
			$scope.username = $cookies.get('username');
			$scope.authority_level = $cookies.get('authority_level');
		}
	})();

	// for CERCA TROVA hovering effect!
	$scope.showMeaning = false;
	$scope.hoverInCerca = function() {
		$scope.showMeaning = true;
		$scope.stylePhoto = {
			'border': '8px groove rgba(255, 202, 81, 0.7)',
		};
	};

	$scope.hoverOutMeaning = function() {
		$scope.showMeaning = false;
		$scope.stylePhoto = {};
	};
	// end of CERCA TROVA hovering effect

	// for styling the 'references...' and 3 stars
	// on hovering the buttons
	$scope.styleReference = function () {
		$scope.referenceStyle = {
			'color': 'rgba(219, 168, 65, 0.9)'
		};
	};
	$scope.unstyleReference = function () {
		$scope.referenceStyle = {};
	};
	// end of hovering effect for the references and 3 stars

	// store user's current page. this is for login and back to current page
	$scope.currentPage = function(currentPage) {
		$cookies.put("currentPage", currentPage);
	};

	// logout function which removes the cookies and display message
	$scope.logout = function() {
		$cookies.remove("username");
		$cookies.remove("authority_level");
		$scope.username = {}; // clear username variable
		$scope.login_status = false; // login status is now off
		Flash.clear(); // clear flash before putting new flash
		Flash.create("success", "You have successfully logged out!", 4000, {}, true);
	};

}]);
