const {store} = require ("./store");

const activities = {
    inc: null,
    dec: null,
    start: null,
    stop: null,
};

function register(map) {
    for(const name in map) {
        if(activities[name]) {
            throw new Error("Activity with name " + name + " is already registered");
        }

        activities[name] = function() {
            const activity = map[name];
            return store.dispatch(activity.apply(this, arguments));
        }
    }
}

module.exports = {
    activities,
    register,
};
