//  import { getApiUrI } from '../../config';
import {getService} from '../services/get'
export const getDataAction = (dispatch:any) => {
    getService(dispatch);
};