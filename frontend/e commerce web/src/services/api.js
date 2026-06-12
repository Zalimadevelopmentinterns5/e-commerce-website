const BASE_URL = "http://localhost:5000/api"

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/product`)
  const data = await res.json()
  return data
}

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/product/${id}`)
  const data = await res.json()
  return data
}

export const getOrders = async () => {
  const res = await fetch(`${BASE_URL}/order`)
  const data = await res.json()
  return data
}

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/user`)
  const data = await res.json()
  return data
}