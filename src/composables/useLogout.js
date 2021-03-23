import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// refs
const error = ref(null)

// logout function
const logout = async () => {
  error.value = null

  try {
    // sign out with .signOut() method
    await projectAuth.signOut()
  }
  catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout