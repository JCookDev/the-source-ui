const baseURL = 'http://localhost:3001'

export const getMusic = () => {
  return fetch(`${baseURL}/api/v1/music`)
  .then(response => {
    if(!response.ok) {
      throw new Error()
    }
    return response.json()
  })
}

export const postMusic = (newMusic) => {
  return fetch(`${baseURL}/api/v1/music`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newMusic)
  })
  .then(response => response.json())
}