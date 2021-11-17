export const userActions = {
	FETCH_USER_SUCCESS: 'fetch user Success',
	USER_LOGOUT: 'user logout',
}

export const fetchUserSuccess = (user) => ({
	type: userActions.FETCH_USER_SUCCESS,
	payload: { user },
});

export const userLogout = () => ({
	type: userActions.USER_LOGOUT,
});
