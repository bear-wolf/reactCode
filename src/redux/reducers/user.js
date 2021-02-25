import {
    AUTH_SUCCESS,
    AUTH_ERROR
} from './../constans/user';

const initialState = {
    auth: {
        success: {},
        error: ''
    }
};


export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                auth: {
                    success: action.payload.data,
                    error: '',
                },
            };

        case AUTH_ERROR:
            return {
                ...state,
                auth: {
                    success: {},
                    error: action.payload.response.data.message,
                },
            };

        default:
            return state;
    }
};
