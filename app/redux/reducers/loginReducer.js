const initialState = {
    userStatus: {
        status: true
    }
}

const LoginReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'SET_LOGGIN_STATUS':
            return {
                ...state,
                userStatus: {
                    ...state.userStatus,
                    status: action.payload
                }
            };
            break;
        default:
            return state;
    }
}

export default LoginReducer;