const {store} = require ("./store");
const {activities} = require("./activities");
require("./counter.thunk");
require("./polling.thunk");

main();

async function main() {
    activities.start();

    (function() {
        let {counter: lastCounter} = store.getState();
        store.subscribe(function () {
            const {counter} = store.getState();
            if(counter != lastCounter) {
                console.log("CHANGED: " + counter);
                lastCounter = counter;
            }
        });
    })();

    setTimeout(function() {
        activities.stop();
    }, 5500);
}
