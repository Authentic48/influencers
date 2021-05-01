import axios from "axios";
import {
  CREATE_ORDER_ERROR,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  OPEN_ORDER,
} from "./orderTypes";

export const createOrder = (values) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });
    const {
      auth: { currentUser },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${currentUser.token}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/orders/create", values, config);
    console.log(data);
    dispatch({ type: CREATE_ORDER_SUCCESS });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const openOrder = (values) => ({
  type: OPEN_ORDER,
  payload: values,
});
