import { combineReducers } from "redux";
import photos from "./photos";
import tags from './tag'

export default combineReducers({
  photos,
  tags
});
