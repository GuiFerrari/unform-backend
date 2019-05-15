const Box = require('../models/Box');

class BoxController {
    async show(req, res) {
        const box = await Box.find().sort({ _id: -1 });
        return res.json(box);
    }

    async store(req, res) {
        const box = await Box.create({ title: req.body.title, description: req.body.description })
        return res.json(box);
    }

    async remove(req, res) {
        const box = await Box.findByIdAndRemove(req.params.id);
        return res.json(box);
    }
}

module.exports = new BoxController();