const {register: registerActivities} = require("./activities");
const {delay} = require("./timer.helpers");

function inc() {
    return async (dispatch) => {
        await delay(1500);

        dispatch({type: "INC"});
    }
}

function dec() {
    return async (dispatch) => {
        await delay(1500);

        dispatch({type: "DEC"});
    }
}

registerActivities({
    inc,
    dec,
});
