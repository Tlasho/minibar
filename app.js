// DOM Elements
const loginScreen = document.getElementById("loginScreen");
const roomInput = document.getElementById("roomInput");
const loginButton = document.getElementById("loginButton");
const errorMessage = document.getElementById("errorMessage");
const centerContainer = document.getElementById("centerContainer");
const bar = document.getElementById("bar");
const backArrow = document.getElementById("backArrow");
const shelfBackground = document.getElementById("shelfBackground");
const productsContainer = document.getElementById("productsContainer");
const roomDisplay = document.getElementById("roomDisplay");
const roomNumberDisplay = document.getElementById("roomNumberDisplay");
const casinoBadge = document.getElementById("casinoBadge");
const doneButton = document.getElementById("doneButton");
const settingsMenu = document.getElementById("settingsMenu");
const settingsButton = document.getElementById("settingsButton");
const settingsPanel = document.getElementById("settingsPanel");
const viewInventory = document.getElementById("viewInventory");
const clearAll = document.getElementById("clearAll");
const inventorySummary = document.getElementById("inventorySummary");

// Casino room numbers
const casinoRooms = [103, 105, 112, 203, 205, 212, 313];
const casinoRangeStart = 401;
const casinoRangeEnd = 410;

// Room validation ranges
const validRanges = [
  { start: 101, end: 124 },
  { start: 201, end: 224 },
  { start: 301, end: 324 },
  { start: 401, end: 410 }
];

// PRODUCTS DATA with max counts (0-2 for water/heineken/campa, 0-3 for rafaelo, 0-1 for others)
const baseProducts = {
  'above': [
    { id: 1, name: "Cola", image: "https://product.hstatic.net/1000282430/product/nuoc-ngot-coca-cola-nhat-500ml_f61289e9a50d41398d9711800846f9b0_grande.jpg", maxCount: 1 },
    { id: 2, name: "Redbull", image: "https://images.europroduct.ge/prod/7d1a791158/9a46837c83b04917aa53b2e5af25aed2_90376504.jpg?w=580", maxCount: 1 },
    { id: 3, name: "Chips", image: "https://m.media-amazon.com/images/I/61w6Gc8ox6L.jpg", maxCount: 1 },
    { id: 4, name: "Nuts", image: "https://cdn.2nabiji.ge/products/mitsis-thkhili-ola-mokhaluli-mariliani-300x300.webp", maxCount: 1 },
    { id: 5, name: "Honey", image: "https://www.trubeehoney.com/cdn/shop/products/MINI_1024x1024.jpg?v=1620842945", maxCount: 1 },
  ],
  
  'below': [
    { id: 7, name: "Water", image: "https://www.aversi.ge/uploads/matimg/293a37597e5b2ad1120984e131d7e82a.jpg", maxCount: 2 },
    { id: 8, name: "Heineken", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFQEReT42FKmj-5xxd6fmHEZhzop7IYXzsw&s", maxCount: 2 },
    { id: 9, name: "Fruit Juice", image: "https://nikorasupermarket.ge/modules/current_promotions/uploads/16794.png", maxCount: 1 },
    { id: 10, name: "Campa", image: "https://imagedelivery.net/d_EE26O5eWcJDRYn-qMBOg/3084d5f4-c3ec-40f4-05f5-c31c8cda5200/public", maxCount: 2 },
    { id: 11, name: "Tsinandali", image: "https://8000vintages.ge/images/thumbnails/1200/1800/detailed/18/keburia_tsinandali_2022.png", maxCount: 1 },
    { id: 12, name: "Khvanchkara", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcYIQbB-ZZSjivKhrV9qU3yTMucHdBEobAg&s", maxCount: 1 },
    { id: 13, name: "Saperavi", image: "https://8000vintages.ge/images/thumbnails/1200/1800/detailed/18/keburia_saperavi_2022.png", maxCount: 1 },
    { id: 14, name: "Chacha", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1a0_3_lMeP_ps2j3oViU4CPpWHBrTlsiIHA&s", maxCount: 1 },
  ],

  'door-1': [
    { id: 30, name: "M&M", image: "https://kcc.org.hk/wp-content/uploads/2023/09/MM20Chocolate20Peanut2037g.jpg", maxCount: 1 },
    { id: 31, name: "Rafaelo", image: "https://www.axonprofil.de/static/items/520/17264_1.jpg", maxCount: 3 },
    { id: 32, name: "Snickers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWZJpdqkpCmCBkEby1N1Sh0PeYbFvI8f7Ag&s", maxCount: 1 }
  ],
  
  'door-2': [
    { id: 40, name: "Jameson", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDOSSfqZfk056iMhz4Td1WpL6cglxeq9mLQ&s", maxCount: 1 },
    { id: 41, name: "Finlandia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FeIzqvdhrRBCn1h18oijS9aurvuXndz7nA&s", maxCount: 1 },
    { id: 42, name: "Johnnie Walker", image: "https://www.raschvin.com/wp-content/uploads/2022/05/rSL000843.jpg", maxCount: 1 },
    { id: 43, name: "Henessy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tipPf_0i53dVnnKwP0p2LwCVBHmlNwcbhg&s", maxCount: 1 },
    { id: 44, name: "Jack Daniels", image: "https://www.cebooze.com/app/uploads/2021/08/Jack-Daniel-Mini.jpg", maxCount: 1 },
    { id: 45, name: "Sarajishvili", image: "https://www.raschvin.com/wp-content/uploads/2022/05/rSL000843.jpg", maxCount: 1 },
  ]
};

// Casino-specific products
const casinoExtraProducts = {
  'below': [
    { id: 15, name: "Premium Champagne", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=500&fit=crop", maxCount: 1 }
  ],
  
  'door-2': [
    { id: 46, name: "Premium Cognac", image: "https://images.unsplash.com/photo-1576669801957-fdf6c7c2a4d5?w=400&h=500&fit=crop", maxCount: 1 }
  ]
};

// Current state
let currentRoom = null;
let isCasinoRoom = false;
let currentShelfId = null;
let areProductsOpen = false;

// FUNCTIONS
function validateRoomNumber(roomNumber) {
  const roomNum = parseInt(roomNumber);
  
  if (isNaN(roomNum) || roomNumber.length !== 3) {
    return false;
  }
  
  for (const range of validRanges) {
    if (roomNum >= range.start && roomNum <= range.end) {
      return true;
    }
  }
  
  return false;
}

function isCasinoRoomNumber(roomNumber) {
  const roomNum = parseInt(roomNumber);
  
  if (casinoRooms.includes(roomNum)) {
    return true;
  }
  
  if (roomNum >= casinoRangeStart && roomNum <= casinoRangeEnd) {
    return true;
  }
  
  return false;
}

function getProductsForRoom(roomNumber, shelfId) {
  const isCasino = isCasinoRoomNumber(roomNumber);
  let products = [...(baseProducts[shelfId] || [])];
  
  if (isCasino && casinoExtraProducts[shelfId]) {
    products = [...products, ...casinoExtraProducts[shelfId]];
  }
  
  return products;
}

function showProducts(shelfId) {
  productsContainer.innerHTML = '';
  currentShelfId = shelfId;
  
  const products = getProductsForRoom(currentRoom, shelfId);
  
  if (products && products.length > 0) {
    products.forEach(product => {
      const productElement = createProductElement(product);
      productsContainer.appendChild(productElement);
    });
    
    doneButton.classList.add('show');
  } else {
    productsContainer.innerHTML = `
      <div class="product">
        <div class="product-name">No products</div>
        <div class="product-image" style="height: 100px; display: flex; align-items: center; justify-content: center; color: #64748b;">
          Empty shelf
        </div>
      </div>
    `;
    doneButton.classList.remove('show');
  }
  
  productsContainer.style.opacity = '1';
  productsContainer.style.visibility = 'visible';
  productsContainer.style.pointerEvents = 'auto';
  productsContainer.scrollTop = 0;
  backArrow.classList.add('visible');
  shelfBackground.classList.add('visible');
  areProductsOpen = true;
}

function createProductElement(product) {
  const productElement = document.createElement('div');
  productElement.className = 'product';
  productElement.setAttribute('data-product-id', product.id);
  productElement.setAttribute('data-product-name', product.name);
  productElement.setAttribute('data-max-count', product.maxCount);
  
  // Get current count from inventory
  const currentCount = InventoryManager.getProductCount(currentRoom, product.id);
  
  productElement.innerHTML = `
    <div class="product-name">${product.name}</div>
    <img src="${product.image}" alt="${product.name}" class="product-image">
    ${currentCount > 0 ? `<div class="product-quantity">${currentCount}</div>` : ''}
  `;
  
  productElement.addEventListener('click', () => {
    handleProductClick(product.id, product.name, product.maxCount, productElement);
  });
  
  return productElement;
}

function handleProductClick(productId, productName, maxCount, productElement) {
  // Get current count
  let currentCount = InventoryManager.getProductCount(currentRoom, productId);
  
  // Increment count (or reset to 0 if at max)
  if (currentCount < maxCount) {
    currentCount++;
  } else {
    currentCount = 0;
  }
  
  // Update in inventory
  InventoryManager.updateProductCount(currentRoom, productId, productName, currentCount);
  
  // Update display
  const quantityElement = productElement.querySelector('.product-quantity');
  if (currentCount > 0) {
    if (quantityElement) {
      quantityElement.textContent = currentCount;
    } else {
      productElement.innerHTML += `<div class="product-quantity">${currentCount}</div>`;
    }
  } else {
    if (quantityElement) {
      quantityElement.remove();
    }
  }
  
  console.log(`${productName}: ${currentCount}/${maxCount}`);
}

function showMinibar() {
  loginScreen.classList.add('hidden');
  settingsMenu.classList.add('visible');
  
  roomNumberDisplay.textContent = currentRoom;
  roomDisplay.classList.add('show');
  
  if (isCasinoRoom) {
    casinoBadge.style.display = 'block';
  } else {
    casinoBadge.style.display = 'none';
  }
  
  centerContainer.classList.add('show');
  backArrow.classList.add('visible');
  doneButton.classList.remove('show');
  
  setTimeout(() => {
    bar.classList.add('open');
  }, 500);
  
  console.log(`Room: ${currentRoom}, Casino: ${isCasinoRoom ? 'Yes' : 'No'}`);
  areProductsOpen = false;
  updateInventoryDisplay();
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add('show');
  
  setTimeout(() => {
    errorMessage.classList.remove('show');
  }, 3000);
}

function closeProducts() {
  bar.classList.remove('above-focused', 'below-focused', 'shelf-1-door-focused', 'shelf-2-door-focused');
  backArrow.classList.add('visible');
  shelfBackground.classList.remove('visible');
  doneButton.classList.remove('show');
  
  productsContainer.style.opacity = '0';
  productsContainer.style.visibility = 'hidden';
  productsContainer.style.pointerEvents = 'none';
  setTimeout(() => {
    productsContainer.innerHTML = '';
  }, 300);
  
  areProductsOpen = false;
  currentShelfId = null;
}

function logout() {
  centerContainer.classList.remove('show');
  roomDisplay.classList.remove('show');
  bar.classList.remove('open');
  backArrow.classList.remove('visible');
  doneButton.classList.remove('show');
  settingsMenu.classList.remove('visible');
  
  currentRoom = null;
  isCasinoRoom = false;
  areProductsOpen = false;
  
  bar.classList.remove('above-focused', 'below-focused', 'shelf-1-door-focused', 'shelf-2-door-focused');
  shelfBackground.classList.remove('visible');
  productsContainer.style.opacity = '0';
  productsContainer.style.visibility = 'hidden';
  productsContainer.style.pointerEvents = 'none';
  productsContainer.innerHTML = '';
  
  loginScreen.classList.remove('hidden');
  roomInput.value = '';
  roomInput.focus();
  casinoBadge.style.display = 'none';
}

function updateInventoryDisplay() {
  const summaries = InventoryManager.getAllRoomsSummary();
  inventorySummary.innerHTML = '';
  
  if (summaries.length === 0) {
    inventorySummary.innerHTML = '<div class="no-inventory">No inventory data</div>';
    return;
  }
  
  summaries.forEach(item => {
    const roomDiv = document.createElement('div');
    roomDiv.className = 'inventory-item';
    roomDiv.innerHTML = `
      <div class="inventory-room">Room ${item.room}</div>
      <div class="inventory-products">${item.summary}</div>
    `;
    inventorySummary.appendChild(roomDiv);
  });
}

// EVENT HANDLERS
loginButton.addEventListener('click', () => {
  const roomNumber = roomInput.value.trim();
  
  if (!roomNumber) {
    showError('Please enter a room number');
    return;
  }
  
  if (!validateRoomNumber(roomNumber)) {
    showError('Invalid room number. Please enter a valid room (101-124, 201-224, 301-324, 401-410)');
    return;
  }
  
  currentRoom = roomNumber;
  isCasinoRoom = isCasinoRoomNumber(roomNumber);
  showMinibar();
});

roomInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    loginButton.click();
  }
});

roomInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '');
  errorMessage.classList.remove('show');
});

bar.addEventListener("click", (e) => {
  if (e.target.classList.contains('box') || 
      e.target.classList.contains('door') ||
      e.target.classList.contains('door-front')) {
    bar.classList.toggle("open");
  }
});

document.querySelectorAll('.shelf-area').forEach(area => {
  area.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (!bar.classList.contains('open')) return;
    
    const areaType = area.getAttribute('data-area');
    
    bar.classList.remove('above-focused', 'below-focused', 'shelf-1-door-focused', 'shelf-2-door-focused');
    
    if (areaType === 'above') {
      bar.classList.add('above-focused');
      showProducts('above');
    } else if (areaType === 'below') {
      bar.classList.add('below-focused');
      showProducts('below');
    }
  });
});

document.querySelectorAll('.door-shelf').forEach(shelf => {
  shelf.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (!bar.classList.contains('open')) return;
    
    const shelfNumber = shelf.getAttribute('data-shelf');
    
    bar.classList.remove('above-focused', 'below-focused', 'shelf-1-door-focused', 'shelf-2-door-focused');
    
    switch(shelfNumber) {
      case 'door-1':
        bar.classList.add('shelf-1-door-focused');
        showProducts('door-1');
        break;
      case 'door-2':
        bar.classList.add('shelf-2-door-focused');
        showProducts('door-2');
        break;
    }
  });
});

doneButton.addEventListener('click', () => {
  closeProducts();
});

backArrow.addEventListener('click', () => {
  if (areProductsOpen) {
    closeProducts();
  } else {
    logout();
  }
});

shelfBackground.addEventListener('click', () => {
  closeProducts();
});

settingsButton.addEventListener('click', (e) => {
  e.stopPropagation();
  settingsPanel.classList.toggle('show');
  updateInventoryDisplay();
});

document.addEventListener('click', (e) => {
  if (!settingsButton.contains(e.target) && !settingsPanel.contains(e.target)) {
    settingsPanel.classList.remove('show');
  }
});

viewInventory.addEventListener('click', () => {
  updateInventoryDisplay();
});

clearAll.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear ALL inventory data? This cannot be undone.')) {
    InventoryManager.clearAll();
    updateInventoryDisplay();
    alert('All inventory data has been cleared.');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (areProductsOpen) {
      closeProducts();
    } else {
      logout();
    }
  }
});

window.addEventListener('load', () => {
  roomInput.focus();
});