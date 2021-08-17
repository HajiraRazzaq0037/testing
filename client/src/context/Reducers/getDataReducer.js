export const getDataReducer = (state:any, action:any) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}