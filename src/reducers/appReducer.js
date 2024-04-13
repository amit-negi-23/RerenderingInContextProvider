const appReducer = (state, action) => {
    // console.log(state)
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state,student:{...state.student, name :action.payload}};
        case 'CHANGE_PHONE':
            return {...state, student:{...state.student, phone: action.payload}};
        default:
            return state;

    }
};

export default appReducer;