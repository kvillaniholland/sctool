const throwAuthError = () => { 
  throw new Error('SoundCloud authentication failed. Have you set up your auth token?') 
}

const throwHttpError = (error) => { 
  throw new Error(`An unexpected error ocurred while fetching data from SoundCloud: ${error.status} ${error.statusText}`) 
}
