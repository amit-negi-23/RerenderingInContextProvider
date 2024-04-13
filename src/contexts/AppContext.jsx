import { createContext, useReducer } from "react";
import appReducer from "../reducers/appReducer";

const initialState = {
    student: {
        name: "Amit Negi",
        phone: 9528594371
    }
}
const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider }