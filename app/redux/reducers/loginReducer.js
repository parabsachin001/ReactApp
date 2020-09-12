const initialState = {
    userStatus: {
        status: false
    }
}

const LoginReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'SET_LOGGIN_STATUS':
            console.log(action, 'action');
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