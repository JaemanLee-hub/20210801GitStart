export function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
  return true
}
