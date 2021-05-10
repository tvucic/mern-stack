import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// Action creators are functions that returns action
export const getPosts = () => async (dispatch) => {
    try {
        /*
            First we are getting response object, and in it we
            have data object
            const response = await api.fetchPosts();
        */
        const { data } = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

/*
    const action = {type: 'FETCH_ALL', payload:[]}
    dispatch(action);
*/

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type:CREATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      console.log(data);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };