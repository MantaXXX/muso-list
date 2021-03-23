import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// refs
const error = ref(null)
const isPending = ref(false)

// logout function
const logout = async () => {
  error.value = null
  isPending = true

  try {
    // sign out with .signOut() method
    await projectAuth.signOut()
    isPending = false
  }
  catch (err) {
    console.log(err.message)
    error.value = err.message
    isPending = false
  }
}

const useLogout = () => {
  return { error, logout, isPending }
}

export default useLogout