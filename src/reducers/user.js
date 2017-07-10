/* 
 * @flow
 */

import {
  USER_LOGIN,
  USER_LOGOUT
} from '../actions/user';

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
  if (action.type === USER_LOGIN) {
    let {id, name, type, email, url_team, admin_url_team} = action.login;
    return {
      isLoggedIn: true,
      id,
      type,
      name,
      email,
      url_team,
      admin_url_team
    };
  }

  if (action.type === USER_LOGOUT) {
    return initialState
  }

  return state;
}
