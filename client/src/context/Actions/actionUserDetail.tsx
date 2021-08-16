export const actionsetUserDetail = (dispatch:any) => {
    let loggedIn=localStorage.getItem('logged')
    if(loggedIn){
        dispatch({
            type: 'SET_USER',
            payload: loggedIn
        });
    }
};