const { createContainer, asClass, asValue, asFunction } = require("awilix")

//Config
const config = require("../config")
const app = require('.')

//Services
const { HomeService } = require('../services')

//Controllers
const { HomeController } = require("../controllers")

//Routes
const Routes = require("../routes")
const { HomeRoutes } = require("../routes/index.routes")

//Models
const { UserModel, IdeaModel, CommentModel } = require("../models")

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    })
    .register({
        User: asValue(UserModel),
        Idea: asValue(IdeaModel),
        Comment: asValue(CommentModel)
    })

module.exports = container;