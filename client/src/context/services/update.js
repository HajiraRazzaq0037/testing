import { getApiUrI } from '../../config'
export const updateService = function (id: any, data: any, dispatch: any) {
  fetch(`${getApiUrI}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'test'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: 'GET_DATA',
        payload: data
      })
    })
}
