const baseURL = 'https://the-source-backend.herokuapp.com'

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
    body: JSON.stringify(newMusic),
    headers: {
      "Content-Type": "application/JSON"
    }})
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status)
    }
    return response.json()
  })
}