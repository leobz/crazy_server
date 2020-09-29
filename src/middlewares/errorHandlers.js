'use strict'

function authError(res, msg) {
    res.status(403).send({ msg: "Authorization error: " + msg });
}

module.exports = { authError }