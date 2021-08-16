import { getApiUrI } from '../../config';
export const delService = function (id:any,data:any,dispatch:any) {
    return fetch(`${getApiUrI}/${id}`,{
        method:'DELETE'
    }).then(() =>
        dispatch({
            type: 'GET_DATA',
            payload: data
        })
    )
};