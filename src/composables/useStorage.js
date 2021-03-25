import { projectStorage } from '../firebase/config'
import { ref } from 'vue'
import getUser from './getUser.js'

const { user } = getUser()

const useStorage = () => {
  const error = ref(null)
  const url = ref(null)
  const filePath = ref(null)

  const uploadImage = async (file) => {
    // 1. create a file path: 'folder/{filename}'
    filePath.value = `covers/${user.value.uid}/${file.name}`
    // 2. make a firebase storage reference: .projectStorage.ref(path) method
    const storageRef = projectStorage.ref(filePath.value)

    try {
      // 3. upload the file to the ref: .put() method
      const res = await storageRef.put(file)
      // access to get the uploaded file
      url.value = await res.ref.getDownloadURL()
    } catch (err) {
      console.log(err.message)
      error.value = err.message
    }
  }

  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref(path)

    try {
      await storageRef.delete()
    } catch (err) {
      console.log(err.message)
      error.value = err.message
    }
  }

  return { error, url, filePath, uploadImage, deleteImage }
}

export default useStorage