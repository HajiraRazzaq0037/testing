import React, {createContext, useReducer} from 'react';
// import {setUserReducer} from './Reducers/setUserReducer';
// import {getDataReducer} from './Reducers/getDataReducer';
import {Reducer} from './Reducers/delDataReducer';
 import {actionsetUserDetail} from './Actions/actionUserDetail';
import {getDataAction} from './Actions/getDataAction';
import {delDataAction} from './Actions/delDataAction';
import {initialState} from './initialState';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (<GlobalContext.Provider value={{
        state: state,
        actionsetUserDetail,
        delDataAction,
        getDataAction,
        dispatch,
        initialState,
        }}>
        {children}
    </GlobalContext.Provider>);
}