const inventory = require('../models/inventory.model');

module.exports.createInventory = (req, res) => {
    const {type, productName, expDate, expired} = req.body
    inventory.create({type, productName, expDate, expired})
    .then(inventory => res.json(inventory))
    .catch(err => res.status(400).json(err));
};

module.exports.getAllInventory = (req, res) => {
    inventory.find({}).sort({type:'ascending'})
    .then(inventory => res.json(inventory))
    .catch(err => res.json(err));
};

module.exports.updateInventory = (req, res) => {
    inventory.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updateInventory => res.json(updateInventory))
    .catch(err => res.status(400).json(err));
}

module.exports.deletInventory = (req, res) => {
    inventory.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => json(err));
}
