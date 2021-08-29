const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const compression = require("compression")
const { Router } = require("express")
const { route } = require("express/lib/router")
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares")
require('express-async-errors')

module.exports = function ({ HomeRoutes }) {
    const router = Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression())

    apiRoutes.use("/home", HomeRoutes)
    router.use("/v1/api", apiRoutes)

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router
}
