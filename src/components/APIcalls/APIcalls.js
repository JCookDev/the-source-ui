const baseURL = 'http://localhost:3001'

export const getMusic = () => {
  return fetch(`${baseURL}/music`)
  .then(response => {
    if(!response.ok) {
      throw new Error()
    }
    return response.json()
  })
}

