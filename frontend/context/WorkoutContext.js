import  createContext from 'react';


export const WorkoutContext = createContext()   // create context object

export const WorkoutContextProvider = ({children}) => {  // provider is a component that wraps around the components that need access to the context
 // the children prop represent whatever is inside the provider component
 // here the children prop is the App component
    return (
     <WorkoutContext.Provider>
        
     </WorkoutContext.Provider>
        )
}