import { ADD_LIKE, DELETE_POST, GET_POSTS } from "../actions/post.action";
import { ADD_POST } from "../actions/post.action";
import { EDIT_POST } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
      case GET_POSTS:
        return action.payload;
      case ADD_POST:
        return [action.payload, ...state];
      case EDIT_POST:
        return state.map((post) => {
          if(post.id === action.payload.id){
            return {
              ...post,
              content: action.payload.content
            }
          } else return post
        });
      case DELETE_POST:
        return state.filter((post) => post.id !== action.payload.postId);
      case ADD_LIKE:
        return state.map((post) => {
          if(post.id === action.payload.id){
            return {
              ...post,
              likes: action.payload.likes
            }
          } else return post
        });
      default:
        return state;
  }
}
