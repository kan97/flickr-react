import { combineReducers } from "redux";
import photos from "./photos";
import tags from './tags'

export default combineReducers({
  photos,
  tags
});
