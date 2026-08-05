import { apiRequest } from './api'

export function getAllActivities() {
  return apiRequest('/activities')
}

export function getActivityById(id) {
  return apiRequest(`/activities/${id}`)
}

export function createActivity(activityData) {
  return apiRequest('/activities', {
    method: 'POST',
    body: JSON.stringify(activityData),
  })
}

export function updateActivity(id, activityData) {
  return apiRequest(`/activities/${id}`, {
    method: 'PUT',
    body: JSON.stringify(activityData),
  })
}

export function deleteActivity(id) {
  return apiRequest(`/activities/${id}`, {
    method: 'DELETE',
  })
}

export function verifyActivity(id, status) {
  return apiRequest(`/activities/${id}/verify`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  })
}

export async function uploadProofImage(file) {
  const formData = new FormData()
  formData.append('proof', file)

  const response = await fetch(
    'http://localhost:8080/api/v1/activities/upload',
    {
      method: 'POST',
      body: formData,
    }
  )

  if (!response.ok) {
    throw new Error('Upload failed')
  }

  return response.json()
}