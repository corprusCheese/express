class ItemController {
    index(req, res, next) {
        res.send('items');
    }

    create = function (req, res, next) {
        res.send('create');
    }

    update = function (req, res, next) {
        res.send('update');
    }

    delete = function (req, res, next) {
        res.send('delete');
    }

    filter = function (req, res, next) {
        res.send('filter');
    }
}

const itemController = new ItemController();

module.exports = itemController;