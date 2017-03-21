import { combineReducers } from 'redux';
import BooksReducer from '../reducers/reducer_books_list';
import UserNameReducer from '../reducers/reducer_userName';

const rootReducer = combineReducers({
  // state: (state = {}) => state
    books: BooksReducer,
    userName:UserNameReducer
});

export default rootReducer;
