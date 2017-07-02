/* 
 * @flow
 */

const User = {
	logInWithFacebook() {
		const login = {
			id: null,
			type: 'facebook',
			name: null,
			email: null,
	        url_team: 235148050,
	        admin_url_team: true
		}

		return {
			type: 'USER_LOGIN',
			login
		};
	},
	logOutWithFacebook() {
		return {
			type: 'USER_LOGOUT'
		};
	}
}

export default User