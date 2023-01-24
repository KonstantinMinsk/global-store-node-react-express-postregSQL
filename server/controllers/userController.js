const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {
        
    }

    async checkAuth(req, res, next) {
        const { id } = req.query;
        if (!id) {
            return next(ApiError.badRequest('ID is not found'))
        }
        res.status(200).json({ id: id })
    }
}

module.exports = new UserController()