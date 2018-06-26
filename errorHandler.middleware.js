const errorHandler = store => next => action => {
    try {
        const retVal = next(action);

        if(retVal && retVal.then) {
            return retVal.catch(onError);
        }

        return retVal;
    } catch (err) {
        onError(err);
    }
}

function onError(err) {
    console.log("ERROR: ", err);
}

module.exports = {
    errorHandler,
};
