const baseURL = 'http://localhost:3001'
// const baseURL = 'https://the-source-backend.herokuapp.com'

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

export const deleteMusic = async (musicId) => {
  const deleteReq = {
    method: "DELETE"
  };
  try {
    const response = await fetch(`${baseURL}/api/v1/music/${musicId}`, deleteReq);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(`DELETE Error: ${err}`)
  }
  // return fetch(`${baseURL}/api/v1/music/${musicId}`, {
  //   method: "DELETE",
  // })
  // .then(response => {
  //   if(!response.ok) {
  //     throw new Error(response.status)
  //   }
  // })
}