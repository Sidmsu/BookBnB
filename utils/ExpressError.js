class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusaCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;


//expresserror.js//
