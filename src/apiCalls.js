export const getOrders = async () => {
  const response = await fetch('http://localhost:3001/api/v1/orders')
  if (!response.ok) {
    throw Error("Cannot fetch orders at this time");
  }
  const data = await response.json();
  const { orders } = data
  return orders
}

export const postOrder = async order => {
  const url ='http://localhost:3001/api/v1/orders';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      id: order.id,
      name: order.name,
      ingredients: order.ingredients
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options);
  if(!response.ok) {
    throw Error('Unable to create order. Try again later.')
  }
  console.log(response)
  const newOrder = response.json();
  return newOrder;
}