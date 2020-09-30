'use strict'

function authError(res, msg) {
    res.status(403).send({ message: "Authorization error: " + msg });
}

function internalError(res, msg) {
    res.status(403).send({ message: msg });
}

function notFoundError(res, msg) {
    res.status(404).send({ message: msg });
}

module.exports = { authError, internalError, notFoundError}