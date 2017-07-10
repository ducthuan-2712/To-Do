/* 
 * @flow
 */

import {
  FETCH_LOADING,
  ALL_LOADING
} from '../actions/loading';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';


export function logInWithFacebook() {
	return async (dispatch) => {
		// load done data
		dispatch({ type: FETCH_LOADING });

		try {
			const login = {
				id: 100000298886063,
				type: 'facebook',
				name: 'Thuan Huynh Duc',
				email: 'thuanhuynhduc2712@gmail.com',
		        url_team: 235148050,
		        admin_url_team: true
			}

			// load done data
			dispatch({ type: ALL_LOADING });

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