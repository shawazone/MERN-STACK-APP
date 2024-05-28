import {AuthContext} from '../context/AuthContext';
import { useContext } from "react";

export const useAtuhContext = () => {
  const context = useContext(AuthContext);
 if (!context ){
  throw Error('useAtuhContext must be used within a AuthContextProvider')
 }
 return context;
};