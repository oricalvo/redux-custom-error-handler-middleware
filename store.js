const {createStore, applyMiddleware} = require ("redux");
const thunk = require ("redux-thunk").default;
const {errorHandler} = require("./errorHandler.middleware");
const {reducer} = require("./reducer");

const initialState = {
    counter: 0,
    timerId: null,
};

const store = createStore(reducer, initialState, applyMiddleware(errorHandler, thunk));

module.exports = {
    store,
};
