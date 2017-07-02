/* 
 * @flow
 */

const initialState = {
	isLoggedIn: false,
	id: null,
  type: null,
  name: null,
  email: null,
  url_team: null,
  admin_url_team: false
};

export default function user(state = initialState, action) {
  if (action.type === 'USER_LOGIN') {
    let {id, name, type, email} = action.login;
    return {
      isLoggedIn: true,
      id,
      name,
      email,
      type
    };
  }

  if (action.type === 'USER_LOGOUT') {
    return initialState
  }

  return state;
}
