const {store} = require ("./store");
const {activities} = require("./activities");
require("./counter.thunk");
require("./polling.thunk");

main();

async function main() {
    activities.start();

    store.subscribe(function() {
        console.log("CHANGED: " + store.getState().counter);
    });

    setTimeout(function() {
        activities.stop();
    }, 5000);
}
