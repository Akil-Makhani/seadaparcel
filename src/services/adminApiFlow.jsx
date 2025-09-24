import httpServices from "./httpServices"

export const adminLogInApi = (payload) => {
  return httpServices.post(`/User/adminlogin`,payload)
}