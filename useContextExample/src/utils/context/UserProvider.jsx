import { createContext, useState } from "react";


// first create a createContext function instance
export const Context = createContext();


// now create a provider

// as list format
// export function UserProvider({ children }) {
//     const [ count, setCount ] = useState(0);

//     return (
//         <Context.Provider value={[ count, setCount ]}>
//             { children }
//         </Context.Provider>
//     );
// }

// as a object/dictionary format
export function UserProvider({ children }) {
    const [ count, setCount ] = useState(0);
    const contextValue = { count, setCount };

    return (
        <Context.Provider value={ contextValue }>
            { children }
        </Context.Provider>
    );
}
