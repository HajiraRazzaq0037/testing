import { getApiUrI } from '../../config';
export const getService =async function (dispatch:any) {
    return await fetch(getApiUrI)
        .then(response => response.json())
        .then(data =>{
            dispatch({
                type: 'GET_DATA',
                payload: data,
            })
        })
        .catch((err) => {
            dispatch({
                type: 'SET_ERROR',
                errors: err,
            })
        })
        .finally(() => {
            dispatch({
                type: 'SET_LOADER',
                loader: false,
            })
        })

};