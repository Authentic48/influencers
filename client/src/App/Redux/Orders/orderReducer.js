import {
  CREATE_ORDER_ERROR,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  OPEN_ORDER,
} from "./orderTypes";

const initialState = {
  success: false,
  loading: false,
  error: false,
  values: null,
};

export const CreateOrderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_ORDER:
      return { values: payload };
    case CREATE_ORDER_REQUEST:
      return { loading: true };
    case CREATE_ORDER_SUCCESS:
      return { loading: false, success: true };
    case CREATE_ORDER_ERROR:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
