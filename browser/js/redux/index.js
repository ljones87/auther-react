import { combineReducers } from 'redux';
import users from './users';
import stories from './stories';
import loggedInUser from './loggedInUser';


export default combineReducers({ users, stories, loggedInUser });
