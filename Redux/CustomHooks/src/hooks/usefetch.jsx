const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

const initialValue = {
  data: [],
  isLoading: false,
  isError: false,
};

const Reducer = (oldState = initialValue, { type, payload }) => {
  switch (type) {

    case FETCH_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };

    case FETCH_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        data: [...oldState.data, payload],
      };

    case FETCH_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    default:
      return oldState;
  }
};

export default Reducer;