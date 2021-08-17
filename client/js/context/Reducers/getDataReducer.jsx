export const getDataReducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};
//# sourceMappingURL=getDataReducer.jsx.map