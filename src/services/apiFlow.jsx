import httpServices from "./httpServices"

export const logInApi = (payload) => {
  return httpServices.post(`/User/login`,payload)
}

export const registerApi = (payload) => {
  return httpServices.post(`/User/register`,payload)
}

export const searchDomesticAddressApi = () => {
  return httpServices.get(`/Address/search-domestic-address`,)
}

export const getDomesticAddressDetailsApi = () => {
  return httpServices.get(`/Address/get-domestic-address-details`,)
}

export const searchDomesticRegisterAddressApi = (term) => {
  return httpServices.get(`/Address/search-domestic-address?term=${encodeURIComponent(term)}`)
}

export const getDomesticRegisterAddressApi = (addressId) => {
  return httpServices.get(`/Address/get-domestic-address-details?id=${addressId}`)
}

export const createCompanyRegisterApi = (payload) => {
  return httpServices.post(`/Company/register`, payload)
}

export const checkUserExistsApi = (payload) => {
  return httpServices.post(`/User/check-user-exists`, payload)
}