import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  return async (dispatch, getState) => {
    dispatch(loginStart());
    try {
      const res = await axios.post("auth/login", user);
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailure());
    }
  }
};
