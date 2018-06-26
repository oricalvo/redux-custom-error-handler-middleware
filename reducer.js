function reducer(state, action) {
    if(action.type == "INC") {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }

    if(action.type == "DEC") {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }

    if(action.type == "SET_POLLING") {
        return {
            ...state,
            polling: action.value,
        }
    }

    return state;
}

module.exports = {
    reducer,
};
