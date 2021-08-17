export const setUserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                userDetail: action.payload
            };
        default:
            return state;
    }
};
//# sourceMappingURL=setUserReducer.jsx.map