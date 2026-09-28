 (function () {

	// Allow admin users full access
	if (gs.hasRole('admin')) {
		return true;
	}

	// Allow users with the bb1 role
	if (gs.hasRole('bb1')) {
		return true;
	}

	// Deny everyone else
	return false;

})();
