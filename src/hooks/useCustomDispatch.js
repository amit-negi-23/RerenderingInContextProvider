import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function useCustomDispatch() {
    const { dispatch } = useContext(AppContext);
 
    const usingCustomDispatch = (type, payload) => {
       dispatch({ type: type, payload: payload });
    };
 
    return usingCustomDispatch;
 }