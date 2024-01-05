import  {createContext,useReducer} from 'react';


export const WorkoutContext = createContext()   // create context object

export const workoutsReducer = (state, action) => {
    switch (action.type ){
      case 'SET_WORKOUTS' :
        return {
            workouts: action.payload // action.payload is the workouts array
        }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
            case 'UPDATE_WORKOUT':
                return {
                    workouts: action.payload 
                };
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((workout) => workout._id !== action.payload._id) 
            }    
        default: 
            return state    
    }
}

export const WorkoutContextProvider = ({children}) => {  // provider is a component that wraps around the components that need access to the context
 // the children prop represent whatever is inside the provider component
 // here the children prop is the App component

 const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
 })
    return (

     <WorkoutContext.Provider value={{...state, dispatch}}>
         {children}
     </WorkoutContext.Provider>
        )
}