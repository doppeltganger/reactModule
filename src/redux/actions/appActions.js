export const appActions = {
	SHOW_MODAL: 'show modal window',
	SHOW_SNACKBAR: 'open alert snackbar',
	SHOW_ALERT: 'open alert snackbar',
	HIDE_ALERT: 'hide alert snackbar',
	SHOW_LOADER: 'show loader',
	HIDE_LOADER: 'hide loader',
}

const showModalWindow = () => ({
	type: appActions.SHOW_MODAL,
});

const showSnackbar = () => ({
	type: appActions.SHOW_SNACKBAR,
});

const showAlert = (error) => ({
	type: appActions.SHOW_ALERT,
	payload: { error },
});

const hideAlert = (error) => ({
	type: appActions.HIDE_ALERT,
	payload: { error },
});

const showLoader = () => ({
	type: appActions.SHOW_LOADER,
});

const hideLoader = () => ({
	type: appActions.HIDE_LOADER,
});

export const appFunctions = {
	showModalWindow,
	showSnackbar,
	showAlert,
	hideAlert,
	showLoader,
	hideLoader,
}
