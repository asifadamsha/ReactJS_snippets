import jsonPlaceHolder from "../API/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUsers = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/users");
  dispatch({
    type: "FETCH_USERS",
    payload: response
  });
};
