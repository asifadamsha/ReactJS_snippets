import jsonPlaceHolder from "../API/jsonPlaceHolder";
import _ from "lodash";

// return a function as an action (redux-thunk)
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // lodash chaining

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(userId => dispatch(fetchUser(userId)))
    .value();

  /* 
    // same as chaine

    const userIds = _.uniq(_.map(getState().posts, "userId"));
    
    userIds.forEach(userId => {
      dispatch(fetchUser(userId));
    }); */

  /* 
  // with async waiting

  await Promise.all(
    userIds.map(userId => {
      return dispatch(fetchUser(userId));
    })
  );

  console.log(getState().users); */
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${userId}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};
