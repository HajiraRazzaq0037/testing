export const actionsetUserDetail = (dispatch) => {
    let loggedIn = localStorage.getItem('logged');
    if (loggedIn) {
        dispatch({
            type: 'SET_USER',
            payload: loggedIn
        });
    }
};
//# sourceMappingURL=actionUserDetail.jsx.map