const {activities, register: registerActivities} = require("./activities");

function start() {
    console.log("start");

    return dispatch => {
        function more() {
            process();

            const timerId = setTimeout(more, 1000);
            dispatch({type: "SET_TIMER_ID", timerId});
        }
    }
}

function process() {
    activities.inc();
}

function stop() {
    console.log("stop");

    return async (dispatch, getState) => {
        const {timerId} = getState();
        if(timerId) {
            clearInterval(timerId);

            dispatch({type: "SET_TIMER_ID", timerId: null});
        }
    }
}

registerActivities({
    start,
    stop,
});
