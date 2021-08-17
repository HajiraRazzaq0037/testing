import { getApiUrI } from '../../config';
export const delService = function (id, data, dispatch) {
    return fetch(`${getApiUrI}/${id}`, {
        method: 'DELETE'
    }).then(() => dispatch({
        type: 'GET_DATA',
        payload: data
    }));
};
//# sourceMappingURL=delete.jsx.map