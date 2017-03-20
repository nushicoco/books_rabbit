import { combineReducers } from 'redux';
import BooksReducer from '../reducers/reducer_books_list';

const rootReducer = combineReducers({
  // state: (state = {}) => state
    books: BooksReducer
});

export default rootReducer;
