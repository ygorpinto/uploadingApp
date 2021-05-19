import { createContext, useReducer } from "react";

const initialState = {
    files:[]
};

function reducer(state, action) {
    switch (action.type) {
      case 'setFiles':
        return {
            ...state,
            files:action.payload
        };
      default:
        throw new Error('must be a action type');
    }
  }

export const AllContext = createContext({});

const AllContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AllContext.Provider
        value={{
            state,
            dispatch
        }}
        >
            {children}
        </AllContext.Provider>
    )
}

export default AllContextProvider;