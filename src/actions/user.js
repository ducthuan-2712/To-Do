/* 
 * @flow
 */

const User = {
	logInWithFacebook() {
		const login = {
			isLoggedIn: true,
			id: null,
			name: null,
			email: null
		}

		return {
			type: 'USER_LOGIN',
			login,
		};
	},
	logOutWithFacebook() {
		const logout = {
			isLoggedIn: false,
			id: null,
			name: null,
			email: null
		}

		return {
			type: 'USER_LOGOUT',
			logout,
		};
	}
}

export default User