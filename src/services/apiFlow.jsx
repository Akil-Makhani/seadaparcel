import httpServices from "./httpServices"

export const logInApi = (payload) => {
  return httpServices.post(`/users/login`,payload)
}