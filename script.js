const orderStack = [];
const orderQueue = [];

function placeOrder() {
  const orderInput = document.getElementById('orderInput');
  const order = orderInput.value.trim();

  if (order !== '') {
    orderStack.push(order);
    orderInput.value = '';
    updateOrderDisplay();
  }
}

function processOrder() {
  if (orderStack.length > 0) {
    const processedOrder = orderStack.pop();
    orderQueue.unshift(processedOrder);
    updateOrderDisplay();
  }
}

function updateOrderDisplay() {
    const orderStackContainer = document.getElementById('orderStack');
    const orderQueueContainer = document.getElementById('orderQueue');
  
    orderStackContainer.innerHTML = `<strong>Order Stack (Last In, First Out):</strong><br>${orderStack.join(
      '<br>'
    )}`;
    orderQueueContainer.innerHTML = `<strong>Order Queue (First In, First Out):</strong><br>${orderQueue.join(
      '<br>'
    )}`;
  }
  
  // Initial update
  updateOrderDisplay();