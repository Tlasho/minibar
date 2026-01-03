// Inventory Management System with localStorage
const InventoryManager = {
  // Initialize inventory if not exists
  init() {
    if (!localStorage.getItem('minibarInventory')) {
      localStorage.setItem('minibarInventory', JSON.stringify({}));
    }
  },
  
  // Get all inventory
  getAllInventory() {
    const inventory = localStorage.getItem('minibarInventory');
    return inventory ? JSON.parse(inventory) : {};
  },
  
  // Get inventory for specific room
  getRoomInventory(roomNumber) {
    const allInventory = this.getAllInventory();
    return allInventory[roomNumber] ? allInventory[roomNumber].products : {};
  },
  
  // Update product quantity for a room
  updateProduct(roomNumber, productId, quantity, productName) {
    const allInventory = this.getAllInventory();
    
    // Initialize room if not exists
    if (!allInventory[roomNumber]) {
      allInventory[roomNumber] = {
        roomNumber: roomNumber,
        lastUpdated: new Date().toISOString(),
        products: {}
      };
    }
    
    // Update or add product
    if (quantity === 0) {
      // Remove product if quantity is 0
      delete allInventory[roomNumber].products[productId];
    } else {
      allInventory[roomNumber].products[productId] = {
        id: productId,
        name: productName,
        quantity: quantity,
        lastUpdated: new Date().toISOString()
      };
    }
    
    // Update last updated timestamp
    allInventory[roomNumber].lastUpdated = new Date().toISOString();
    
    // Save to localStorage
    localStorage.setItem('minibarInventory', JSON.stringify(allInventory));
    
    return true;
  },
  
  // Get remaining quantity for a product in a room
  getProductQuantity(roomNumber, productId) {
    const roomInventory = this.getRoomInventory(roomNumber);
    return roomInventory[productId] ? roomInventory[productId].quantity : null;
  },
  
  // Clear all inventory data
  clearAll() {
    localStorage.setItem('minibarInventory', JSON.stringify({}));
    return true;
  },
  
  // Export inventory as JSON
  exportInventory() {
    return this.getAllInventory();
  },
  
  // Import inventory from JSON
  importInventory(jsonData) {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      localStorage.setItem('minibarInventory', JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error importing inventory:', error);
      return false;
    }
  },
  
  // Get summary of taken items by room
  getRoomSummary(roomNumber) {
    const roomInventory = this.getRoomInventory(roomNumber);
    const summary = [];
    
    Object.keys(roomInventory).forEach(productId => {
      const product = roomInventory[productId];
      summary.push({
        name: product.name,
        currentQuantity: product.quantity
      });
    });
    
    return summary;
  }
};

// Initialize inventory on load
InventoryManager.init();

// Export for use in HTML file
window.InventoryManager = InventoryManager;