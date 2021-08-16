export const Reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.errors
            };
        case 'SET_USER':
            return {
                ...state,
                loggedIn: action.payload
            };
        case 'SET_LOADER':
            return {
                ...state,
                loader: action.payload
            };
        default:
            return state;
    }
}