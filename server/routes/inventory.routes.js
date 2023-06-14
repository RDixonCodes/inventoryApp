const InventoryController = require('../controllers/inventory.controller');

module.exports = function(app){
    app.post('/api/inventory/new', InventoryController.createInventory);
    app.get('/api/inventory', InventoryController.getAllInventory);
    app.put('/api/inventory/:id/edit', InventoryController.updateInventory);
    app.delete('/api/inventory/:id/delete', InventoryController.deletInventory);
}