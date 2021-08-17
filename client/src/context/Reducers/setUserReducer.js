export const setUserReducer = (state:any, action:any) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                userDetail: action.payload
            };
        default:
            return state;
    }
}