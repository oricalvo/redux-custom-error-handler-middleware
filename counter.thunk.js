const {register: registerActivities} = require("./activities");

function inc() {
    return async (dispatch) => {
        dispatch({type: "INC"});
    }
}

function dec() {
    return async (dispatch) => {
        dispatch({type: "DEC"});
    }
}

registerActivities({
    inc,
    dec,
});
