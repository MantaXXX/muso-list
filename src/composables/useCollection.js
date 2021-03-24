import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {

  const error = ref(null)
  const isPending = ref(false)

  // add a new document (JS object)
  const addDoc = async (doc) => {
    error.value = null
    isPending.value = true

    try {
      // specific the collection to add
      const res = await projectFirestore.collection(collection).add(doc)
      isPending.value = false
      return res
    }
    catch (err) {
      console.log(err.message)
      error.value = 'could not send the message'
      isPending.value = false
    }
  }

  return { error, addDoc, isPending }

}

export default useCollection