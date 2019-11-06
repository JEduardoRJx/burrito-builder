export const getOrders = async () => {
  const response = await fetch('http://localhost:3001/api/v1/orders')
  if (!response.ok) {
    throw Error("Cannot fetch orders at this time");
  }
  const data = await response.json();
  const { orders } = data
  return orders
}