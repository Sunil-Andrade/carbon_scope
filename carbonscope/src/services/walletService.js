import { apiRequest } from './api'

export function getUserWallet(userId) {
  return apiRequest(`/wallet/${userId}`)
}