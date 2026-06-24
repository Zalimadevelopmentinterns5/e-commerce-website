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

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/user`)
  const data = await res.json()
  return data
}

export const getUserById = async (id) => {
  const res = await fetch(`${BASE_URL}/user/${id}`)
  const data = await res.json()
  return data
}

export const createUser = async (formData) => {
  const res = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    body: formData
  })
  const data = await res.json()
  return data
}

export const updateUser = async (id, body) => {
  const res = await fetch(`${BASE_URL}/user/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
  const data = await res.json()
  return data
}

export const deleteUser = async (id) => {
  const res = await fetch(`${BASE_URL}/user/${id}`, {
    method: "DELETE"
  })
  const data = await res.json()
  return data
}

export const getOrders = async () => {
  const res = await fetch(`${BASE_URL}/order`)
  const data = await res.json()
  return data
}

export const createOrder = async (body) => {
  const res = await fetch(`${BASE_URL}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
  const data = await res.json()
  return data
}

export const updateOrder = async (id, body) => {
  const res = await fetch(`${BASE_URL}/order/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
  const data = await res.json()
  return data
}

export const deleteOrder = async (id) => {
  const res = await fetch(`${BASE_URL}/order/${id}`, {
    method: "DELETE"
  })
  const data = await res.json()
  return data
}
