/* eslint-disable no-case-declarations */
import React, {useContext, createContext, useReducer} from "react";
import { reducer, stateProp } from "./reducer";
interface childrenProp {
    children: React.ReactNode;
}
interface contextProp {
    state: stateProp;
    handleTextChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleAmount(e: React.ChangeEvent<HTMLInputElement>): void;
    handleSelect(e: React.ChangeEvent<HTMLSelectElement>): void;
    handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
    removeItem(id: string, type: string): void;
    handleStorage(): void;
}

const initialState: stateProp = {
    type: 'income',
    text: '',
    amount: '',
    income: [],
    expenseStorage: localStorage.getItem('expenseList') ? JSON.parse(localStorage.getItem('expenseList') || '') : [],
    incomeStorage: localStorage.getItem('incomeList') ? JSON.parse(localStorage.getItem('incomeList') || '') : [],
    expense: [],
}

const AppContext = createContext({} as contextProp);
const AppGlobalProvider = ({children}: childrenProp) => {
    const [state, dispatch] = useReducer(reducer, initialState)   
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'HANDLE_TEXT', payLoad: e})
    }
    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'HANDLE_AMOUNT', payLoad: e})
    }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'HANDLE_SELECT', payLoad: e})
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        dispatch({type: 'HANDLE_SUBMIT', payLoad: e})
    }
    const removeItem = (id: string, type: string) => {
        dispatch({type: 'REMOVE_ITEM', payLoad: {id, type}})
    }
    const handleStorage = () => {
        dispatch({type: 'HANDLE_STORAGE'})
    }
    return <AppContext.Provider value={{
        state,
        handleTextChange,
        handleAmount,
        handleSelect,
        handleSubmit,
        removeItem,
        handleStorage
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}
export { useGlobalContext, AppGlobalProvider }