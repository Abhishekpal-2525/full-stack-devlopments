import * as types from "•/Action";
const initialval = {
musicRecords: [], 
isLoading: false, 
isError: null,
};
export const reducer = (oldState = initialval, { type, payload }
switch (type) {
case types. GET_MUSIC_REQUEST:
return {
...o1dState,
isLoading: true,
};

case types. GET_MUSIC_SUCCESS:
return {
...oldState, isLoading: false, musicRecords: payload,
};
case types. GET_MUSIC_FAILURE:
return {
...o1dstate,
isLoading: false,
isError: { msg: true, remark: payload },
};
default:
    return oldstate;
}
};