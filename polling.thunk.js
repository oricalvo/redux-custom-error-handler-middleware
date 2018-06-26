const {activities, register: registerActivities} = require("./activities");
const {delay} = require("./timer.helpers");

let timerId = null;

function start() {
    console.log("start");

    return async (dispatch, getState) => {
        async function more() {
            await delay(500);

            const {polling} = getState();
            if(!polling) {
                return;
            }

            await activities.inc();

            timerId = setTimeout(more, 500);
        }

        if(timerId) {
            return;
        }

        await dispatch({type: "SET_POLLING", value: true});

        more();
    }
}

function stop() {
    console.log("stop");

    return async (dispatch, getState) => {
        if(!timerId) {
            return;
        }

        clearTimeout(timerId);
        timerId = null;

        dispatch({type: "SET_POLLING", value: false});
    }
}


registerActivities({
    start,
    stop,
});
