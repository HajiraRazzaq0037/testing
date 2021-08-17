import {delService} from '../services/delete'
export const delDataAction = (id:any,data:any,dispatch:any) => {
    delService(id,data,dispatch)
};