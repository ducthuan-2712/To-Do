/* 
 * @flow
 */

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';


export function logInWithFacebook() {
	return async (dispatch) => {
		try {
			const login = {
				id: 100000298886063,
				type: 'facebook',
				name: 'Thuan Huynh Duc',
				email: 'thuanhuynhduc2712@gmail.com',
		        url_team: 235148050,
		        admin_url_team: true
			}

			return dispatch({ 
				type: USER_LOGIN, 
				login
			});
		} catch (error) {
		  console.log(error)
		}
	}
}

export function logOutWithFacebook() {
	return async (dispatch) => {
		return dispatch({ 
			type: USER_LOGOUT
		});
	}
}