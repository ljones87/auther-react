import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const SET_CURRENT_USER = 'SET_CURRENT_USER';


/* ------------   ACTION CREATORS     ------------------ */

const login = setUser => ({ type: SET_CURRENT_USER, setUser});


/* ------------       REDUCER     ------------------ */

export default function reducer (loggedInUser = {}, action) {
  switch (action.type) {

  case SET_CURRENT_USER:
      return Object.assign({},loggedInUser, action.setUser);
  default:
    return loggedInUser;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const confirmIdentity = (email, password) => dispatch => {
  axios.post('/login', {email, password})
  .then(res => res.data)
  .then(user => dispatch(login(user)))
  .catch(err => console.error('go away loser', err));
};
