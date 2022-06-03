import { createContext, useReducer } from "react";

export const TodoContext = createContext();

    export const TodoProvider = ({children}) => {

        const reducer = (state, action) => {
            switch(action.type){
                case "ADD_TODO" : {
                    return [...state, action.payload];
                }
                case "REMOVE_TODO" : {
                        return state.filter((todo)=> todo.id !== action.payload)
                }
                case "TOGGLE_TODO" : {
                    return state.map((todo)=> {
                        if ( todo.id === action.payload) {
                            return {...todo, status : !todo.status}
                        }
                        return todo;
                    });
                }
                default : {
                    return state;
                }
            }
        }
        const [state, dispatch] = useReducer(reducer, [] );

    return <TodoContext.Provider value={{state, dispatch}}>{children}</TodoContext.Provider>
}
