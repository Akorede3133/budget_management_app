import { nanoid } from "nanoid";
export interface stateProp {
    type: string;
    text: string;
    amount: string;
    income: listProp[];
    incomeStorage: listProp[];
    expenseStorage: listProp[];
    expense: listProp[];
}
export interface listProp {
    desc: string;
    id: string;
    amount: number;
}
export type inputTargetProp = {
    type: string;
    payLoad: React.ChangeEvent<HTMLInputElement>
}
export type formProp  = {
    type: string;
    payLoad: React.FormEvent<HTMLFormElement>;
}
export type selectProp  = {
    type: string;
    payLoad:  React.ChangeEvent<HTMLSelectElement>;
}
export type removeItemPayLoadProp = {
    id: string;
    type: string;
}
export type removeItemProp =  {
    type: string;
    payLoad?: removeItemPayLoadProp;
}
export type actionProp = any;

export const reducer = (state: stateProp, action: actionProp) => {
    switch(action.type) {
        case "HANDLE_TEXT":
            return {...state, text: action.payLoad.target.value}
        case "HANDLE_AMOUNT":
            return {...state, amount: action.payLoad.target.value}
        case "HANDLE_SELECT":
            return {...state, type: action.payLoad.target.value}
        case "HANDLE_SUBMIT":
            action.payLoad.preventDefault();
            if (state.text.length < 3 || state.amount.length == 0) {
                alert ('Please add description and valid dollar amount before submitting.')
                return state;
            } else {
                const newobJ: listProp = {
                    desc: state.text,
                    id: nanoid(),
                    amount: +state.amount
                }            
                const newExpense = [...state.expense, newobJ];
                const newIncome = [...state.income, newobJ];
                if(state.type === 'income') {
                    localStorage.setItem('incomeList', JSON.stringify(newIncome));
                    return {...state, income:  newIncome, amount: '', text: ''};
 
                } else {
                    localStorage.setItem('expenseList', JSON.stringify(newExpense));
                    return {...state, expense: newExpense, amount: '', text: ''};
                }
            }
        case "REMOVE_ITEM":
            if (action.payLoad.type === 'incomeList') {
                const newList = state.income.filter(item => {
                    return item.id !== action.payLoad.id
                })
                localStorage.setItem('incomeList', JSON.stringify(newList));
                return {...state, income: newList}
            } else {
                const newList = state.expense.filter(item => {
                    return item.id !== action.payLoad.id
                })
                localStorage.setItem('expenseList', JSON.stringify(newList));
                return {...state, expense: newList}
            }
        case "HANDLE_STORAGE":
            return {...state, income: state.incomeStorage, expense: state.expenseStorage}
        default:
            return state;
    }
}