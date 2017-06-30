/* 
 * @flow
 */

const initialState = {
	isLoggedIn: false,
	id: null,
	name: null,
	email: null
};

export default function user(state = initialState, action) {
  if (action.type === 'USER_LOGIN') {
    return action.login;
  }

  if (action.type === 'USER_LOGOUT') {
    return action.logout;
  }

  return state;
}
