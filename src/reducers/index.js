import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import SelectedBookReducer from './reducer_selectedBook';
const rootReducer = combineReducers({
  books: BooksReducer,
  selectedBook :  SelectedBookReducer
});

export default rootReducer;