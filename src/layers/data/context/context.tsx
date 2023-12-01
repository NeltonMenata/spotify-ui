import { createContext, useState } from "react"

type ContextProps = {
    value: number,
    incrementar: () => void,
    decrementar: () => void
}

const ContextProvider = createContext({} as ContextProps);
export default ContextProvider


export function ContadorContext(props: any) {
    const [value, setValue] = useState(0);

    function incrementar(){
        setValue((value)=>value+1)
    }

    
    function decrementar(){
        setValue((value)=>value-1)
    }
    return (<ContextProvider.Provider value={{value, incrementar, decrementar}}>
        {
            props.children
        }
    </ContextProvider.Provider>)

}